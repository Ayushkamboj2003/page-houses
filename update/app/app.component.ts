import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HouseComponent } from './house/house.component';
import { CampiCasa, HouseserviceService } from './houseservice.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HouseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'House';

  //HouselistJson = [];

  //HouselistJson: CampiCasa = {image:'',lenguage:'',name:'',details:''};
  HouselistJson: any;

  Houselist = [
    {
      image: '../assets/502579675.jpg',
      name: '€90.000,00',
      language: 'villa via pietro rovelli 11, BG',
      details: '4 locali, 110m² superficie, 2 bagni',
    },
    {
      image: '../assets/552624872.jpg',
      name: '€170.000,00',
      language: 'villa via cristoforo colombo 24, BG',
      details: '4 locali, 150m² superficie, 3 bagni',
    },
    {
      image: '../assets/3image.jpg',
      name: '€180.000,00',
      language: 'villa via pietro rovelli 24, BG',
      details: '4 locali, 109m² superficie, 2 bagni',
    },
    {
      image: '../assets/4image.jpg',
      name: '€100.000,00',
      language: 'villa via pietro rovelli 24, BG',
      details: '4 locali, 109m² superficie, 2 bagni',
    },
    {
      image: '../assets/5image.jpg',
      name: '€130.000,00',
      language: 'villa via pietro rovelli 24, BG',
      details: '4 locali, 109m² superficie, 2 bagni',
    },
    {
      image: '../assets/6image.jpg',
      name: '€200.000,00',
      language: 'villa via pietro rovelli 24, BG',
      details: '4 locali, 109m² superficie, 2 bagni',
    },
    {
      image: '../assets/7image.jpg',
      name: '€190.000,00',
      language: 'villa via pietro rovelli 24, BG',
      details: '4 locali, 109m² superficie, 2 bagni',
    },
    {
      image: '../assets/8image.jpg',
      name: '270.000,00',
      language: 'villa via pietro rovelli 24, BG',
      details: '4 locali, 109m² superficie, 2 bagni',
    },
    {
      image: '../assets/9image.jpg',
      name: '€170.000,00',
      language: 'villa via pietro rovelli 24, BG',
      details: '4 locali, 109m² superficie, 2 bagni',
    },
    {
      image: '../assets/10image.jpg',
      name: '€110.000,00',
      language: 'villa via pietro rovelli 24, BG',
      details: '4 locali, 109m² superficie, 2 bagni',
    },
    {
      image: '../assets/10image.jpg',
      name: '€93.000,00',
      language: 'villa via roma 24, BG',
      details: '4 locali, 109m² superficie, 2 bagni',
    },
  ];

  isvalue: boolean = false;

  constructor (
    private servizioCase: HouseserviceService
  ) {}

  showprova() {
    this.isvalue = true;
  }

  ngOnInit() {
    this.servizioCase.getHouses().subscribe(
      (data) => {
          //this.HouselistJson = data;
          console.log(data);
          this.HouselistJson = data;
          console.log(this.HouselistJson);
        }  
    );
  }

}