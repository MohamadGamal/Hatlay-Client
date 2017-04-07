import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



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
import { SinglegroupComponent } from './groups/singlegroup/singlegroup.component';
import { IfloggedDirective } from './shareable/iflogged.directive';
import { ObjectmapperPipe } from './shareable/objectmapper.pipe';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule  /// routes from another file
  ],
  providers: [UserService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
