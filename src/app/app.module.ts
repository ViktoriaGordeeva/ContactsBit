import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { StaticticsPageComponent } from './pages/statictics-page/statictics-page.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { TrunsferFundsComponent } from './cmps/trunsfer-funds/trunsfer-funds.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactEditPageComponent,
    ContactDetailsPageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    ChartComponent,
    StaticticsPageComponent,
    SignupPageComponent,
    TrunsferFundsComponent,
    MoveListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
