import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { ChoicesComponent } from './choices/choices.component';
import { ListComponent } from './list/list.component';
import { FeaturesComponent } from './features/features.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { TraveloffersComponent } from './traveloffers/traveloffers.component';
import { StandardheaderComponent } from './standardheader/standardheader.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { AddoffersComponent } from './addoffers/addoffers.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    IntroComponent,
    ChoicesComponent,
    ListComponent,
    FeaturesComponent,
    NewsComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    TraveloffersComponent,
    StandardheaderComponent,
    BlogpostComponent,
    AddoffersComponent,
    ShoppingcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
