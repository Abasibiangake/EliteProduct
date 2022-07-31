import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../../models/model.module";
import { ClothingCategoryComponent } from "./clothing.component";
import { FurnitureCategoryComponent } from "./furniture.component";
import { OutdoorCategoryComponent } from "./outdoor.component";
import { ElectronicsCategoryComponent } from "./electronics.component";
import { VehicleCategoryComponent } from "./vehicle.component";

// import { CounterDirective } from "./counter.directive";
// import { CartSummaryComponent } from "./cartSummary.component";
// import { CartDetailComponent } from "./cartDetail.component";
// import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";
import { PartialsModule } from '../partials/partials.module';


@NgModule({
    imports: [ModelModule, BrowserModule,PartialsModule, FormsModule, RouterModule],
    declarations: [ClothingCategoryComponent, 
        ElectronicsCategoryComponent, 
        FurnitureCategoryComponent, 
        OutdoorCategoryComponent,
        VehicleCategoryComponent
    ],
    exports: [ClothingCategoryComponent, 
        ElectronicsCategoryComponent, 
        FurnitureCategoryComponent, 
        OutdoorCategoryComponent,
        VehicleCategoryComponent]
})

export class CategoriesModule { }