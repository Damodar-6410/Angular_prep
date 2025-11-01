import { Component } from '@angular/core';
import { EffectComponent } from './effect/effect.component';


@Component({
  selector: 'app-root',
  imports: [EffectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tut';
  x=20;
  y=20;

  
}
