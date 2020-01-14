import { Component, OnInit } from '@angular/core';
import { LOCATIONS_OUT_COMPLETE } from 'src/app/config/consts';
import {  WeatherService} from '../../services/weather/weather.service';
import { FormControl } from '@angular/forms';
import City from 'src/app/data/city.model';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  myControl : FormControl;
  options : any;
  cities : City[];

  constructor(private WeatherService : WeatherService) { }

  ngOnInit() {
    this.myControl = new FormControl();
    this.options;
    this.cities = [];
  }

  getCitiesAutoComplete(event : any){
    let citiesToSearch = event.currentTarget.value;
    this.WeatherService.getCitiesByCity(citiesToSearch).subscribe(data =>{
      this.options = data;
    });
  }

  getCityData(data : any[]){
  }

  onChange(event : any){
  }

  convertCities(data : any) : any{
  }
}
