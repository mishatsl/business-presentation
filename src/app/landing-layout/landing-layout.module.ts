import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingLayoutComponent } from './landing-layout.component';
import { AboutAreaComponent } from '../landing-sections/About-Area/about-area.component';
import { BlogAreaComponent } from '../landing-sections/blog-area/blog-area.component';
import { ContactAreaComponent } from '../landing-sections/contact-area/contact-area.component';
import { FooterAreaComponent } from '../landing-sections/footer-area/footer-area.component';
import { HeaderAreaComponent } from '../landing-sections/header-area/header-area.component';
import { MainmenuAreaComponent } from '../landing-sections/mainmenu-area/mainmenu-area.component';
import { PortfolioAreaComponent } from '../landing-sections/portfolio-area/portfolio-area.component';
import { PriceAreaComponent } from '../landing-sections/price-area/price-area.component';
import { SkillAreaComponent } from '../landing-sections/skill-area/skill-area.component';
import { TeamAreaComponent } from '../landing-sections/team-area/team-area.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LandingLayoutComponent,
    AboutAreaComponent,
    BlogAreaComponent,
    ContactAreaComponent,
    FooterAreaComponent,
    HeaderAreaComponent,
    MainmenuAreaComponent,
    PortfolioAreaComponent,
    PriceAreaComponent,
    SkillAreaComponent,
    TeamAreaComponent,]
})
export class LandingLayoutModule { }
