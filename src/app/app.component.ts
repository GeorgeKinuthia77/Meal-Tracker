import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meal-Tracker';
}
export class AppComponent {
  Meal-Tracker:string[];

  constructor(){
    this.Meal-Tracker = ['Chips and Chicken', 'Rice', 'Chapati and Peas']
  }
}
