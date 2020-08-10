import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
})
export class ListProductosComponent implements OnInit {
  productos: any[] = [];
  texto: string;

  constructor(private _activatedRoute:ActivatedRoute, private _productos_service:ProductosService) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( params =>{
      this.texto = params['texto'];
      this.productos = this._productos_service.buscarProductos(params['texto']);
      console.log(this.productos);
    })
  }

}
