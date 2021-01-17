import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { WebBodyComponent } from './components/web-body/web-body.component';
import { ProductListComponent } from './components/web-body/product-list/product-list.component';
import { CartComponent } from './components/web-body/cart/cart.component';
import { CartItemComponent } from './components/web-body/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/web-body/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    WebBodyComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
