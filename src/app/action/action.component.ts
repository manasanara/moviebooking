import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { product } from '../models/user.model';
@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  action:any[]=[];
  constructor(private dsObj:DataService) { }

  ngOnInit(): any {
    //  this.dsObj.getactiondata().subscribe(
    //   data=>{
    //      this.action=data;
    //      console.log(this.action);
    //   },
    //   err=>{
    //     console.log("err is ",err);
    //   }
    //  )
  }

}
