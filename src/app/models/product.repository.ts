import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";
import { ResponseModel } from "./response.model";

@Injectable()
export class ProductRepository {
   
    private products: Product[] = [];
    private categories: string[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getProductList().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    //get products within category
    getProducts(category: string = "" ): Product[] {
        return this.products
            .filter(p => category == "" || category == p.category);
    }

    //get specific product
    getProduct(id: string): Product {
        return (this.products.find(p => p.id === id)!);
    }

    //get list of categories
    getCategories(): string[] {
        return this.categories;
    }


    //update/save product
    async saveProduct(item: Product) {

        // If it does not have id, then create a new item.
        if (item.id == null || item.id == "") {
            this.dataSource.insertProduct(item)
                .subscribe(response => {
                    if(response.id) // If API created
                    {
                        this.products.push(response);
                    }
                    else{
                        let error = response as ResponseModel;  
                        alert(`Error: ${error.message}`);
                    }
                });

        // If it has id, then update a existing item.
        } else {
            this.dataSource.updateProduct(item).subscribe(response => {
                if (response.success) {
                    this.products.splice(this.products.
                        findIndex(i => i.id == item.id), 1, item);
                }
                else{
                    alert(`Error: ${response.message}`);
                }        
            });
        }
    }

    //delete product
    deleteProduct(id: string) {
        this.dataSource.deleteProduct(id).subscribe(response => {
            if (response.success) {
                this.products.splice(this.products.
                    findIndex(item => item.id == id), 1);                                
            }
            else{
                alert(`Error: ${response.message}`);
            }
        })
    }

}
