import { Component } from '@angular/core';
import { ElseIfComponent } from './else-if/else-if.component';
import { SwitchCondiComponent } from './switch-condi/switch-condi.component';

@Component({
  selector: 'app-root',
  imports: [SwitchCondiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tut';
  x=20;
  y=20;

}
