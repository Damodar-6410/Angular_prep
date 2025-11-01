import { Component,signal,effect } from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [],
  templateUrl: './effect.component.html',
  styleUrl: './effect.component.css'
})
export class EffectComponent {

  userName = signal('anil');
  count = signal(0);
  displayHeading = false;

  constructor(){
    effect(() =>{
      if(this.count() == 2){
        this.displayHeading = true;
        setTimeout(() => {
          this.displayHeading = false;
        },3000);
      }else{
        this.displayHeading = false;
      }
    })
  }

  toggleValue(){
    this.count.update(n => n + 1);
  }

}
