import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [CommonModule],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css'
})
export class ForLoopComponent {

  users = ["anil", "sunil", "rahul", "sachin"];
  students = [
    { name: "anil", age: 23, email:"anil@gmail.com"},
    { name: "sunil", age: 24, email:"sunil@gmail.com" },
    { name: "rahul", age: 22, email:"rahul@gmail.com" },
    { name: "sachin", age: 25,email:"sachin@gmail.com" }
  ];

  getName(name : String){
    console.log(name);
  }
}

