import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { SkillsComponent } from "./skills/skills.component";
import { SkillsListComponent } from "./skills/skills-list/skills-list.component";
import { FormationComponent } from "./formation/formation.component";

@Component({
  selector: 'app-root',
  imports: [AboutComponent, HeaderComponent, FooterComponent, NavBarComponent, SkillsComponent, SkillsListComponent, FormationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
