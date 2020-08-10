import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private babys: any[] = [
    {
      id: 1,
      imagen: "assets/img/jeremy.jpg",
      name: 'Jeremy Santiago',
      descripcion: 'Hijo de Ingrid Flechas y William Mahecha, nacido el 04 de febrero del 2020'
    },
    { 
      id: 2,
      imagen: "assets/img/jeremy2.jfif",
      name: 'Jeremy Santiago 2',
      descripcion: 'Hijo de Ingrid Flechas y William Mahecha, nacido el 04 de febrero del 2020'
    },
    {
      id: 3,
      imagen: "assets/img/jeremy.jpg",
      name: 'Jeremy Santiago',
      descripcion: 'Hijo de Ingrid Flechas y William Mahecha, nacido el 04 de febrero del 2020'
    }
  ];

  private products: Products[] = [
    {
      id: 1,
      imagen: "assets/img/producto1.jpg",
      name: 'Perro',
      descripcion: 'Peluche en forma de perro grande'
    },
    { 
      id: 2,
      imagen: "assets/img/producto2.jpg",
      name: 'Yoshi',
      descripcion: 'Peluche en forma del caballo de mario bros'
    },
    {
      id: 3,
      imagen: "assets/img/producto3.jpg",
      name: 'Popocho',
      descripcion: 'Peluche de pelanas en forma de bola con cara de perro'
    }
  ];

  constructor() { console.log("Servicio Listo") }

  getBabys(){
    return this.babys;
  }

  getProducts(){
    return this.products;
  }

  getProduct(index:string){
    return this.products[index];
  }

  buscarProductos(texto:string){

    let productosArr:Products[] = [];
    texto = texto.toLowerCase();

    for (let product of this.products) {
      let nombre = product.name.toLowerCase();

      if (nombre.indexOf(texto) >= 0 ) {
        productosArr.push(product);
      }
      
    }

    return productosArr;
  }

}

export interface Products{
  id: number;
  imagen: string;
  name: string;
  descripcion: string;
};
