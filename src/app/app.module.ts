import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { Router, RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { EmployeeTaskViewComponent } from './employee-task-view/employee-task-view.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UpdateStatusComponent } from './update-status/update-status.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"addemp",
    component:AddEmployeeComponent
  },
  {
    path:"adminviewtask",
    component:ViewTaskComponent
  },
  {
    path:"addtask",
    component:AddTaskComponent
  },
  {
    path:"empviewtask",
    component:EmployeeTaskViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    AddEmployeeComponent,
    ViewTaskComponent,
    AddTaskComponent,
    AdminNavbarComponent,
    EmployeeTaskViewComponent,
    UserNavbarComponent,
    UpdateStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
