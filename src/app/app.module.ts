import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from "./store/products/store.module";
import { StoreComponent } from "./store/products/store.component";
// import { CheckoutComponent } from "./store/checkout.component";
// import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
// import { StoreFirstGuard } from "./storeFirst.guard";
// import { PartialsModule } from './store/partials/partials.module';
import {CategoriesModule} from './store/categories/categories.module';
import { ClothingCategoryComponent } from './store/categories/clothing.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    StoreModule,
    // PartialsModule,
    CategoriesModule,
    RouterModule.forRoot([
      { path: "", component: StoreComponent },
      { path: "categories/clothing", component: ClothingCategoryComponent },
      // { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
      // { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
      { path: "**", redirectTo: "" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// { path: "store", component: StoreComponent },
// // { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
// // { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
// { path: "**", redirectTo: "/store" }

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from "@angular/router";
// import { AppComponent } from './app.component';

// import { IndexComponent } from './store/store.component';
// import { IndexModule } from './store/store.module';
// // import { ProductModule } from "./productview/product/inventory.module";

// @NgModule({
//   declarations: [
//     AppComponent 
//   ],
//   imports: [ 
//     BrowserModule, 
//     IndexModule,
//     RouterModule.forRoot([
//       { path: "", component: IndexComponent },
//       { path: "**", redirectTo: "" }
//     ])
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
