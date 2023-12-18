import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './house.component.html',
  styleUrl: './house.component.css',
})

export class HouseComponent {
  @Input() toshow: any;
  
  tab: boolean = false;

  details() {
    this.tab = !this.tab
  }
}
