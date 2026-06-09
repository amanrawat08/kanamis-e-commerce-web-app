import { Component ,signal} from '@angular/core'; 
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SellerAuth } from '../../../../seller-auth/seller-auth';
@Component({
  selector: 'app-seller-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './seller-sidebar.html',
  styleUrl: './seller-sidebar.css',
})
export class SellerSidebar {
   isCollapsed = signal(false);

  menuItems = [
    {
      label: 'Dashboard',
      icon: 'bi-grid',
      route: '/seller/dashboard',
    },
    {
      label: 'Products',
      icon: 'bi-box-seam',
      route: '/seller/products',
    },
    {
      label: 'Add Product',
      icon: 'bi-plus-circle',
      route: '/seller/add-product',
    },
    {
      label: 'Categories',
      icon: 'bi-tags',
      route: '/seller/categories',
    },
    {
      label: 'Orders',
      icon: 'bi-cart-check',
      route: '/seller/orders',
    },
    {
      label: 'Profile',
      icon: 'bi-person-circle',
      route: '/seller/profile',
    },
  ];

  constructor(private sellerServive:SellerAuth, private router:Router){}

  ngOnInit(): void {
    
  }

  toggleSidebar() {
    this.isCollapsed.update(value => !value);
  }
  handleLogout(){
    if(confirm("Are you want to logout")){
      this.sellerServive.logOut();
      this.router.navigate(["/"])
    }
  }
}
