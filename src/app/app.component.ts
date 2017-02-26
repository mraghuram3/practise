import { Component } from '@angular/core';

import {DbService} from './db.service';

import {Place} from './model/place';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  errorMessage: string;
  places: Place[] = new Array<Place>();
  constructor(private dbservice: DbService) {
     this.getData();
   }
   getData(){
     this.dbservice.getPlaces().subscribe(
                       (data: any) =>(this.places = data),
                       error =>  this.errorMessage = <any>error);
   }

}
