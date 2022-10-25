import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { findIndex } from 'rxjs';
import { FormGroup, NgForm } from '@angular/forms';
import { SuccessComponent } from '../success/success.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  moviedetails:any[]=[];
  show=false;
  usersdata:any={};
  constructor(public dsObj:DataService,public route:ActivatedRoute,public myrouter:Router,private dailog:MatDialog) { }
   name:any;
   id='';
   url='';
   movie:any;
   movieArray:any;
   ticket:Number=0;
   userid:Number=0;
   checkTickets:string="0";
  ngOnInit(): any {
     this.name=this.route.snapshot.params['id'];
     this.dsObj.getactiondata3().subscribe(res=>{
      this.movieArray=res;
      let movieindex=this.movieArray.findIndex((movie:{id:string})=>{movie.id==this.name});
      let index = this.movieArray.findIndex((x:{id:string}) => x.id === this.name);
      this.movie=this.movieArray[index];
      console.log(this.movie);
     })
  }
  book:any=false;
  obj:any={};
  userobj: User = {username:"",date:"",showtime:"",noofseats:"",number:""};
   adduserdata(myForm:NgForm,id:any){
    console.log(id);
    console.log(myForm.value);
    let ticket=(this.movie.noofseatavailable)-(myForm.value.noofseats);
     const updatedobject ={
      name:this.movie.name,
      image:this.movie.image,
      noofseatavailable:ticket,
      ticketsbooked:(this.movie.ticketsbooked)+(myForm.value.noofseats),
      description:this.movie.description,
      id:this.movie.id,
     }
     console.log(myForm.value,);
     this.dsObj.updateddata(id,updatedobject).subscribe(x=>{
      console.log('updated successfully')
     });
     this.storedata(myForm);
     this.retrievedata();
     //adding user data to api
     const userdata ={
      username:myForm.value.username,
      date:myForm.value.date,
      showtime:myForm.value.showtime,
      noofseats:myForm.value.noofseats,
      number:myForm.value.number
     }
     this.dsObj.adduserdata(userdata).subscribe((result)=>{
         console.log(result);
     });
     console.log(userdata);
    }
    onsubmit(){
      console.log("this is clicked");
      this.book=true;
      this.dailog.open(SuccessComponent);
      // this.myrouter.navigate(['/success']);
    }
    usertable:any={};
    storedata(myForm:NgForm){
        this.usersdata=Object.assign(this.usersdata,myForm.value);
    //localStorage.setItem('User',JSON.stringify(this.usersdata));
    //  console.log(localStorage.getItem('User'));
    this.storedatas(this.usersdata);
    }
    set:any;
    
    storedatas(usersdata:any){
      let  User=[];
       if(localStorage.getItem('User')!==null){
        this.set=localStorage.getItem('User' ||'{}');
        User=JSON.parse(this.set);
        User=[usersdata,...(User)]
       }
       else{
        User=[usersdata];
       }
       localStorage.setItem('User',JSON.stringify(User));
    }
    data:any;
    retrievedata(){
       this.data=localStorage.getItem('User');
       this.usertable=JSON.parse(this.data);
      // console.log(this.usertable);
    }
   }

