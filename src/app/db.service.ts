import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import { Place } from './model/place';
 import 'rxjs/add/operator/map';
 import 'rxjs/add/operator/catch';

@Injectable()
export class DbService {

    apiurl: string = 'https://peaceful-forest-51763.herokuapp.com/api/';

    constructor(private http: Http){
    }
     getPlaces (): Observable<Place[]> {
    return this.http.get(this.apiurl + 'list')
                    .map(this.extractData)
                    .catch(this.handleError);
  }
    getCount (): Observable<number> {
    return this.http.get(this.apiurl + 'count')
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json().data;
    console.log(body);
    return body;
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
