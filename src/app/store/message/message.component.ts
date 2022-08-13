import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Product } from "../../models/product.model";
import { ProductRepository } from "../../models/product.repository";

@Component({
  selector: 'message-owner',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.css']

})

export class MessageComponent {

    constructor(private repository: ProductRepository,
        private router: Router) 
    { }

}
