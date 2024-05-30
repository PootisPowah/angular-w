import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { WeatherService } from '../weather-service/weather.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  public showInfo = false;
  public cityName = '';

  data = {
    temp: '',
    feelsLike: '',
    pressure: '',
    humidity: '',
    city: '',
    main: ''
  }

  service = inject(WeatherService);


  public ngOnInit() {
    if (this.showInfo) {
      this.searchWeather();

    }
  }

  public searchWeather() {
    this.showInfo = true;
    if (this.showInfo) {
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
}
