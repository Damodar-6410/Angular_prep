import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-condi',
  imports: [CommonModule],
  templateUrl: './switch-condi.component.html',
  styleUrl: './switch-condi.component.css'
})
export class SwitchCondiComponent {

  color = 'red';
  handleColor(newColor: string) {
    this.color = newColor;
  }
}
