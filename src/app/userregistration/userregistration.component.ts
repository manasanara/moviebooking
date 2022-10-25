import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {
  userobj: User = {username:"",date:"",showtime:"",noofseats:"",number:""};
   adduserdata(){
    console.log(this.userobj);
   }
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
