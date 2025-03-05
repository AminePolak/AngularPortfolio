import { Component, OnInit } from '@angular/core';
import { PortfolioComponent } from "../portfolio.component";
import { portfolioService } from '../../services/portfolio.service';
import { Portfolio } from '../../models/portfolio';

@Component({
  selector: 'app-portfolio-list',
  imports: [PortfolioComponent],
  templateUrl: './portfolio-list.component.html',
  styleUrl: './portfolio-list.component.scss'
})
export class PortfolioListComponent implements OnInit {
  portfolios!: Portfolio[];

  constructor(private porfolioService: portfolioService) { }

  ngOnInit(): void {
    this.portfolios = this.porfolioService.getPorfolios();
  }
}
