import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor (private api:ApiService){}

  name=""
  productData:any=[]

  taskName=""
  description=""
  status="Assigned"

  readValues=()=>{
    let data ={"name":this.name}
    this.api.adminTaskSearch(data).subscribe(
      (response:any)=>{
        this.productData=response
      }
    )
  }

  addTask=(id:any)=>{
    let taskdata ={"empid":id,"taskName":this.taskName,"description":this.description,"status":this.status}

    this.api.addTask(taskdata).subscribe(
      (response:any)=>{
        if (response.status=="success") {
          alert("Task Added Successfully")
          window.location.reload()
        } else {
          alert("Something went wrong")
        }
      }
    )
  }

}
