import { Injectable } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from './models/user.model';
import { ActionComponent } from './action/action.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  //inject HttpClient service object
  constructor(private hc: HttpClient) { }

  // getactiondata(): Observable<any>{
  //   //http get
  //  return this.hc.get("https://63206529e3bdd81d8ef95a82.mockapi.io/nurse")
  // }
  // getactiondata1(): Observable<any>{
  //   //http get
  //  return this.hc.get("https://634937f90b382d796c80b2b4.mockapi.io/drama/draama")
  // }
  // getactiondata2(): Observable<any>{
  //   //http get
  //  return this.hc.get("https://63494748a59874146b1bc9e6.mockapi.io/movie/triller")
  // }
  getactiondata3(): Observable<any>{
    //http get
   return this.hc.get("https://6349a6515df952851404cf7a.mockapi.io/moviedetails")
  }
  updateddata(movieid:any,data:any){
     const endpointUrl='https://6349a6515df952851404cf7a.mockapi.io/moviedetails/'+movieid;
     return this.hc.put(endpointUrl,data)
  }
  getuserdata():Observable<any>{
    return this.hc.get("https://6349a6515df952851404cf7a.mockapi.io/userdata")
  }
  adduserdata(data:any){
    return this.hc.post("https://6349a6515df952851404cf7a.mockapi.io/userdata",data)
  }
  updateduserdata(data:any,id:number){
     return this.hc.put('https://6349a6515df952851404cf7a.mockapi.io/userdata/'+id,data)
  }
  deleteuser(id:number){
    return this.hc.delete("https://6349a6515df952851404cf7a.mockapi.io/userdata/"+id);
  }
}
