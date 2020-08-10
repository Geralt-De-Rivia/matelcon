import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { ProductosService } from './servicios/productos.service'; 

//Componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { HeaderComponent } from './componentes/shared/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { AboutComponent } from './componentes/about/about.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ListProductosComponent } from './componentes/list-productos/list-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactenosComponent,
    AboutComponent,
    ProductosComponent,
    ProductoComponent,
    ListProductosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
