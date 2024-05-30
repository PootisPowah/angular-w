import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';
import { WeatherService } from './weather-service/weather.service';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule, RouterLink, DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [WeatherService]
})
export class AppComponent implements OnInit {
  // public showInfo = false;
  // cityName = '';

  // data = {
  //   temp: '',
  //   feelsLike: '',
  //   pressure: '',
  //   humidity: '',
  //   city: '',
  //   main: ''
  // }

  // constructor(private service: WeatherService) { }


  public ngOnInit() {
    //this.searchWeather();
  }

  // public searchWeather() {
  //   this.showInfo = true;
  //   if (this.showInfo) {
  //     this.service.searchWeatherByCity(this.cityName).subscribe({
  //       next: (data: any) => {
  //         console.log(data)
  //         this.data.temp = data.main.temp;
  //         this.data.feelsLike = data.main.feels_like;
  //         this.data.pressure = data.main.pressure;
  //         this.data.humidity = data.main.humidity;
  //         this.data.city = data.name;
  //         this.data.main = data.weather[0].main;


  //       },
  //       error: (err) => {
  //         console.log('Error while fetching data')
  //       }
  //     })

  //   }

  // }
}
