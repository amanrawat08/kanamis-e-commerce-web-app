import {  Routes } from "@angular/router";
import { SellerHome } from "./seller-home/seller-home";
import { Product } from "./pages/product/product";

export const sellerRoutes: Routes = [
    {
        path:'',
        component:SellerHome
    },
    {
        path:'products',
        component:Product
    }
]