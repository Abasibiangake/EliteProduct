import { Component } from "@angular/core";
// import { Cart } from "../model/cart.model";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Product } from "../../models/product.model";
import { ProductRepository } from "../../models/product.repository";
import { FooterComponent } from '../partials/footer.component';


@Component({
    selector: "add-edit",
    templateUrl: "add_edit.component.html",
    styleUrls: ['add_edit.component.css']

})

// export class StoreComponent {
//     title = "Add/Edit Product";
//     constructor(private router: Router) { }
// }

export class AddEditComponent {
    
    title:string = 'Create an Ad';
    editing: boolean = false;
    item: Product = new Product();

    constructor(private repository: ProductRepository,
                private router: Router,
                activeRoute: ActivatedRoute) 
    { 
        // Delete
        if (activeRoute.snapshot.params["mode"] == "delete") {
            this.deleteItem(activeRoute.snapshot.params["id"]);
        }

        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        
        // Edit
        if (this.editing) {
            this.item = this.repository.getProduct(activeRoute.snapshot.params["id"]);
        } 

        // Add ----> ?
        else {
            this.item = new Product();
        }        
    }

    save(form: NgForm) {
        this.repository.saveProduct(this.item);
        this.router.navigateByUrl("/");                
    }

    private deleteItem(id: string){
        this.repository.deleteProduct(id);
        this.router.navigateByUrl("/");
    }
    
}