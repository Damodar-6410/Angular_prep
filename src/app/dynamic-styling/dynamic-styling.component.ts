import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-styling',
  imports: [],
  templateUrl: './dynamic-styling.component.html',
  styleUrl: './dynamic-styling.component.css'
})
export class DynamicStylingComponent {

  bgColor = "red";
  fontSize = "40";

  headingSizeBig = "80px";
  headingSizeSmall = "40px";
  zoom = true;

  changeHeading(){
    this.zoom = !this.zoom;
  }
}
