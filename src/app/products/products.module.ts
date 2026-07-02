import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../app-routing.module';
import { ProductsComponent } from './products.component';
import { HttpClient,  } from '@angular/common/http';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  
  ]
})
export class ProductsModule { }
