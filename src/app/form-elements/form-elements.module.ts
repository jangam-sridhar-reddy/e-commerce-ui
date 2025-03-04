import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForminputsComponent } from './forminputs/forminputs.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ForminputsComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ForminputsComponent, ReactiveFormsModule],
})
export class FormElementsModule {}
