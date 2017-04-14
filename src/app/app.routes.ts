import { NgModule           }   from '@angular/core';
import { RouterModule, 
                    Routes  }   from '@angular/router';

import { RegisterComponent  }   from './register/register.component';
import { LoginComponent     }   from './login/login.component';
import { HomeComponent      }   from './home/home.component';
import { FriendsComponent   }   from './friends/friends.component';
import { GroupsComponent    }   from './groups/groups.component';
import { ProfileComponent   }   from './profile/profile.component';
import { OrdersComponent    }   from './orders/orders.component';
import { AddOrderComponent  }   from './orders/add-order/add-order.component';
import { EditOrderComponent }   from './orders/edit-order/edit-order.component';
import { ListordersComponent    }   from './orders/listorders/listorders.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
{ 
    path: 'login',
    component: LoginComponent },
{
    path: 'register',
    component: RegisterComponent
},
{
    path: 'friends',
    component: FriendsComponent
},
{
    path: 'groups',
    component: GroupsComponent
},{
    path: 'menu',
    component: MenuComponent
},
{
    path: 'orders',
    component: OrdersComponent,
    children: [
            // {path: '', redirectTo: 'medium', pathMatch: 'full'},
            {
                path: 'list',
                component:ListordersComponent
            },
                {
                path: 'add',
                component:AddOrderComponent
            },
             {
                path: 'edit/:id',
                component:EditOrderComponent
            }

            ]

},
{
    path: 'profile',
    component: ProfileComponent
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