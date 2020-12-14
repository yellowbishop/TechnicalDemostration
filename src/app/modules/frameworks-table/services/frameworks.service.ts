import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FrameworkModel } from '../model/framework.model';
import { FramworksDataRequestService } from './frameworks-data-request.service';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class FramworksService {

  constructor(private dataRequestService: FramworksDataRequestService) { }

  //RETURN A LIST OF FRAMEWORKMODEL MAPPED FROM FRAMEWORKDTO
  getList(searchFilter?: string, language?: string, numberOfItems?: number): Observable<FrameworkModel[]> {
    return this.dataRequestService.getList(searchFilter, language, numberOfItems).pipe(
      map(apiResponse => {
        return apiResponse.items.map(frameworkDto => new FrameworkModel(frameworkDto))
      })
    );
  }
}
