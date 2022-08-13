import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PartialsModule } from '../partials/partials.module';
import { MessageComponent }from './message.component';
import { ModelModule } from "../../models/model.module";


@NgModule({
    imports: [ModelModule, BrowserModule,PartialsModule, FormsModule, RouterModule],
    declarations: [MessageComponent
    ],
    exports: [MessageComponent]
})

export class MessageModule { }