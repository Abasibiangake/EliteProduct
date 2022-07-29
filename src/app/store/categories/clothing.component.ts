import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../../model/product.model";
import { ProductRepository } from "../../model/product.repository";

@Component({
    selector: "clothing-product",
    templateUrl: "clothing.component.html"
})

export class ClothingCategoryComponent {

    title = 'Clothing Category';

    constructor(private repository: ProductRepository,
        private router: Router) 
    { }

    get productList(): Product[] {
        return this.repository.getProduct();        
    }

    deleteMethod(id: string) {
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("product/delete/"+id);
        }
    }
    
}