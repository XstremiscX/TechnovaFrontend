import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProductDetail } from './product-detail/product-detail';

export const routes: Routes = [

    {
        path: "",
        title: "Inicio",
        component: Home
    },
    {
        path: "product-detail/:id",
        title: "Detalle del Producto",
        component: ProductDetail
    }

];
