import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculatorComponent} from "./calculator/calculator.component";
import {CinemaComponent} from "./cinema/cinema.component";
import {ForexComponent} from "./forex/forex.component";

const routes: Routes = [
  {path: '', redirectTo: '/calculator', pathMatch: 'full'},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'cinema', component: CinemaComponent},
  {path: 'forex', component: ForexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
