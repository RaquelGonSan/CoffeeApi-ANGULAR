import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [

  {path: '' , redirectTo: '/homecomponent', pathMatch: 'full'},
  {path:'homecomponent', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', redirectTo: '/homecomponent', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
