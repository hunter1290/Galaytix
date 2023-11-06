import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  countryName: string="";
  weatherData: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.countryName = params['country'];

      this.http
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.countryName}&APPID=794ee95e63c5a32aaf88cd813fa2e425`
        ).subscribe((data: any) => {
          this.weatherData = data;
        });
    });
  }
}
