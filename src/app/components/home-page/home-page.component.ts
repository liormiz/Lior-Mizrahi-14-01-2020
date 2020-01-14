import { Component, OnInit } from '@angular/core';
import { LOCATIONS_OUT_COMPLETE } from 'src/app/config/consts';
import {  WeatherService} from '../../services/weather/weather.service';
import { FormControl } from '@angular/forms';
import City from 'src/app/data/city.model';
import Day from 'src/app/data/day.model';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  myControl : FormControl;
  options : any;
  cities : City[];
  selectedCity : City;
  currentDay : Day = { DayName : "Sun", WeatherValue : 23};

  constructor(private WeatherService : WeatherService) { }

  ngOnInit() {
    this.myControl = new FormControl();
    this.options;
    this.cities = [];
  }

  getCitiesAutoComplete(event : any){
    let citiesToSearch = event.currentTarget.value;
    this.WeatherService.getCitiesByCity(citiesToSearch).subscribe(data =>{
      this.cities = this.convertCities(data);
    });
  }

  getCityData(){
    if (this.selectedCity){

    }
  }

  getCurrentCity(cityToFind : string){
    debugger;
    for (let i =0; i < this.cities.length; i++){
      if (this.cities[i].cityName == cityToFind){
        this.selectedCity = this.cities[i];
      }
    }
  }

  convertCities(data : any) : any{
    let citiesToReturn : Array<City> = [];
    if (data) {
      for (let i =0; i < data.length; i++){
        let city = new City();
        city.cityName = data[i].LocalizedName;
        city.cityKey = data[i].Key;
        citiesToReturn.push(city);
      }
    }

    return citiesToReturn;
  }
}
