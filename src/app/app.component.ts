import { Component } from '@angular/core';
import { ElseIfComponent } from './else-if/else-if.component';

@Component({
  selector: 'app-root',
  imports: [ElseIfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tut';
  x=20;
  y=20;

}
