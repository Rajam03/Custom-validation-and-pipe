import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomvalidationComponent } from './customvalidation.component';

const routes: Routes = [
  {path:'',component:CustomvalidationComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ValidationRoutingModule { }
