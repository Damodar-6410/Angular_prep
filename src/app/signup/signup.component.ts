import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  name = "";
  displayName = "";
  email = "";
  getName(event : Event){
    this.name = (event.target as HTMLInputElement).value;
    console.log(this.name);
  }

  showName(){
    this.displayName = this.name;
  }

  setName(){
    this.name = "Damodar";
  }

  getEmail(value : string){
    console.log(value);
    this.email = value;
  }

  setEmail(){
    this.email = "damodar04@gmail.com";
  }
}
