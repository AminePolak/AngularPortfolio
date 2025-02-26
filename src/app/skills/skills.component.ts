import { Component, Input, OnInit } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from '../models/skill';
import { skillsService } from '../services/skills.service';


@Component({
  selector: 'app-skills',
  imports: [NgbProgressbarModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  @Input() skill!: Skill;

  constructor(private skillService: skillsService,
  ) { }
  ngOnInit(): void {
    // this.skills = this.getSkill();    
  }

  // private getSkill(){
  //   this.skill = this.skillService.
  // }
}
