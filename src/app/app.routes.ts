import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SellerAuth } from './seller-auth/seller-auth';
import { SellerHome } from './features/seller/seller-home/seller-home';
import { sellerAuthGuard } from './core/guards/seller-auth-guard';

export const routes: Routes = [
    {
        path:"",
        component:Home
    }
    ,
    {
        path:"seller-auth",
        component:SellerAuth
    },
    {
        path:"sellerHome",
        canActivate: [sellerAuthGuard],
        loadChildren: ()=> import('./features/seller/seller.routes').then(m=>m.sellerRoutes)
    }, 
];
