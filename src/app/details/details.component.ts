import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { WeatherService } from '../weather-service/weather.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink, LayoutComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  cityName = '';
  constructor() {
    this.cityName = String(this.route.snapshot.params["cityName"])
  }
  service = inject(WeatherService);

  data = {
    temp: '',
    feelsLike: '',
    pressure: '',
    humidity: '',
    city: '',
    main: ''
  }

  public ngOnInit() {
    this.searchWeather();

  }

  public searchWeather() {
    this.service.searchWeatherByCity(this.cityName).subscribe({
      next: (data: any) => {
        console.log(data)
        this.data.temp = data.main.temp;
        this.data.feelsLike = data.main.feels_like;
        this.data.pressure = data.main.pressure;
        this.data.humidity = data.main.humidity;
        this.data.city = data.name;
        this.data.main = data.weather[0].main;


      },
      error: (err) => {
        console.log('Error while fetching data')
      }
    })

  }
}
