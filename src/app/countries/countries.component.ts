import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'], // Ensure this line is present
})

export class CountriesComponent implements OnInit {
  countries: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://countriesnow.space/api/v0.1/countries')
      .subscribe((data: any) => {
        this.countries = data.data;
      });
  }
}
