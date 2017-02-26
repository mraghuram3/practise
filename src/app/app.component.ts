import { Component } from '@angular/core';

import {DbService} from './db.service';

import {Place} from './model/place';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
   search()
   {
     if ( this.query.length === 0) {
        this.places = this.backupPlaces;
      } else {
     this.dbservice.search(this.query, this.searchby).subscribe(
                       (data: any) => (this.places = data),
                       error =>  this.errorMessage = <any>error);}
   }
   reset()
   {
     this.places = this.backupPlaces;
   }
   resetOnKey()
   {
     if ( this.query.length === 0) {
        this.places = this.backupPlaces;
      }
   }
}
