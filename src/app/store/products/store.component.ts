import { Component } from "@angular/core";
// import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

@Component({
    selector: "store",
    templateUrl: "store.component.html",
    styleUrls: ['store.component.css']
})

export class StoreComponent {
    title = "HomePage";
    titleAd = "Latest Ads"
    constructor(private router: Router) { }
}
