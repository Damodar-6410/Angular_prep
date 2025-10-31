import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {

  count = signal(10);
  // data = signal<number|string>(10);
  data : WritableSignal<number|string> = signal(10);
  num : Signal<number> = computed(() => 200);

  x = signal(10);
  y = signal(20);
  z = computed(() => this.x() + this.y());


  constructor() {
    effect(() => {
      // console.log("The value of count is: ", this.count());
      console.log("The value of data is: ", this.data());
      
    })
  }

  updateCount(value : String){
    if(value === 'decrement' && this.count() > 0){
      this.count.set(this.count() - 1);
    }else{
     // this.count.set(this.count() + 1);
     this.count.update( n => n + 1);
    }
  }

  updateData(){
    this.data.set("Hello");
  }

  updateValue(){
    console.log(this.z());
    this.x.set(50);
    console.log(this.z());
  }
}
