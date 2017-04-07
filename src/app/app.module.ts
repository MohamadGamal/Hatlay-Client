import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

<<<<<<< HEAD
=======
// import 'hammerjs';
// import "materialize-css";
// import "angular2-materialize";
// import { MaterializeModule } from 'angular2-materialize';
>>>>>>> b5b7af5d82e81e66fbee9f49dffa62d18d470c5c

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
<<<<<<< HEAD
import { SinglegroupComponent } from './groups/singlegroup/singlegroup.component';
import { IfloggedDirective } from './shareable/iflogged.directive';
import { ObjectmapperPipe } from './shareable/objectmapper.pipe';
=======
import { UserSearchComponent } from './user-search/user-search.component';
import { OrdersComponent } from './orders/orders.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { UserComponent } from './shareable/user/user.component';
>>>>>>> b5b7af5d82e81e66fbee9f49dffa62d18d470c5c

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FriendsComponent,
    GroupsComponent,
    ProfileComponent,
<<<<<<< HEAD
    SinglegroupComponent,
    IfloggedDirective,
    ObjectmapperPipe,
=======
    UserSearchComponent,
    OrdersComponent,
    AddOrderComponent,
    UserComponent,
>>>>>>> b5b7af5d82e81e66fbee9f49dffa62d18d470c5c
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
