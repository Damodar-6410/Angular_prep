import { Component } from '@angular/core';
import { ForLoop1Component } from './for-loop1/for-loop1.component';


@Component({
  selector: 'app-root',
  imports: [ForLoop1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tut';
  x=20;
  y=20;


}
