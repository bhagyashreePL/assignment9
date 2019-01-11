import { Component } from '@angular/core';
import { Hero }    from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent  {

  eDepts = ['Hign', 'Low',];

  model = new Hero(18, '','', '','');
  
   public choose (event){
     console.log('choose',event);
   }
  submitted = false;

  onSubmit() { this.submitted = true; }


 

}
