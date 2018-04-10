import { Component, OnInit } from '@angular/core';
import { Place } from '../../place/place.model';
import { PlacesService } from '../../places.service';

@Component({
    selector: 'place-viewer',
    template: `
        <div>
            {{place | json}}
        </div>
    `,
    styleUrls: ['place-viewer.component.scss']

})
export class PlaceViewerComponent implements OnInit {

    place: Place;
    constructor(private placesService: PlacesService) {}
    ngOnInit() {
        this.placesService
            .getPlace(1)
            .subscribe((data: Place) => this.place = data);
    }

}
