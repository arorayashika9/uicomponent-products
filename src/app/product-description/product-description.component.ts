import { Component, OnInit, Output, EventEmitter } from '@angular/core';
 import { ProductDetailService } from '../service/product-detail.service';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css'],
  providers:[ProductDetailService]
})
export class ProductDescriptionComponent implements OnInit {

 
  @Output() success = new EventEmitter<any>();
 	public searchedProduct: string="machine";
 	public productName : string;
  	public productDescription : string;
  	public productValidity :string;

   constructor(private productDetailService : ProductDetailService) { }

  ngOnInit() {
  }

  // Function to get customer name and make service call to get customer name from app
   searchProduct(){
   	this.productDetailService.searchProduct(this.searchedProduct)
   	.subscribe((res) =>{
       this.productName=res.offerTitle;
       this.productDescription=res.offerDescription;
       this.productValidity=res.offerValidity;
       console.log(res.offerTitle);
    	},(error) =>{

   	});
   }
 }