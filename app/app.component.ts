import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HouseComponent } from './house/house.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HouseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'House';
Houselist = [{image: '../assets/502579675.jpg', price: '€90.000,00',name: 'villa via pietro rovelli 24, BG'},
{image: '../assets/552624872.jpg', price: '€90.000,00',name: 'villa via pietro rovelli 24, BG'},
{image: '../assets/552624872.jpg', price: '€90.000,00',name: 'villa via pietro rovelli 24, BG'},
{image: '../assets/552624872.jpg', price: '€90.000,00',name: 'villa via pietro rovelli 24, BG'},
{image: '../assets/552624872.jpg', price: '€90.000,00',name: 'villa via pietro rovelli 24, BG'},]




}

