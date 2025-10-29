import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  handleClick(event : Event){
    console.log("Button Clicked : ", event.type);
    console.log("Button Clicked : ", event.target);
    console.log("Button Clicked : ", (event.target as Element).classList);

  }

  handleInput(event : Event){
    console.log("Function called : ", event.type);
    console.log("Input Event : ", (event.target as HTMLInputElement).value);
  }

}
