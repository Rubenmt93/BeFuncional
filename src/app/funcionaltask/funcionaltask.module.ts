import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionalTaskHomeComponent } from './funcional-task-home/funcional-task-home.component';
import { DailyTaskComponent } from './components/daily-task/daily-task.component';
import { WeeklyTaskComponent } from './components/weekly-task/weekly-task.component';
import { MonthlyTaskComponent } from './components/monthly-task/monthly-task.component';



@NgModule({
  declarations: [
    FuncionalTaskHomeComponent,
    DailyTaskComponent,
    WeeklyTaskComponent,
    MonthlyTaskComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FuncionalTaskHomeComponent
  ]
})
export class FuncionaltaskModule { }
