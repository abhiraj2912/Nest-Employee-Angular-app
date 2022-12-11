import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent {

  taskName=""
  status=""
  taskData:any=[]
  id=localStorage.getItem("userInfo")
  constructor(private api:ApiService){}

  readValues=()=>{
    let data ={"empid":this.id,"taskName":this.taskName}
    this.api.employeesearchtask(data).subscribe(
      (response:any)=>{
        this.taskData=response
      }
    )
  }

  updatestatus=(id:any)=>{
    let updatedata:any={"id":id,"status":this.status}

    this.api.updateStatus(updatedata).subscribe(
      (response:any)=>{
        if (response.status=="success") {
          alert("Status Updated")
          window.location.reload()
        } else {
          alert("Something went wrong")
        }
      }
    )
  }

}
