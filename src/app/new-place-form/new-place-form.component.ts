import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Place } from '../place/place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'wb-new-place-form',
  templateUrl: './new-place-form.component.html',
  styleUrls: ['./new-place-form.component.scss']
})
export class NewPlaceFormComponent implements OnInit {



  constructor(private placeService: PlacesService) { }

  ngOnInit() {
  }
 
  onSubmit(form: NgForm) {
    // const place = new Place(
    //   form.value.city
    // );
    // this.placeService.addPlace(place);
    
    console.log();
  }

}
