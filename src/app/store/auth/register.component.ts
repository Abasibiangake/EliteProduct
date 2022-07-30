import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../models/auth.service";
import { User } from "../../models/user.model";

@Component({
    templateUrl: "register.component.html"
})

export class RegisterComponent {

    public title: string = "Register";
    public user: User = new User();
    public confirmPassowrd: string;
    public message: string;

    constructor(private router: Router,
        private auth: AuthService) { }

    register(form: NgForm) {
        if (form.valid) {

            // Checks if the passwords match.
            if(this.user.password == this.confirmPassowrd){
                this.auth.registerUser(this.user)
                    .subscribe(response => {
                        console.log(response);
                        
                        if (response.success) {
                            alert(response.message);
                            this.router.navigateByUrl("/users/signin");
                        }
                        this.message = response.message; 
                    });
            } else {
                this.message = "Passwords do not match";    
            }
        } else {
            this.message = "Form Data Invalid";
        }
    }
}