import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { AllProductsComponent } from './all-products/all-products.component';

@NgModule({
  declarations: [HomeComponent, AllProductsComponent],
  imports: [CommonModule, ComponentsRoutingModule],
})
export class ComponentsModule {}
