import { Component, OnInit } from '@angular/core';
import { Experience } from '../../models/experience';
import { experienceService } from '../../services/experience.service';
import { ExperienceComponent } from "../experience.component";

@Component({
  selector: 'app-experiences-list',
  imports: [ExperienceComponent],
  templateUrl: './experiences-list.component.html',
  styleUrl: './experiences-list.component.scss'
})
export class ExperiencesListComponent implements OnInit {
  experiences!: Experience[];

  constructor(private experienceService: experienceService) { }

  ngOnInit(): void {
    this.experiences = this.experienceService.getExperiences();
  }

}
