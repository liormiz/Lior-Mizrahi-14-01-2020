import { Component, OnInit } from '@angular/core';
import { LOCATIONS_OUT_COMPLETE } from 'src/app/config/consts';
import {  WeatherService} from '../../services/weather/weather.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  myControl : FormControl;
  options : string[];

  constructor(private WeatherService : WeatherService) { }

  ngOnInit() {
    this.myControl = new FormControl();
    this.options;
  }

  getCitiesAutoComplete(event : any){
    let citiesToSearch = event.currentTarget.value;
    this.WeatherService.getCitiesByCity(citiesToSearch).subscribe(data =>{
      this.options = this.getCityNames(data);
    });
  }

  getCityNames(data : any) : string[]{
    let cities : any = [];

    if (data){
    for (let nIndex = 0; nIndex < data.length; nIndex++){
      cities.push(data[nIndex].LocalizedName);
      }
    }
    return cities;

  }
}
