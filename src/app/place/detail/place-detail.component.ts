import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';

@Component({
  selector: 'wb-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss']
})
export class PlaceDetailComponent implements OnInit {

  place: Place = new Place('Buenos Aires', '25º', 'Despejado');

  constructor() { }

  ngOnInit() {
  }

}
