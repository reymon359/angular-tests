import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { USER_ROUTES } from './components/user/user.routes';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {
        path: 'user/:id',
        component: UserComponent,
        children: USER_ROUTES
        // Old way. Now in the user.routes.ts
        // children: [
        //     { path: 'new', component: NewUserComponent },
        //     { path: 'edit', component: UserEditComponent },
        //     { path: 'info', component: UserInfoComponent },
        //     { path: '**', pathMatch: 'full', redirectTo: 'new' }
        // ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
