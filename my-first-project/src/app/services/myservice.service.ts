import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  {throwError, Observable} from 'rxjs';
import { catchError } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  getAllDoc(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
      .pipe(catchError(this.errorHandler));

  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

  getUser(id:number){

    return this.http.get("https://jsonplaceholder.typicode.com/users/"+id);
  }
  
}
