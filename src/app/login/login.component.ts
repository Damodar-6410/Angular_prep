import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  name:string = 'Damodar Tirole';

  handleClickEvent() {
    this.otherFuction();
    alert('Login button clicked');
  }

  otherFuction() {
    console.log('Other function executed');
  }
}
