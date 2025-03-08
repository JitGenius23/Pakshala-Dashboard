import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  cards: any = [
    { name: 'Listed Country', value: 4 },
    { name: 'Listed State', value: 10 },
    { name: 'Listed City', value: 20 },
    { name: 'Listed Category', value: 5 },
    { name: 'Listed Foods', value: 1000 },
  ];
}
