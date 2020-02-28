import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TraveloffersComponent } from './traveloffers/traveloffers.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  {
    path:"", component: HomeComponent,
  },
  {
    path:"blog", component: BlogComponent,
  },
  {
    path:"travel", component: TraveloffersComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
