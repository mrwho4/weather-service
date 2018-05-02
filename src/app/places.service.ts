import { Injectable } from '@angular/core';
import { Place } from './place/place.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../environments/environment';


@Injectable()
export class PlacesService {

  private PLACES_API = environment.apiUrl;
  constructor(private http: Http) { }

  public getPlaces(): Observable<Place[]> {
    return this.http
      .get(this.PLACES_API)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  public getPlace(id: number): Observable<Place> {
    return this.http
      .get(`${this.PLACES_API}/${id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  public addPlace(place: Place) {
    const body = JSON.stringify(place);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: headers });

    return this.http
      .post(this.PLACES_API, body, options)
      .map((response: Response) => {
        response.json()
      })
      .catch((error: any) => Observable.throw(error.json()));
  }

  updatePlace(place: Place) {
    return this.http
      .put(`${this.PLACES_API}/${place._id}`, place)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  deletePlace(place: Place) {
    return this.http
      .delete(`${this.PLACES_API}/${place._id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

}
