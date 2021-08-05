import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public description = {
    'simple-burger':"Perfect Lamb Satay BurgerSucculent lamb burgers with the crunchiness of cashew nuts and the creaminess of peanut butter smothered with a gorgeous satay sauce.",
    'Classic-Cheeseburger':'Cheeseburgers and hamburgers are one of the most commonly consumed meals in the US.The All-American Cheeseburger has certain non-negotiable elements: American cheese is one of them. Rather than unwrap individual singles',
    'Double-Cheeseburger':'You all need to make this smashed bacon double cheeseburger recipe, friends! For my money, this is probably the best double cheese burger out there',
    'Chilli-burger':'This scrumptious burger sits under a chilli lamb pattie, roasted bell pepper dip, onions, tomatoes and lettuce.',
    'Supreme-Veggie Burger':'Tightly packed between a bun, even vegetables light up. Beans, carrots, cauliflower and cabbage crusted pattie is truly a vegetarian delight'
  

  }

  getDescription(type){
    if( this.description.hasOwnProperty(type)){
      return this.description[type];
    }else{
      alert("not found")
    }
  }
}
