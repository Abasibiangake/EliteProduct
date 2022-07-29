import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";
import { ResponseModel } from "./response.model";

@Injectable()
export class ProductRepository {

    private product: Product[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getProductList().subscribe(data => {
            this.product = data;
        });
    }

    getProduct(): Product[] {
        return this.product;
    }

    getItem(id: string): Product {
        return (this.product.find(item => item._id === id)!);
    }

    async saveProduct(item: Product) {

        // If it does not have id, then create a new item.
        if (item._id == null || item._id == "") {
            this.dataSource.insertProduct(item)
                .subscribe(response => {
                    if(response._id) // If API created
                    {
                        this.product.push(response);
                    }
                    else{ // If API send error.
                        // Convert into ResponseModel to get the error message.
                        let error = response as ResponseModel;  
                        alert(`Error: ${error.message}`);
                    }
                });
        } else {
            // If it has id, then update a existing item.
            this.dataSource.updateProduct(item).subscribe(response => {
                if (response.success) {
                    this.product.splice(this.product.
                        findIndex(i => i._id == item._id), 1, item);
                }
                else{
                    alert(`Error: ${response.message}`);
                }        
            });
        }
    }

    deleteProduct(id: string) {
        this.dataSource.deleteProduct(id).subscribe(response => {
            if (response.success) {
                this.product.splice(this.product.
                    findIndex(item => item._id == id), 1);                                
            }
            else{
                alert(`Error: ${response.message}`);
            }
        })
    }

}