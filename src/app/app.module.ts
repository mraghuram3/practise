import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {DbService} from './db.service';

import {Ng2PaginationModule} from 'ng2-pagination';

import { RatingModule  } from 'ng2-bootstrap';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,RatingModule.forRoot(),Ng2PaginationModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
