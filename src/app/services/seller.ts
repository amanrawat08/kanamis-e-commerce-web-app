import { Injectable } from '@angular/core';
import { SellerInterface } from '../core/seller-interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Seller {
  // isSellerLogin: boolean = false;
  isSellerLogin = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  sellerSignUp(data: SellerInterface) {
    if (!data.name || !data.email || !data.password) {
      alert('Please fill all the fields');
      return;
    }

    return this.http
      .post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((res) => {
        this.isSellerLogin.next(true);
        localStorage.setItem('seller', JSON.stringify(res.body));
        this.router.navigate(['/sellerHome']);
      });
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      console.log('dfdf');

      this.isSellerLogin.next(true);
      this.router.navigate(['sellerHome']);
    }
  }

  sellerLogin(data: SellerInterface) {
    if (!data.email || !data.password) {
      alert('Fill all Requied Fields');
    }

    this.http.get<SellerInterface[]>('http://localhost:3000/seller').subscribe((res) => {
      const seller = res.find((t) => data.email === t.email);
      if (!seller) {
        alert('seller not found');
        return;
      }

      localStorage.setItem('seller', JSON.stringify(seller));

      this.router.navigate(['sellerHome'])

    });
  }
}
