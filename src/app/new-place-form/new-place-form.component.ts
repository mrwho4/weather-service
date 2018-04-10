import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Place } from '../place/place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'wb-new-place-form',
  templateUrl: './new-place-form.component.html',
  styleUrls: ['./new-place-form.component.scss'],
  providers: [PlacesService]
})
export class NewPlaceFormComponent implements OnInit {

  @Output() update: EventEmitter<Place> = new EventEmitter<Place>();

  constructor(private placeService: PlacesService) { }

  ngOnInit() {
  }
 
  onSubmit(form: NgForm) {
    const place = new Place(
      form.value.city
      , '25º', 'sunny', 'icon'
    );
    // this.placeService.addPlace(place);
    // this.update.emit(place);
    
    // console.log('desde el hijo' , place);
    this.placeService.addPlace(place)
      .subscribe(
        ({id}) => console.log(id)
      );

      form.resetForm();
  }

}
