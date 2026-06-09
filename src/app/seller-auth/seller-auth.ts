import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Seller } from '../services/seller';
import { SellerInterface, sellerLogin } from '../core/seller-interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule],
  templateUrl: './seller-auth.html',
  styleUrl: './seller-auth.css',
})

@Injectable({
  providedIn:'root'
})

export class SellerAuth {
  toogleLogin: boolean = false;
  loginErrorText: string = '';

  constructor(
    private sellerService: Seller,
    private router: Router,
  ) {}

  ngOnInit() {
    this.sellerService.reloadSeller();
    this.sellerService.isLoginError.subscribe((err) => {
      console.log('Received:', err);

      if (err) {
        console.log('Running');
        this.loginErrorText = 'Email or password is Wrong';
      }
    });
  }
  signUp(data: SellerInterface): void {
    this.sellerService.sellerSignUp(data);
  }
  login(data: sellerLogin) {
    console.log("login cclick");
    
    this.sellerService.sellerLogin(data);
  }

  toggleLoginfunc() {
    this.toogleLogin = !this.toogleLogin;
  }

  logOut(){
    console.log("swe");
    
    localStorage.removeItem("seller");
  }
}
