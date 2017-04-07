import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import 'hammerjs';
// import "materialize-css";
// import "angular2-materialize";
// import { MaterializeModule } from 'angular2-materialize';

import { HttpClientService } from './shareable/http-client.service'

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService} from './shareable/auth.service';
import { UserService}        from './shareable/user.service'
import { HomeComponent } from './home/home.component';

import { AppRoutingModule }     from './app.routes';
import { FriendsComponent } from './friends/friends.component';
import { GroupsComponent } from './groups/groups.component';
import { ProfileComponent } from './profile/profile.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { OrdersComponent } from './orders/orders.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { UserComponent } from './shareable/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FriendsComponent,
    GroupsComponent,
    ProfileComponent,
    UserSearchComponent,
    OrdersComponent,
    AddOrderComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule  /// routes from another file
  ],
  providers: [UserService,AuthService,HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
