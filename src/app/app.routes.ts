import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AllusersComponent } from './allusers/allusers.component';

export const routes: Routes = [

    {
        path: '',
        component: MainpageComponent

    }
    ,
    {
        path: 'create-user', component: CreateUserComponent
    },
    {
        path: 'all-users', component: AllusersComponent
    }


];
