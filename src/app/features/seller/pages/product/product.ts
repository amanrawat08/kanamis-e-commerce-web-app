import { Component } from '@angular/core';
import { SellerSidebar } from "../../component/seller-sidebar/seller-sidebar";
import { Seller } from '../../../../services/seller';

@Component({
  selector: 'app-product',
  imports: [SellerSidebar],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  products: any[] = [];

  constructor(private sellerService: Seller) {}

  ngOnInit() {
    if(this.products.length===0){
      this.sellerService.getProduct().subscribe(data=>{
        this.products = data;
        console.log(this.products);
        
      }); 
    }
  }
  
}

