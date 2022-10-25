import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, NgForm } from '@angular/forms';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserdataComponent } from '../userdata/userdata.component';
import { Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { findIndex } from 'rxjs';
@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,public dsobj:DataService,private router:Router,private ActivatedRoute:ActivatedRoute,@Inject(MAT_DIALOG_DATA) public editData:any, public dailogRef:MatDialogRef<EditdataComponent>) { }
 userdata !:FormGroup;
  id:any;
  user:any;
  ngOnInit(): void {
    this.dsobj.getuserdata().subscribe(
      data=>{
         this.user=data;
      },
      err=>{
        console.log("err is ",err);
      }
     )
    //   let index = this.dsobj.findIndex((x:{id:string}) => x.id === this.name);
    // this.movie=this.movieArray[index];
    this.userdata = this.formBuilder.group({
      username:['',Validators.required],
      date:['',Validators.required],
      showtime:['',Validators.required],
      noofseats:['',Validators.required],
      number:['',Validators.required],
    })
    console.log(this.userdata);
    if(this.editData){
      this.userdata.controls['username'].setValue(this.editData.username);
      this.userdata.controls['date'].setValue(this.editData.date);
      this.userdata.controls['showtime'].setValue(this.editData.showtime);
      this.userdata.controls['noofseats'].setValue(this.editData.noofseats);
      this.userdata.controls['number'].setValue(this.editData.number);
     }
  }
  updatedata(){
      console.log(this.userdata.value);
          this.updatedata1();
  }
  updatedata1(){
     this.dsobj.updateduserdata(this.userdata.value,this.editData.id).subscribe({
      next:(res)=>{
        alert("userdata updated Successfully");
        this.userdata.reset();
        this.dailogRef.close('Update');
      },
      error:()=>{
        alert("error while updating userdata");
      }
     })
  }
}
