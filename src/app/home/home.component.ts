import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  //defines the app pages here
  appPages = [
    { title: 'Log Meal', url: '/log-meal', icon: 'restaurant' },
    { title: 'Daily Intake', url: '/daily-intake', icon: 'bar-chart' }
  ];
}
