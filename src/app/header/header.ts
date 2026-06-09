import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, Router } from "@angular/router"; 
import { SellerAuth } from '../seller-auth/seller-auth';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-header ',
  imports: [MatIconModule, RouterLink, TitleCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuType : string = "default";
  sellerName:string = "";
  constructor(private router:Router, private sellerService:SellerAuth){}
  ngOnInit(): void {
    this.router.events.subscribe((ev:any)=>{
      if(ev.url){ 
        if(localStorage.getItem("seller") && ev.url.includes("seller")){
          this.menuType = "seller";
          if(localStorage.getItem("seller")){
            let sellerStore = localStorage.getItem("seller");
            let sellerData = sellerStore && JSON.parse(sellerStore);
            this.sellerName = sellerData.name;
          }
        }else{
          this.menuType = "default"
        }
      }
      
    })
    
  }
  handleLogout(){
    if(confirm("Do You Want to Log Out")){
      this.sellerService.logOut();
      this.router.navigate(['/seller-auth'])
      
    }else{
      console.log("no");
      
    }
    

  }
}
