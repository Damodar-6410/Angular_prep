import { Component } from '@angular/core';
import { BindingComponent } from './binding/binding.component';


@Component({
  selector: 'app-root',
  imports: [BindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tut';
  x=20;
  y=20;


}
