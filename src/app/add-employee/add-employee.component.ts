import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor (private api:ApiService){}

  name=""
  designation=""
  salary=""
  phone=""
  email=""
  username=""
  password=""

  readValues=()=>{
    let data={ "name" : this.name, "designation" : this.designation, "salary" : this.salary,"phone" : this.phone, "email" : this.email,"username" : this.username,"password" : this.password}

    this.api.addEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
          if (response.status=="success") {
            alert("Employee Added Successfully")
            this.name=""
            this.designation=""
            this.salary=""
            this.phone=""
            this.email=""
            this.username=''
            this.password=""
          } else {
            alert("Something went wrong")
          }
        }
    )
  }
}
