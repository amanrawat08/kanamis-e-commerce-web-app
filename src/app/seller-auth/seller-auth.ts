import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule],
  templateUrl: './seller-auth.html',
  styleUrl: './seller-auth.css',
})
export class SellerAuth {
  signUp(data:{}):void{
    console.log(data);
    
  }
}
