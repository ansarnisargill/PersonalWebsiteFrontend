import { Component, OnInit } from '@angular/core';
import { Project } from 'src/Models/Project';
import { PortfolioService } from 'src/app/Services/portfolio.service';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
public projects:Project[]=[];
  constructor(private portfolioService:PortfolioService) {
    this.projects=this.portfolioService.getAllProjects();
   }

  ngOnInit() {
  }
 
}
