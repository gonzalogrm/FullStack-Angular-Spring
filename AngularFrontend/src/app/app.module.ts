import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from '../model/user-list/user-list.component';
import { CreateUserComponent } from '../model/create-user/create-user.component';
import { AboutComponent } from '../model/about/about.component';
import { UpdateUserComponent } from '../model/update-user/update-user.component';
import { SearchUserComponent } from '../model/search-user/search-user.component';
import { UserDetailsComponent } from '../model/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    AboutComponent,
    UpdateUserComponent,
    SearchUserComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
