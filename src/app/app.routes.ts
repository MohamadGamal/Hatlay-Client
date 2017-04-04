import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
{ path: 'login',
component: LoginComponent },
{
path: 'register',
component: RegisterComponent
},
{
path: 'home',
component: HomeComponent,
// children: [
//           // {path: '', redirectTo: 'medium', pathMatch: 'full'},
//           {
//             path: 'list',
//             component:LoginComponent
//           },
//             {
//             path: 'edit',
//             component:RegisterComponent
//           }

//         ]
},
{ path: '',
redirectTo: '/login',
pathMatch: 'full'
},
// { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}