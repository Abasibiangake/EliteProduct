import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { SignInComponent } from './store/auth/signin.component';
import { RegisterComponent } from './store/auth/register.component';
import { AddEditComponent } from './store/products/add_edit.component';
import { StoreComponent } from "./store/products/store.component";
import { StoreModule } from "./store/products/store.module";
import { AuthModule } from './store/auth/auth.module';
import { AuthGuard } from "./store/auth/auth.guard";

// import { CheckoutComponent } from "./store/checkout.component";
// import { CartDetailComponent } from "./store/cartDetail.component";
// import { StoreFirstGuard } from "./storeFirst.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    StoreModule,
    AuthModule,
    RouterModule.forRoot([
      { path: "", component: StoreComponent },
      { path: "product/:mode", component: AddEditComponent, canActivate: [AuthGuard]},
      { path: "product/:mode/:id", component: AddEditComponent, canActivate: [AuthGuard] },
      { path: "users/signin", component: SignInComponent },
      { path: "users/register", component: RegisterComponent },
      
            // { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
      // { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
      { path: "**", redirectTo: "" }//everything else (other paths) is redirected to home 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


