import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurgerComponent } from './burger/burger.component';
import { CakeComponent } from './cake/cake.component';
import { ChineseComponent } from './chinese/chinese.component';
import { HomeComponent } from './home/home.component';
import { NorthIndianComponent } from './north-indian/north-indian.component';
import { PizzaComponent } from './pizza/pizza.component';
import { SouthIndianComponent } from './south-indian/south-indian.component';


const routes: Routes = [

  {path:'north-indian', component:NorthIndianComponent},
  {path:'south-indian', component:SouthIndianComponent},
  {path:'chinese', component:ChineseComponent},
  {path:'pizza', component:PizzaComponent},
  {path:'burger', component:BurgerComponent},
  {path:'cake', component:CakeComponent},
  {path:'home', component:HomeComponent},
  {path:'',redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
