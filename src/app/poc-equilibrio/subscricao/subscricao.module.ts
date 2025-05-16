import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscricaoComponent } from './subscricao.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SubscricaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SubscricaoComponent
      }
    ])
  ]
})
export class SubscricaoModule { }
