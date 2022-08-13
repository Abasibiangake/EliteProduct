import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Product } from "../../models/product.model";
import { ProductRepository } from "../../models/product.repository";
import { FooterComponent } from '../partials/footer.component';


@Component({
    selector: "fullPageAd",
    templateUrl: "fullPageAd.component.html",
    styleUrls: ['add_edit.component.css']

})

export class fullPageAdComponent {
    
    title: string = 'Your Ad: ';
    item: Product = new Product();

    constructor(private repository: ProductRepository, private router: Router, activeRoute: ActivatedRoute) 
    { 
    this.item = this.repository.getProduct(activeRoute.snapshot.params["id"]);
    }


    // SEND MESSAGE METHOD
    // ADD TO CART METHOD
}