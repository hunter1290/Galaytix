import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: '', component: CountriesComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'weather/:country', component: WeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
