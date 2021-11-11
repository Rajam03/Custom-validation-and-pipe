import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationRoutingModule } from './validation.routing.module';
import { CustomvalidationComponent } from './customvalidation.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatTable, MatTableModule } from '@angular/material';
import { apiservice } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { TitlePipe } from './title.pipe';


@NgModule({
  declarations: [CustomvalidationComponent,
    TitlePipe
],
  imports: [
    CommonModule,
    ValidationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [apiservice]
})
export class ValidationModule { }
