//import Injectable
//Injectable, used to create the Service
import { Injectable } from "@angular/core";
//import HttpClient
//HttpClient used to make the rest api calls
import { HttpClient } from "@angular/common/http";
//import Observable
//Observable used to make the asynchronous calls
import { Observable } from "rxjs"; 
import { Product } from "./product.model";
//use Injectable
@Injectable({
    providedIn:"root"
})
//export the service
export class meanService{
    constructor(public http:HttpClient){}
    getProducts():Observable<Product[]>{
        return this.http.get<Product[]>(`http://localhost:8080/fetch`);
    };
};