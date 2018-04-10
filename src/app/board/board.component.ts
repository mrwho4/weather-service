import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { PlacesService } from '../places.service';
import { Place } from '../place/place.model';


@Component({
  selector: 'wb-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  displayedColumns = ['select', 'city', 'temperature', 'description', 'icon'];
  places: Place[];
  dataSource;
  loading = true;

  // @ViewChild(MatSort) sort: MatSort;
  constructor(
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.placesService.getPlaces()
      .subscribe((data: Place[]) => {
        this.places = data,
        this.dataSource = new MatTableDataSource(this.places);
        this.loading = false;
    });
  }

  selection = new SelectionModel<Place>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }

  onUpdatePlace(event: Place) {
    this.placesService
      .addPlace(event)
      .subscribe((data: Place) => {
        this.places.unshift(data);
      })
    console.log( 'desde el padre' ,event);
  }

}

