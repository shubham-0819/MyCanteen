import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
// import { DataService } from '../data.service';

@Component({
  selector: 'app-burger-dashboard',
  templateUrl: './burger-dashboard.component.html',
  styleUrls: ['./burger-dashboard.component.css']
})
export class BurgerDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Chilli Burger',image:'./../../assets/Burger/chilli-burger.jpg',description:'Perfect Lamb Satay BurgerSucculent lamb burgers with the crunchiness of cashew nuts ', cols: 1, rows: 1 },
          { title: 'Classic Cheese Burger', cols: 1, rows: 1 },
          { title: 'Double Cheese Burger', cols: 1, rows: 1 },
          { title: 'Supreme Veg Burger', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Chilli Burger',image:'./../../assets/Burger/chilli-burger.jpg',description:'Perfect Lamb Satay BurgerSucculent lamb burgers with the crunchiness of cashew nuts ',image:'./../../assets/Burger/chilli-burger.jpg', cols: 1, rows: 1 },
        { title: 'Classic Cheese Burger',image:'./../../assets/Burger/Classic cheese burger.jpg', cols: 1, rows: 1 },
        { title: 'Double Cheese Burger',image:'./../../assets/Burger/Double cheese burger.jpg', cols: 1, rows: 1 },
        { title: 'Supreme Veg Burger',image:'./../../assets/Burger/supreme-veggie-burger.jpg', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
