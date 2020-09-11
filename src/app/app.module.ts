import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FuterComponent } from './futer/futer.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CategorycarComponent } from './categorycar/categorycar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CategoryComponent } from './home/category/category.component';
import { BookingformComponent } from './home/bookingform/bookingform.component';
import { ServiceComponent } from './service/service.component';
import { ShortenPipe } from './shorten.pipe'
const appRoutes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "cars",
    component : CarsComponent
  },
  {
    path : "cars/:id",
    component : CategorycarComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "service",
    component : ServiceComponent
  },

  {
    path : "**",
    redirectTo : ""
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FuterComponent,
    HomeComponent,
    CarsComponent,
    ContactComponent,
    CategorycarComponent,
    NavigationComponent,
    CategoryComponent,
    BookingformComponent,
    ServiceComponent,
    ShortenPipe,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
