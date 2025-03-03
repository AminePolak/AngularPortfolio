import { Component, OnInit } from '@angular/core';
import { SkillsComponent } from "../skills.component";
import { Skill } from '../../models/skill';
import { skillService } from '../../services/skill.service';

@Component({
  selector: 'app-skills-list',
  imports: [SkillsComponent],
  templateUrl: './skills-list.component.html',
  styleUrl: './skills-list.component.scss'
})
export class SkillsListComponent implements OnInit {
  skills!: Skill[];

  constructor(private skillService: skillService){}

  ngOnInit(): void {
    this.skills = this.skillService.getSkills();

  }
}
