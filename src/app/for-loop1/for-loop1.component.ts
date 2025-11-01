import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop1',
  imports: [CommonModule],
  templateUrl: './for-loop1.component.html',
  styleUrl: './for-loop1.component.css'
})
export class ForLoop1Component {

  users = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];
  // users = [];
}
