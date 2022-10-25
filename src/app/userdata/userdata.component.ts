import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { EditdataComponent } from '../editdata/editdata.component';
@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {
  constructor(public dsObj:DataService,public dailog:MatDialog) { }
  // adstudent =new FormGroup(
  //    name:new FormControl(''),
  //    email:new FormControl('')
  // );
   userdata:any[]=[];
  ngOnInit(): void {
   
    this.dsObj.getuserdata().subscribe(
      data=>{
         this.userdata=data;
      },
      err=>{
        console.log("err is ",err);
      }
     )
  }
  displayedColumns:string[]=['id','username','date','showtime','noofseats','number','delete','edit'];
  //dataSource=this.userdata;
  editdetails(row :any){
    
    this.dailog.open(EditdataComponent,{width:'30%',data:row}).afterClosed().subscribe((val=>{
      if(val==='update'){
       this.dsObj;
      }
    }));
  }
  ondelete(id:number){
    this.dsObj.deleteuser(id).subscribe({
     next:(res)=>{
       alert("User details deleted")
     },
     error:()=>{
       alert("error while deleting record");
     }
    })
 }
}
