import { Component, Input } from '@angular/core';
import { Formation } from '../models/formation';

@Component({
  selector: 'app-formation',
  imports: [],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.scss'
})
export class FormationComponent {
  @Input() formation!: Formation;

}
