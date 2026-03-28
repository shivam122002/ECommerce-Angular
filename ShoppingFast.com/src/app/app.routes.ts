import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { SellerAuthComponent } from './seller-auth/seller-auth';

export const routes: Routes = [
    {
        path: '',  
        component:HomeComponent
    },
    {
        path:'seller-auth',
        component: SellerAuthComponent
    }
];
