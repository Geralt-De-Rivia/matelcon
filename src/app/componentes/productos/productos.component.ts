import { Component, OnInit } from '@angular/core';
import { ProductosService, Products } from '../../servicios/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
})

export class ProductosComponent implements OnInit {
  products: Products[] =[];

  constructor( private _productos_service:ProductosService, private _router:Router) { 
    this.products = _productos_service.getProducts();
  }

  ngOnInit(): void {
  }

  verProducto(index:number){
    this._router.navigate(['/producto', index]);
  }

}
