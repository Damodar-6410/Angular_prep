import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-else-if',
  imports: [CommonModule],
  templateUrl: './else-if.component.html',
  styleUrl: './else-if.component.css'
})
export class ElseIfComponent {
  color = 1;

  handleColour(value: number) {
    this.color = value;
  }

  inputColor(event : Event){
    this.color = parseInt((event.target as HTMLInputElement).value);
  }
}
