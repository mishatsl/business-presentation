import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Provider } from '@angular/core';
import {LandingLayoutComponent} from './landing-layout/landing-layout.component';
import {LandingLayoutModule} from './landing-layout/landing-layout.module';

import { AppComponent } from './app.component';

import { AboutAreaComponent } from './landing-sections/About-Area/about-area.component';
import { BlogAreaComponent } from './landing-sections/blog-area/blog-area.component';
import { ContactAreaComponent } from './landing-sections/contact-area/contact-area.component';
import { FooterAreaComponent } from './landing-sections/footer-area/footer-area.component';
import { HeaderAreaComponent } from './landing-sections/header-area/header-area.component';
import { MainmenuAreaComponent } from './landing-sections/mainmenu-area/mainmenu-area.component';
import { PortfolioAreaComponent } from './landing-sections/portfolio-area/portfolio-area.component';
import { PriceAreaComponent } from './landing-sections/price-area/price-area.component';
import { SkillAreaComponent } from './landing-sections/skill-area/skill-area.component';
import { TeamAreaComponent } from './landing-sections/team-area/team-area.component';
import { ServiceAreaComponent } from './landing-sections/service-area/service-area.component';
import { AgmCoreModule } from '@agm/core';
// import { InViewportModule, WindowRef } from '@thisissoon/angular-inviewport';
// import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';

// Provide window object for browser and a suitable replacement
// on other platforms
// export const getWindow = () => window;

// export const inViewportProviders: Provider[] = [
//   { provide: WindowRef, useFactory: getWindow }
// ];



@NgModule({
  declarations: [
    AppComponent, 
    LandingLayoutComponent,
    AboutAreaComponent,
    BlogAreaComponent,
    ContactAreaComponent,
    FooterAreaComponent,
    HeaderAreaComponent,
    MainmenuAreaComponent,
    PortfolioAreaComponent,
    PriceAreaComponent,
    SkillAreaComponent,
    TeamAreaComponent,
    ServiceAreaComponent,
  ],
  imports: [
    BrowserModule
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDXZ3vJtdK6aKAEWBovZFe4YKj1SGo9V20'
    // })
//     InViewportModule.forRoot(inViewportProviders),
// ScrollSpyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
