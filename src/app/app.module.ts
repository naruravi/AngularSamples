import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { HttpClient } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'
import { LayoutModule } from '@progress/kendo-angular-layout'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import '@progress/kendo-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    TooltipModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
