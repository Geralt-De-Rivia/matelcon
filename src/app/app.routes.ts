import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactenosComponent } from './componentes/contactenos/contactenos.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ListProductosComponent } from './componentes/list-productos/list-productos.component';


const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contactenos', component: ContactenosComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'productos/:texto', component: ListProductosComponent},
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, { useHash:true });