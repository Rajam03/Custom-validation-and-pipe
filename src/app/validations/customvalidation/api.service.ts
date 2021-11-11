import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn:'root'
})

export class apiservice{
    constructor(private http:HttpClient){}
    baseurl:any= "http://localhost:3000/people";
    getdata():Observable<any>{
        return this.http.get(this.baseurl);
    }
    delete(id:any): Observable<any>{
        return this.http.delete(`http://localhost:3000/people/${id}`);
    }
}
