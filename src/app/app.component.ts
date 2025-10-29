import { Component } from '@angular/core';
import { EventsComponent } from './events/events.component';

@Component({
  selector: 'app-root',
  imports: [EventsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tut';
  x=20;
  y=20;

}
