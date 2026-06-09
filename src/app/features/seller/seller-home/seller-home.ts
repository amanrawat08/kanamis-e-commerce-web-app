import { Component } from '@angular/core'; 
import { SellerSidebar } from '../component/seller-sidebar/seller-sidebar';
 
@Component({
  selector: 'app-seller-home',
  imports: [SellerSidebar],
  templateUrl: './seller-home.html',
  styleUrl: './seller-home.css',
})
export class SellerHome {}
