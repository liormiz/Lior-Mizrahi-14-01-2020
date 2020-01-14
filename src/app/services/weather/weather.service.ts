import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_KEY, LOCATIONS_OUT_COMPLETE } from 'src/app/config/consts';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  todayDate() {
    let ndate = new Date();
    return ndate;
  }

  getCitiesByCity(cityName : string) {
    let apiKey = API_KEY;
    let url = LOCATIONS_OUT_COMPLETE;
    let data = this.http.get(url + "?apikey=" + apiKey + "&q=" + cityName);
    return data;
  }
}
