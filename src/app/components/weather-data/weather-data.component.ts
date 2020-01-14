import { Component, OnInit, Input } from '@angular/core';
import Day from 'src/app/data/day.model';

@Component({
  selector: 'weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {
  @Input() currentDay : Day;

  constructor() { }

  ngOnInit() {
  }
}
