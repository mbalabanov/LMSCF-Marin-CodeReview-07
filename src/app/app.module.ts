/*─────────────────────────────────────────────────────────────────────────────────┐
│        ___          _        _     ___ _               _                         │
│       | _ \_ _ ___ (_)___ __| |_  / __| |_ _ _ _  _ __| |_ _  _ _ _ ___          │
│       |  _/ '_/ _ \| / -_) _|  _| \__ \  _| '_| || / _|  _| || | '_/ -_)         │
│       |_| |_| \___// \___\__|\__| |___/\__|_|  \_,_\__|\__|\_,_|__ \___|         │
│                  |__/                       __ _ _ _  __ _ _  _| |__ _ _ _       │
│                        By Marin Balabanov  / _` | ' \/ _` | || | / _` | '_|      │
│                                            \__,_|_||_\__, |\_,_|_\__,_|_|        │
│                                                      |___/                       │
│     index.html                                                                   │
│ ┌────────────────┐                                                               │
│ │ ┌────────────┐ │  "Travelex" is a travel page with travel offers to purchase   │
│ │ │ Bootstrap  │ │  as well as blog posts to make travel exciting. It has a      │
│ │ │ and JQuery │ │  shop feature where users can add travel offers to the        │
│ │ └────────────┘ │  shopping cart, and a blog section with blog posts.           │
│ └────────────────┘                                                               │
│                                                                                  │
│ app.component.html             app.module.ts                                     │
│ ┌────────────────┐                                                               │
│ │ ┌────────────┐ │  AppRoutingModule   FooterComponent                           │
│ │ │  router-   │ │  AppComponent       HomeComponent                             │
│ │ │   outlet   │ │  NavbarComponent    BlogComponent                             │
│ │ └────────────┘ │  HeaderComponent    TraveloffersComponent                     │
│ └────────────────┘  IntroComponent     StandardheaderComponentent                │
│                     ChoicesComponent   BlogpostComponent                         │
│                     ListComponent      AddoffersComponent                        │
│                     FeaturesComponent  ShoppingcartComponent                     │
│                     NewsComponent                                                │
│                                                                                  │
│                                                                                  │
│                     home.component.html                                          │
│                     ┌────────────────┐                                           │
│      ┌────────────┐ │ ┌────────────┐ │                                           │
│      │ app-navbar ◀─┼─┤ app-header │ │ XL Header w. bg. img & nav.               │
│      └────────────┘ │ ├────────────┤ │                                           │
│       Navbar has    │ │ app-intro  │ │ Intro text, blog link & image             │
│       link to       │ ├────────────┤ │                                           │
│       shopp. cart   │ │app-choices │ │ 3col icons & text w. choices              │
│      ┌────────────┐ │ ├────────────┤ │                                           │
│      │  app-cart  ◀─┼─┤  app-list  │ │ List w. cards of travel offers            │
│      │ (service)  │ │ ├────────────┤ │                                           │
│      └────────────┘ │ │app-features│ │ Backgr. img, text & offer link            │
│       Users can add │ ├────────────┤ │                                           │
│       items to cart │ │  app-news  │ │ List w. cards of blog posts               │
│       from list of  │ ├────────────┤ │                                           │
│       travel offers │ │ app-footer │ │ Footer with links                         │
│            ▲        │ └────────────┘ │                                           │
│            │        └────────────────┘                                           │
│            │                                                                     │
│            │                                                                     │
│            │    traveloffers.component.html                                      │
│            │        ┌────────────────┐                                           │
│            │        │ ┌────────────┐ │                                           │
│            │        │ │    app-    │ │ Sm. header w. nav.                        │
│            │        │ │  standard  │ │                                           │
│            │        │ │   header   │ │                                           │
│            │        │ ├────────────┤ │                                           │
│            └────────┼─┤  app-list  │ │ List of travel offers                     │
│                     │ ├────────────┤ │                                           │
│                     │ │app-addoffer│ │ Form to add travel offers                 │
│                     │ ├────────────┤ │                                           │
│                     │ │ app-footer │ │ Footer with links                         │
│                     │ └────────────┘ │                                           │
│                     └────────────────┘                                           │
│                                                                                  │
│                                                                                  │
│                     blog.component.html    blogpost.component.html               │
│                     ┌────────────────┐       ┌────────────────┐                  │
│                     │ ┌────────────┐ │       │ ┌────────────┐ │                  │
│  Sm. header w. nav. │ │    app-    │ │       │ │    app-    │ │ Sm. header & nav.│
│                     │ │  standard  │ │       │ │  standard  │ │                  │
│                     │ │   header   │ │       │ │   header   │ │                  │
│                     │ ├────────────┤ │       │ ├────────────┤ │                  │
│  List w. blog posts │ │  app-news  ├─┼───────┼─▶1. Breadcr. │ │ HTML in template │
│                     │ ├────────────┤ │ Post  │ │2. Blog Post│ │ w. blog post     │
│   Footer with links │ │ app-footer │ │linked │ │3. Side Col.│ │ by ID            │
│                     │ └────────────┘ │ by ID │ ├────────────┤ │                  │
│                     └────────────────┘       │ │ app-footer │ │ Footer w. links  │
│                                              │ └────────────┘ │                  │
│                                              └────────────────┘                  │
│                                                                                  │
│                     cart.component.html                                          │
│                     ┌────────────────┐                                           │
│                     │ ┌────────────┐ │                                           │
│                     │ │    app-    │ │ Sm. header & nav.                         │
│                     │ │  standard  │ │                                           │
│                     │ │   header   │ │                                           │
│                     │ ├────────────┤ │                                           │
│                     │ │1. Breadcr. │ │ If cart is empty: link to offers          │
│                     │ │2. Cartcont.│ │ If cart is not empty cart content of all  │
│                     │ │   w. disc. │ │ items with total price and discounts      │
│                     │ ├────────────┤ │                                           │
│                     │ │ app-footer │ │ Footer w. links                           │
│                     │ └────────────┘ │                                           │
│                     └────────────────┘                                           │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────*/

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
