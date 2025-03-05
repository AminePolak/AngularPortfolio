import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { SkillsListComponent } from "./skills/skills-list/skills-list.component";
import { FormationsListComponent } from './formation/formations-list/formations-list.component';
import { ExperiencesListComponent } from "./experience/experiences-list/experiences-list.component";
import { PortfolioListComponent } from "./portfolio/portfolio-list/portfolio-list.component";

@Component({
  selector: 'app-root',
  imports: [AboutComponent, HeaderComponent, FooterComponent, NavBarComponent, SkillsListComponent, FormationsListComponent, ExperiencesListComponent, PortfolioListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
