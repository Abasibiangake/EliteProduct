import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { StoreComponent } from "./store.component";
// import { CounterDirective } from "./counter.directive";
// import { CartSummaryComponent } from "./cartSummary.component";
// import { CartDetailComponent } from "./cartDetail.component";
// import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";
import { PartialsModule } from '../partials/partials.module';
import { AddEditComponent } from "./add_edit.component";
import {CategoriesModule} from '../categories/categories.module';
//import { ClothingCategoryComponent } from './store/categories/clothing.component';



@NgModule({
    imports: [BrowserModule, PartialsModule, FormsModule, RouterModule],
    declarations: [StoreComponent, AddEditComponent],
    exports: [StoreComponent, AddEditComponent]
})

export class StoreModule { }