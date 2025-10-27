import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count=0;

  // handleIncrement(){
  //   this.count++;
  // }

  // handleDecrement(){
  //   this.count--;
  // }

  // handleReset(){
  //   this.count=0;
  // }

  handleCounter(val:string){
    if(val == 'minus'){
       this.count--;
    }else if(val == 'plus'){
       this.count++;
    }else{
      this.count=0;
    }
  }
}
