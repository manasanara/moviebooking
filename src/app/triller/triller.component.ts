import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MoviedetailComponent } from '../moviedetail/moviedetail.component';
import { UserregistrationComponent } from '../userregistration/userregistration.component';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-triller',
  templateUrl: './triller.component.html',
  styleUrls: ['./triller.component.css']
})
export class TrillerComponent implements OnInit {

  triller:any[]=[];
  constructor(private dsObj:DataService,public router :Router) { }

  ngOnInit(): any {
    //  this.dsObj.getactiondata2().subscribe(
    //   data=>{
    //      this.triller=data;
    //   },
    //   err=>{
    //     console.log("err is ",err);
    //   }
    //  )
  }
  getmovie(id:string){
    console.log(id);
    this.router.navigate(['/login/data='],{queryParams:{data:id}});
  }
}
