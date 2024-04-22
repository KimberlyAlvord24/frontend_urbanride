import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';
import { CarsComponent } from './cars/cars.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'booking',
    component: BookingComponent,
  },
  {
    path: 'cars',
    component: CarsComponent,
  },
];
