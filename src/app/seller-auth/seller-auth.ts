import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Seller } from '../services/seller';
import { SellerInterface } from '../core/seller-interface';
import {Router} from '@angular/router';
@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule],
  templateUrl: './seller-auth.html',
  styleUrl: './seller-auth.css',
})
export class SellerAuth { 

  toogleLogin:boolean = false;

  constructor(private sellerService: Seller, private router: Router) { }

  ngOnInit(){
    this.sellerService.reloadSeller();
  }
  signUp(data:SellerInterface):void{  
    this.sellerService.sellerSignUp(data);
  }
  login(data:SellerInterface){
    this.sellerService.sellerLogin(data)
    
  }

  toggleLoginfunc(){
    this.toogleLogin = !this.toogleLogin;
  }
}
