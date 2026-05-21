import { Component } from '@angular/core';
import { HeroSlider } from "./component/hero-slider/hero-slider";

@Component({
  selector: 'app-home',
  imports: [HeroSlider],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
