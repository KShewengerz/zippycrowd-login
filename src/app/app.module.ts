import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeModule } from '@app/home/home.module';

import { AppComponent } from '@app/app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
