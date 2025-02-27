import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { SkillsComponent } from "./skills/skills.component";
import { SkillsListComponent } from "./skills/skills-list/skills-list.component";

@Component({
  selector: 'app-root',
  imports: [AboutComponent, HeaderComponent, FooterComponent, NavBarComponent, SkillsComponent, SkillsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
