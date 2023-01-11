import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule//HttpClient'in projemizde injection yapabilmesi icin import edilmesi gerek 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
