import { CanActivateFn } from '@angular/router';
import {inject} from '@angular/core';
import { Seller } from '../../services/seller'; 
export const sellerAuthGuard: CanActivateFn = (route, state) => {
  
  const sellerService = inject(Seller);
  if(localStorage.getItem("seller")){
    return true;
  }
  return sellerService.isSellerLogin;
};
