import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of  } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';
import { Product } from "./product.model";
import { User } from "./user.model";
import { ResponseModel } from "./response.model";
import { environment } from "src/environments/environment";


@Injectable()
export class RestDataSource {

    baseUrl: string;
    auth_token: string;

    //Localhost:1000
    constructor(private http: HttpClient) {
        this.baseUrl = environment.apiurl;    //"http://localhost:1000/";
        console.log(this.baseUrl);
    }

    getProductList(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl + "products/list");
    }

    insertProduct(item: Product): Observable<Product> {
        return this.http.post<Product>(
                this.baseUrl + "products/add",
                item, 
                this.provideToken()
            ).pipe(map(response => {
                return response;
            }),
            catchError(error => {
                console.log(error.error);
                return of(error.error);
            }));
    }

    updateProduct(item: Product): Observable<ResponseModel> {
        return this.http.put<ResponseModel>(`${this.baseUrl}products/edit/${item._id}`,
            item, this.provideToken()).pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    deleteProduct(id: string): Observable<ResponseModel> {
        return this.http.delete<ResponseModel>(`${this.baseUrl}products/delete/${id}`,
            this.provideToken()).pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    authenticate(user: string, pass: string): Observable<ResponseModel> {
        return this.http.post<any>(this.baseUrl + "users/signin", 
        {
            username: user, 
            password: pass
        }).pipe(
            map(response => {
                this.auth_token = response.success ? response.token : null;
                return response;
            }),
            catchError(error => {return of(error.error)})
        );
    }

    registerUser(user: User): Observable<ResponseModel> {
        return this.http.post<ResponseModel>(this.baseUrl + "users/register", user)
            .pipe(map(response => {
                return response;
            }),
            catchError(error => {return of(error.error)}));
    }

    //Method used Above
    private provideToken() {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer ${this.auth_token}`
            })
        }
    }
}
