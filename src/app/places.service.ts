import { Injectable } from '@angular/core';
import { Place } from './place/place.model';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

const PLACES_API: string = '/api/places';

@Injectable()
export class PlacesService {

  constructor(private http: Http) { }

  public getPlaces(): Observable<Place[]> {
    return this.http
      .get(PLACES_API)
      .map((response: Response) => response.json());
  }

  // public addPlace(place: Place) {
    // this.places.unshift(place);
  // }

  

}
