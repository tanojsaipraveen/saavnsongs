import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SaavnapiService {
 
  baseURL :string= "https://songsapi.herokuapp.com/"
  constructor(private http:HttpClient) {
    let headers = new HttpHeaders();
    headers  = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
   }
 
   getsongs(name){
     return this.http.get(this.baseURL+"helloworld/"+name);
    // return this.http.get("http://127.0.0.1:5000/helloworld/"+name);
   }
   getsongdetails(id){
    return this.http.get(this.baseURL+"songdetails/"+id);
   }
   gettrendingsongs(){
     return this.http.get(this.baseURL+"trendingsongs/");
   }
}
