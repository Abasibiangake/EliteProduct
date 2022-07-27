import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
// import { CounterDirective } from "./counter.directive";
// import { CartSummaryComponent } from "./cartSummary.component";
// import { CartDetailComponent } from "./cartDetail.component";
// import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";
import { PartialsModule } from './partials/partials.module';
// partials/partials.module

@NgModule({
    imports: [ModelModule, BrowserModule,PartialsModule, FormsModule, RouterModule],
    declarations: [StoreComponent],
    exports: [StoreComponent]
})

export class StoreModule { }