import { Injectable } from '@angular/core';
import { Project } from 'src/Models/Project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  public projects: Project[] = [];
  constructor() { }
  getAllProjects(): Project[] {
    for (let i = 1; i<5; i++) {
      let p = new Project();
      p.demoUrl = 'https://irradiated-paint.glitch.me/';
      p.githubUrl = 'https://github.com/ansarnisargill/PlaneConvergenceProject/tree/master/AirportProject';
      p.id = i.toString();
      p.desktopSupport = true;
      p.mobileSupport = true;
      p.pictureUrl = 'https://bulmatemplates.github.io/bulma-templates/images/admin.png';
      p.title = 'Map Showing Direction';
      p.version = 'Leaflet, Javascript';
      this.projects.push(p);
    }
    return this.projects;
  }
}
