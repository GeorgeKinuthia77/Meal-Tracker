import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-tracker',
  templateUrl: './meal-tracker.component.html',
  styleUrls: ['./meal-tracker.component.css']
})
export class MealTrackerComponent implements OnInit {
  MealTracker:MealTracker = [
    {id:1,name:'Chips and Chicken'},
    {id:2,name:'Rice'},
    {id:3,name:'Chapati and Peas'},
    {id:4,name:'Beanas and Rice'},
    {id:5,name:'Beef stew and Pilau'},
    {id:6,name:'Mokimo and Fish'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
