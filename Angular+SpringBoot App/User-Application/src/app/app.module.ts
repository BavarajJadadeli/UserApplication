import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {HttpClientModule}  from '@angular/common/http';
import { CreateUserComponent } from './create-user/create-user.component';

import { FormsModule } from '@angular/forms';
import { UpadateUserComponent } from './upadate-user/upadate-user.component';

import { SearchUserComponent } from './search-user/search-user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';





@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserComponent,
    UpadateUserComponent,
    SearchUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    DpDatePickerModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
