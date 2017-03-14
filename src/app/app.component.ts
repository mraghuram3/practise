import { Component } from '@angular/core';

import {DbService} from './db.service';

import {Place} from './model/place';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // variables to store data
  title = 'Place Lookup';
  errorMessage: string;
  places: Place[] = new Array<Place>();
  backupPlaces: Place[] = new Array<Place>();
  count: number = 0;
  max: number = 5;
  query: string;
  searchby: string = 'name';
  isReadonly: any = true;
  mapurl: string = "http://maps.google.com?q=";
  separtor: string = ',';

  constructor(private dbservice: DbService) {
    // to get lookup list and count on load
     this.getData();
     this.getCount();
   }
   getData() {
     this.dbservice.getPlaces().subscribe(
                       (data: any) => (this.places = data, this.backupPlaces = data ),
                       error =>  this.errorMessage = <any>error);
   }
   getCount() {
     this.dbservice.getCount().subscribe(
                       (data: any) => (this.count = data),
                       error =>  this.errorMessage = <any>error);
   }
   // get input from textfield and load reults
   search()
   {
     if ( this.query.length === 0) {
        this.places = this.backupPlaces;
      } else {
     this.dbservice.search(this.query, this.searchby).subscribe(
                       (data: any) => (this.places = data),
                       error =>  this.errorMessage = <any>error);}
   }
   // to reset search result
   reset()
   {
     this.places = this.backupPlaces;
   }
   // to reset search result when eveything from text input is deleted
   resetOnKey()
   {
     if ( this.query.length === 0) {
        this.places = this.backupPlaces;
      }
   }
}
