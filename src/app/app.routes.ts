import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/user/new-user.component';
import { UserEditComponent } from './components/user/user-edit.component';
import { UserInfoComponent } from './components/user/user-info.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {
        path: 'user/:id',
        component: UserComponent,
        children: [
            { path: 'new', component: NewUserComponent },
            { path: 'edit', component: UserEditComponent },
            { path: 'info', component: UserInfoComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'new' }

        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
