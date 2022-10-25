import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-drama',
  templateUrl: './drama.component.html',
  styleUrls: ['./drama.component.css']
})
export class DramaComponent implements OnInit {

  drama:any[]=[];
  constructor(private dsObj:DataService) { }

  ngOnInit(): any {
    //  this.dsObj.getactiondata1().subscribe(
    //   data=>{
    //      this.drama=data;
    //   },
    //   err=>{
    //     console.log("err is ",err);
    //   }
    //  )
  }

}
