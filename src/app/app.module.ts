import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductDescriptionComponent
  ],
  imports: [
    BrowserModule,
        HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
