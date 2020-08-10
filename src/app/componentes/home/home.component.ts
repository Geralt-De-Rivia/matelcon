import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  babys: any[] = [];

  constructor( private _productos_service:ProductosService) { 
    this.babys = _productos_service.getBabys();
    console.log(this.babys);
  }

  ngOnInit(): void {
  }

  mostrar = true;

  bebe: any = {
    imagen: "assets/img/jeremy.jpg",
    name: 'Jeremy Santiago',
    descripcion: 'Hijo de Ingrid Flechas y William Mahecha, nacido el 04 de febrero del 2020'
  }

}
