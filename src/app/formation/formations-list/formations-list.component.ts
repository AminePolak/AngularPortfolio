import { Component, OnInit } from '@angular/core';
import { FormationComponent } from "../formation.component";
import { Formation } from '../../models/formation';
import { formationService } from '../../services/formation.service';

@Component({
  selector: 'app-formations-list',
  imports: [FormationComponent],
  templateUrl: './formations-list.component.html',
  styleUrl: './formations-list.component.scss'
})
export class FormationsListComponent implements OnInit {
  formations!: Formation[];

  constructor(private formationService: formationService) { }

  ngOnInit(): void {
    this.formations = this.formationService.getFormations();
    console.log(this.formations)
  }

}
