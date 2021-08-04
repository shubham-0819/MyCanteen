import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material/material.module';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SouthIndianComponent } from './south-indian/south-indian.component';
import { NorthIndianComponent } from './north-indian/north-indian.component';
import { ChineseComponent } from './chinese/chinese.component';
import { PizzaComponent } from './pizza/pizza.component';
import { BurgerComponent } from './burger/burger.component';
import { CakeComponent } from './cake/cake.component';
import { HomeComponent } from './home/home.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NorthIndianDashboardComponent } from './north-indian-dashboard/north-indian-dashboard.component';
import { SouthIndianDashboardComponent } from './south-indian-dashboard/south-indian-dashboard.component';
import { ChineseDashboardComponent } from './chinese-dashboard/chinese-dashboard.component';
import { PizzaDashboardComponent } from './pizza-dashboard/pizza-dashboard.component';
import { BurgerDashboardComponent } from './burger-dashboard/burger-dashboard.component';
import { CakeDashboardComponent } from './cake-dashboard/cake-dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    SouthIndianComponent,
    NorthIndianComponent,
    ChineseComponent,
    PizzaComponent,
    BurgerComponent,
    CakeComponent,
    HomeComponent,
    MainDashboardComponent,
    NorthIndianDashboardComponent,
    SouthIndianDashboardComponent,
    ChineseDashboardComponent,
    PizzaDashboardComponent,
    BurgerDashboardComponent,
    CakeDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
