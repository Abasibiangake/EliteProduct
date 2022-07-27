import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { BannerComponent } from './banner.component';
import { LatestAdsComponent } from './latestAds.component';

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule],
    declarations: [
        HeaderComponent,
        FooterComponent,
        BannerComponent,
        LatestAdsComponent
    ],
    exports: [
        HeaderComponent, 
        FooterComponent,
        BannerComponent,
        LatestAdsComponent
    ]
})
  
//   export class PartialsModule {}