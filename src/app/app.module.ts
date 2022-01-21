import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from "./components/main/main.component";
import { HeaderComponent } from './components/header/header.component';
import { EmployeesContainerComponent } from './components/employees-container/employees-container.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { HttpClientModule } from "@angular/common/http";
import {MaterialModule} from "./shared/modules/material.module";
import { AddEmployeeComponent } from './components/dialogs/add-employee/add-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    EmployeesContainerComponent,
    EmployeeCardComponent,
    AddEmployeeComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
    ],
  providers: [
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }