import { Component, OnInit } from "@angular/core";
// import { Cart } from "../model/cart.model";
import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';

import { Router } from "@angular/router";
import { Product } from "../../models/product.model";
import { ProductRepository } from "../../models/product.repository";
import { faClock, fasellcast, faLeaf, faLocationDot, faTruck } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: "store",
    templateUrl: "store.component.html",
    styleUrls: ['store.component.css']
})

export class StoreComponent implements OnInit {
    title = "HomePage";
    // titleAd = ""
    faLocation = faLocationDot
    faClock = faClock
    fasellcast = fasellcast
    faLeaf = faLeaf
    faTruck = faTruck

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
    ngOnInit(): void {
    }
}



