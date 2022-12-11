import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor (private api:ApiService, private route:Router){}

  username=""
  password=""

  loginValues=()=>{
    let data={"username":this.username, "password":this.password}

    this.api.login(data).subscribe(
      (response:any)=>{
        if (response.status=="success") {
          let userId:any=response.id
          console.log(userId)
          localStorage.setItem("userInfo", userId)
          this.route.navigate(['/empviewtask'])
        } else {
          alert("Invalid Credentials")
        }
      }
    )
  }

}
