import { Component } from "@angular/core";
// import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

@Component({
    selector: "store",
    templateUrl: "add_edit.component.html"
})

export class StoreComponent {
    title = "Add/Edit Product";
    constructor(private router: Router) { }
}
