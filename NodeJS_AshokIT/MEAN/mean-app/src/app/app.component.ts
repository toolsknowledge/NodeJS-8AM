import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { meanService } from './mean.service';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    products:Product[];
    constructor(public service:meanService){}
    ngOnInit(){
        this.service.getProducts().subscribe((posRes)=>{
            this.products = posRes;
        },(errRes:HttpErrorResponse)=>{
            if(errRes.error instanceof Error){
              console.log("client side error");
            }else{
              console.log("server side errors");
            }
        });
    }
}
