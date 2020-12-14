import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FrameworkModel } from '../../model/framework.model';
import { FramworksService } from '../../services/frameworks.service';

// Declaramos jquery para poder usarlo
declare var $: any;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  //DATA
  frameworksObservable: Observable<FrameworkModel[]>;

  //FORM
  formData: FormGroup;
  showFrameworkInvalid: boolean = false;
  showLanguageInvalid: boolean = false;
  showCountInvalid: boolean = false;
  @ViewChild('advancedFilterCollapsableBock', { static: true, read: HTMLElement }) collapsableBlock: HTMLElement;

  constructor(private frameworksService: FramworksService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadForm();
    this.loadData();
    this.enablePopovers();
  }
  //FORM
  loadForm() {
    this.formData = this.fb.group({
      framework: ['', Validators.minLength(3)],
      language: ['', Validators.minLength(3)],
      count: [10, [Validators.min(1), Validators.max(10)]]
    });
    //Subscripción para ocultar errores en los input al introducir datos 
    this.formData.valueChanges.subscribe(() => {
      this.hiddenInvalidInput();
    })
    //Subscripción de cambios para la búsquda medio segundo despues de dejar de introducir datos
    this.formData.valueChanges.pipe(debounceTime(500)).subscribe(() => {
      if (this.formData.valid) {
        this.loadData(this.formData.get('framework').value, this.formData.get('language').value, this.formData.get('count').value)
      } else {
        //Comprobamos y mostramos los inputs inválidos
        const frameworkControl: FormControl = this.formData.get("framework") as FormControl;
        const languageControl: FormControl = this.formData.get("language") as FormControl;
        const countControl: FormControl = this.formData.get("count") as FormControl;
        var frameworkFinalValue: string;
        var languageFinalValue: string;
        var countFinalValue: number;
        if (frameworkControl.value.length > 0 && frameworkControl.invalid) {
          this.showInvalidInput("framework");
        } else if (frameworkControl.value.length != 0) {
          frameworkFinalValue = frameworkControl.value;
        }
        if (languageControl.value.length > 0 && languageControl.invalid) {
          this.showInvalidInput("language");
        } else if (languageControl.value.length != 0) {
          languageFinalValue = languageControl.value;
        }
        if (countControl.invalid) {
          this.showInvalidInput("count");
        } else {
          countFinalValue = countControl.value;
        }
        //Lanzamos la petición con los inputs válidos y los inválidos a null para que sea el valor default
        this.loadData(frameworkFinalValue, languageFinalValue, countFinalValue);
      }
    });
  }
  //Expand and collapse advanced filters
  toggleAdvancedFilters() {
    $('#advancedFilters').collapse('toggle');
    $('#advancedFilters').collapse()
  }
  //Show invalid text
  hiddenInvalidInput(controlName?: "framework" | "language" | "count") {
    switch (controlName) {
      case "framework": {
        this.showFrameworkInvalid = false;
        break;
      };
      case "language": {
        this.showLanguageInvalid = false;
        break;
      };
      case "count": {
        this.showCountInvalid = false;
        break;
      };
      case undefined: {
        this.showFrameworkInvalid = false;
        this.showLanguageInvalid = false;
        this.showCountInvalid = false;
        break;
      }
      case null: { }
      default: {

      }
    };


  }
  showInvalidInput(controlName: "framework" | "language" | "count") {
    switch (controlName) {
      case "framework": {
        this.showFrameworkInvalid = true;
        break;
      };
      case "language": {
        this.showLanguageInvalid = true;
        break;
      }
      case "count": {
        this.showCountInvalid = true;
        break;
      };
    }

  }
  //DATA
  loadData(searchFilter?: string, language?: string, count?: number) {
    this.frameworksObservable = this.frameworksService.getList(searchFilter, language, count);

  }
  //Table
  enablePopovers() {
    $('[data-toggle="popover"]').popover({ delay: { "show": "500" }, placement: "bottom", trigger: "hover" });

  }

}
