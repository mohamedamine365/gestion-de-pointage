import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url="http://127.0.0.1:300"
  constructor(private http:HttpClient){}
  
  login( data: any ){
    return this.http.post(this.url + 'signin',  data);
  }
  
  register( data: any ){
    return this.http.post( this.url + 'signup', data );
  }
  isLoggedIn(){
    let token =localStorage.getItem('token')
    
    if(token){
      return true;
    }else{
      return false
    }
  }
  
  
  getUserDataFromToken(){
    let token=localStorage.getItem("token")
    if(token){
      let codeddata=token.split('.')[1];
      let decodeddata=window.atob(codeddata)  //object aadi 
      let dataFormatJson=JSON.parse(decodeddata)//object js
      console.log(dataFormatJson);
      return dataFormatJson
      
    }
  }
  
  }




