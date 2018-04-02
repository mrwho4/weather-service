import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatCheckboxModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';


const modules = [
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatCheckboxModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
