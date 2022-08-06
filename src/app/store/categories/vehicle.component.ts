import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../../models/product.model";
import { ProductRepository } from "../../models/product.repository";

@Component({
    selector: "vehicle-product",
    templateUrl: "vehicle.component.html",
    styleUrls: ['./category.component.css']

})

export class VehicleCategoryComponent {

    title = 'Vehicle Category';

    constructor(private repository: ProductRepository,
        private router: Router) 
    { }

    get productList(): Product[] {
        return this.repository.getProducts("Vehicle");        
    }

    deleteMethod(id: string) {
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("products/delete/"+id);
        }
    }
    
}