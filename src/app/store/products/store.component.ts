import { Component } from "@angular/core";
// import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";
import { Product } from "../../models/product.model";
import { ProductRepository } from "../../models/product.repository";

@Component({
    selector: "store",
    templateUrl: "store.component.html",
    styleUrls: ['store.component.css']
})

export class StoreComponent {
    title = "HomePage";
    titleAd = "Latest Ads"
    // constructor(private router: Router) { }

    constructor(private repository: ProductRepository,
        private router: Router) 
    { }


    get productList(): Product[] {
        return this.repository.getProducts();        
    }

    // deleteMethod(id: string) {
    //     if(confirm("Are you sure do you want to delete?")) {
    //         this.router.navigateByUrl("product/delete/"+id);
    //     }
    // }
}



