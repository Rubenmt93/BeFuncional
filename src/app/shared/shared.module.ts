import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    NavbarComponent,
    TaskCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    NavbarComponent,
    TaskCardComponent,
  ]
})
export class SharedModule { }
