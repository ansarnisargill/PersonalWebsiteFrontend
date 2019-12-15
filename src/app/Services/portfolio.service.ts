import { Injectable } from '@angular/core';
import { Project } from 'src/Models/Project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  public projects: Project[] = [];
  constructor() { }
  getAllProjects(): Project[] {
    for (let i = 1; 1 < 5; i++) {
      let p = new Project();
      p.demoUrl = 'https://irradiated-paint.glitch.me/';
      p.githubUrl = 'https://github.com/ansarnisargill/PlaneConvergenceProject/tree/master/AirportProject';
      p.id = i.toString();
      p.desktopSupport = true;
      p.mobileSupport = true;
      p.pictureUrl = 'https://images.unsplash.com/photo-1574170240473-5733a5b43a3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80';
      p.title = "Map Showing Direction";
      p.version = '1.0.0';
      this.projects.push(p);
    }
    return this.projects;
  }
}
