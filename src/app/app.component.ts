import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Coding-Round';


constructor (){

}



// Create a feature module called ProductsModule that displays a list of products fetched from a mock endpoint (https://fakestoreapi.com/products). 
// Requirements:
// The module must be lazy‑loaded under the route /products.
// The ProductListComponent should:
// Use OnPush change detection.
// Store the product array in a Signal (signal<Product[] | null>(null)).
// Show a loading indicator while the HTTP request is in flight.
// Display product title and price in a card layout.
// Provide a service (ProductService) that returns an Observable<Product[]>. Use HttpClient.
// Write a unit test (Jest or Karma) that verifies the component renders at least one product after the observable resolves.














  
}
