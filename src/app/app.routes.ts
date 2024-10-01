import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { PlaceComponent } from './place/place.component';
import { DestinationComponent } from './destination/destination.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ThemesComponent } from './themes/themes.component';
import { MoreComponent } from './more/more.component';
import { PayComponent } from './pay/pay.component';
import { HotelsComponent } from './hotels/hotels.component';
import { PlaceInfoComponent } from './destination/place-info/place-info.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { Router, NavigationExtras } from '@angular/router';


export const routes: Routes = [{path:"",component:HomeComponent},
    {path:"login/:price",component:LoginComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"place",component:PlaceInfoComponent},
    {path:"destination",component:DestinationComponent},
    {path:"activities",component:ActivitiesComponent},
    {path:"themes",component:ThemesComponent},
    {path:"more",component:MoreComponent},
    {path:"pay/:price",component:PayComponent},
    {path:"hotels",component:HotelsComponent},
];
    
