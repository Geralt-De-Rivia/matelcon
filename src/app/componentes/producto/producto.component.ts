import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: [
  ]
})
export class ProductoComponent implements OnInit {
  producto: any = {};

  constructor( private _activatedRoute:ActivatedRoute, private _productos_service:ProductosService ) { 
    this._activatedRoute.params.subscribe( params =>{
      /* console.log(params['id']); */
      this.producto = _productos_service.getProduct(params['id']);
    })
  }

  ngOnInit(){

  }

}
