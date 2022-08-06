import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";

// import { Cart } from "./cart.model";
// import { Order } from "./order.model";
// import { OrderRepository } from "./order.repository";
// import { RestDataSource } from "./rest.datasource";


@NgModule({
    imports: [HttpClientModule],
    providers: [
        ProductRepository, 
        RestDataSource,
        AuthService   
        // Cart, 
        // Order, 
        // OrderRepository 
        // { 
        //     provide: StaticDataSource, 
        //     useClass: RestDataSource 
        // }
    ]
})

export class ModelModule { }