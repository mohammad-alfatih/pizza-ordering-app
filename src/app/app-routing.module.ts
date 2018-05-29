import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: 'app/menu/menu.module#MenuModule'
  },
  {
    path: 'cart',
    loadChildren: 'app/cart/cart.module#CartModule'
  }
];
