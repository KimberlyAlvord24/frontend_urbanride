import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { BookingComponent } from './components/booking/booking.component';
import { CarsComponent } from './components/cars/cars.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'Home',
        component: HomeComponent
    },
    {
        path:'search',
        component: SearchComponent
    },
    {
        path:'booking',
        component: BookingComponent
    },
    {
        path:'cars',
        component: CarsComponent
    }