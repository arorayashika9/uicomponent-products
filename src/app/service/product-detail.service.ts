 import { Injectable } from '@angular/core';
 import { Http, Response, RequestOptions, Headers } from '@angular/http';
 import { Observable } from 'rxjs/Observable';
 import 'rxjs/add/operator/map';

 import { App } from '../config/app.config'; 

@Injectable()
export class ProductDetailService {

  constructor(private http : Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json'});

   // Function to get customer name and make service call to get customer name from App
   searchProduct(searchedProduct) {
     return this.http.get(App.mapping+searchedProduct)
      .map(data => data.json(),
    (error: any)=>this.handleError(error));
    }
    private handleError(error: Response){
      return Observable.throw(error.statusText);
    }
  }
 
