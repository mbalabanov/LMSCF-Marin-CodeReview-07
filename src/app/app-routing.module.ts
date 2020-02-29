import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TraveloffersComponent } from './traveloffers/traveloffers.component';
import { BlogComponent } from './blog/blog.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';


const routes: Routes = [
  {
    path:"", component: HomeComponent,
  },
  {
    path:"blog", component: BlogComponent,
  },
  {
    path:"travel", component: TraveloffersComponent,
  },
  {
    path: 'blogpost/:postId', component: BlogpostComponent
  },
  {
    path: 'shoppingcart', component: ShoppingcartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
