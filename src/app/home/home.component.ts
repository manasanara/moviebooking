import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { TrillerComponent } from '../triller/triller.component';
import { DramaComponent } from '../drama/drama.component';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  triller:any[]=[];
  constructor(private dsObj:DataService,public router :Router,public Activatedroute:ActivatedRoute) { }

  ngOnInit(): any {
     this.dsObj.getactiondata3().subscribe(
      data=>{
         this.triller=data;
      },
      err=>{
        console.log("err is ",err);
      }
     )
  }
  getmovie(id:string){
    //this.router.navigate(['/login/:id'],{queryParams:{data:id}});
    this.router.navigate(['login',id]);
  }
}
