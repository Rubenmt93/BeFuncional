import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule
  ],

})
export class MaterialModule { }
