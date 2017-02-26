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
  count: number = 0;
  max: number = 5;
  isReadonly: any = true;
  constructor(private dbservice: DbService) {
     this.getData();
     this.getCount();
   }
   getData() {
     this.dbservice.getPlaces().subscribe(
                       (data: any) => (this.places = data),
                       error =>  this.errorMessage = <any>error);
   }
   getCount() {
     this.dbservice.getCount().subscribe(
                       (data: any) => (this.count = data),
                       error =>  this.errorMessage = <any>error);
   }

}
