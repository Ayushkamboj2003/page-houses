import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [],
  templateUrl: './house.component.html',
  styleUrl: './house.component.css'
})
export class HouseComponent {
  @Input()
  toshow: any ;
  Houselist: any; 

}
