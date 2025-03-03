import { Component, Input} from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-skills',
  imports: [NgbProgressbarModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  @Input() skill!: Skill;
}
