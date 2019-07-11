
import { Component } from '@angular/core';
import { MealTracker } from './MealTracker';
....
export class AppComponent {
  MealTracker:MealTracker = [
    {id:1, name:'Chips and Chicken'},
    {id:2,name:'Rice'},
    {id:3,name:'Chapati and Peas'},
    {id:4,name:'Beanas and Rice'},
    {id:5,name:'Beef stew and Pilau'},
    {id:6,name:'Mokimo and Fish'},
  ];
}
