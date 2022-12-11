import { Component } from '@angular/core';
import { last } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent {
  name=""
  taskData:any=[]

  constructor(private api:ApiService){
    api.adminTaskView().subscribe(
      (response:any)=>{
        this.taskData=response
      }
    )
  }

  readValues=()=>{
    let data ={"name":this.name}
    this.api.adminTaskSearch(data).subscribe(
      (response:any)=>{
        this.taskData=response
      }
    )
  }


}
