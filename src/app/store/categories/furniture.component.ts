import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../../models/product.model";
import { ProductRepository } from "../../models/product.repository";

@Component({
    selector: "furniture-product",
    templateUrl: "furniture.component.html",
    styleUrls: ['./category.component.css']

})

export class FurnitureCategoryComponent {

    title = 'Furniture Category';

    constructor(private repository: ProductRepository,
        private router: Router) 
    { }

    get productList(): Product[] {
        return this.repository.getProducts("Furniture");        
    }

    deleteMethod(id: string) {
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("products/delete/"+id);
        }
    }
    
}