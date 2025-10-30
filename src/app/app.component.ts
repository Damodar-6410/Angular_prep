import { Component } from '@angular/core';
import { ForLoopComponent } from './for-loop/for-loop.component';


@Component({
  selector: 'app-root',
  imports: [ForLoopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tut';
  x=20;
  y=20;

}
