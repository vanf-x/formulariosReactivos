import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DinamicPageComponent } from './pages/dinamic-page/dinamic-page.component';
import { ReactiveRoutingModule } from './reactive-routing.module';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';


@NgModule({
  declarations: [
    BasicPageComponent,
    DinamicPageComponent,
    SwitchesPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveModule { }
