import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { TrillerComponent } from '../triller/triller.component';
@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {

  moviedetails:any[]=[];
  constructor(private dsObj:DataService) { }

  ngOnInit(): any {
     this.dsObj.getactiondata3().subscribe(
      data=>{
         this.moviedetails=data;
         console.log(data);
      },
      err=>{
        console.log("err is ",err);
      }
     )
  }
}
