import { Component } from '@angular/core';
import { DynamicStylingComponent } from './dynamic-styling/dynamic-styling.component';


@Component({
  selector: 'app-root',
  imports: [DynamicStylingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tut';
  x=20;
  y=20;


}
