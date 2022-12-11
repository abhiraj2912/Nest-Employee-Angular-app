import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmployee=(employeeData:any)=>
  {
    return this.http.post("http://localhost:8080/addemployee",employeeData)
  }
  addTask=(taskData:any)=>
  {
    return this.http.post("http://localhost:8080/addtask",taskData)
  }
  login=(loginData:any)=>
  {
    return this.http.post("http://localhost:8080/login",loginData)
  }

  employeeTaskView=(employeeID:any)=>
  {
    return this.http.post("http://localhost:8080/empviewtask",employeeID)
  }

  adminTaskView=()=>
  {
    return this.http.get("http://localhost:8080/adminviewtask")
  }

  adminTaskSearch=(employeename:any)=>
  {
    return this.http.post("http://localhost:8080/adminsearchtask",employeename)
  }

  adminEmployeeSearch=(employeename:any)=>
  {
    return this.http.post("http://localhost:8080/adminsearchemp",employeename)
  }

  updateStatus=(taskdata:any)=>
  {
    return this.http.post("http://localhost:8080/updatestatus",taskdata)
  }

  employeesearchtask=(tasksearch:any)=>
  {
    return this.http.post("http://localhost:8080/employeesearchtask",tasksearch)
  }
  
}
