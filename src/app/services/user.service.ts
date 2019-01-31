import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UserService{
    constructor(private http:HttpClient){
    }

    consultar (){
        const url = 'http://localhost:8089/users';
        return this.http.get(url);
    }
    insert (data:any){
      const url = 'http://localhost:8089/users';
      return this.http.post(url,JSON.stringify(data));
  }

}

