import { Component, Input } from '@angular/core';
import { Portfolio } from '../models/portfolio';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})

export class PortfolioComponent {
  @Input() portfolio!: Portfolio;
}
