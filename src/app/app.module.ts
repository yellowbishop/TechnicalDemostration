import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
