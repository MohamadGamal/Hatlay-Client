import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { HttpClientService } from './shareable/http-client.service'

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService} from './shareable/auth.service';
import { UserService}        from './shareable/user.service'
import { GroupService}        from './shareable/group.service'
import { HomeComponent } from './home/home.component';

import { AppRoutingModule }     from './app.routes';
import { FriendsComponent } from './friends/friends.component';
import { GroupsComponent } from './groups/groups.component';
import { ProfileComponent } from './profile/profile.component';

import { SinglegroupComponent } from './groups/singlegroup/singlegroup.component';
import { IfloggedDirective } from './shareable/iflogged.directive';
import { ObjectmapperPipe } from './shareable/objectmapper.pipe';

import { UserSearchComponent } from './user-search/user-search.component';
import { OrdersComponent } from './orders/orders.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { UserComponent } from './shareable/user/user.component';
import { ListordersComponent } from './orders/listorders/listorders.component';
import { OrdersService } from './shareable/orders.service';
import { UniquePipe } from './shareable/unique.pipe';
import { FilterPipe } from './filter.pipe';
import { MaterializeModule } from 'angular2-materialize';

import { EditOrderComponent } from './orders/edit-order/edit-order.component';
import { FileuploaderComponent } from './fileuploader/fileuploader.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FriendsComponent,
    GroupsComponent,
    ProfileComponent,
    SinglegroupComponent,
    IfloggedDirective,
    ObjectmapperPipe,

    UserSearchComponent,
    OrdersComponent,
    AddOrderComponent,
    UserComponent,
    ListordersComponent,

    UniquePipe,

    FilterPipe,

    EditOrderComponent,

    FileuploaderComponent,

    MenuComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AppRoutingModule  /// routes from another file
  ],
  providers: [UserService,AuthService,HttpClientService,GroupService,OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
