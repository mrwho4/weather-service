import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatCheckboxModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';


const modules = [
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatCheckboxModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule
]

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
