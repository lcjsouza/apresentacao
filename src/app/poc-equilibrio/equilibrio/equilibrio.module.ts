import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquilibrioComponent } from './equilibrio.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EquilibrioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EquilibrioComponent
      }
    ])
  ]
})
export class EquilibrioModule { }
