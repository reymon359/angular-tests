import { Routes } from '@angular/router';

import { NewUserComponent } from './new-user.component';
import { UserEditComponent } from './user-edit.component';
import { UserInfoComponent } from './user-info.component';


export const USER_ROUTES: Routes = [
    { path: 'new', component: NewUserComponent },
    { path: 'edit', component: UserEditComponent },
    { path: 'info', component: UserInfoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'new' }
];

