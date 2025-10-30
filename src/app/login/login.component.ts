import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  display = true;
  toggleDiv = true;


  toggleDisplay() {
    this.display = !this.display;
  }

  toggleTwo(){
    this.toggleDiv = !this.toggleDiv;
  }

}