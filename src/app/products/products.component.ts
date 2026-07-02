import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  standalone:false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

  products =  signal<Product[] | null>(null);
  loading = signal<boolean>(false);


  constructor( private productService : ProductsService)  {

  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){

    this.productService.getProducts().subscribe({

      next:(res :Product[]) =>{
        console.log('---->'+ res)
        this.products.set(res);
        this.loading.set(false)
      },
      error: (err : any) => {
        console.log(err);
        this.loading.set(false);
      }
    
 
  }
)

  }


}
