import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiKey = 'ce95b4fceea2403733f929e21482aa69';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  http = inject(HttpClient);

  searchWeatherByCity(cityName: string) {

    return this.http.get(`${apiUrl}${cityName}&appid=${apiKey}&units=metric`);
  }
}
