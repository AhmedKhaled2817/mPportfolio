import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  vanillaProjects: Project[] = [];
  angularProjects: Project[] = [];
  activeTab: 'vanilla' | 'angular' = 'vanilla';

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.vanillaProjects = this.projectsService.getProjects('vanilla');
    this.angularProjects = this.projectsService.getProjects('angular');
  }

  setActiveTab(tab: 'vanilla' | 'angular') {
    this.activeTab = tab;
  }

  openProject(url: string) {
    window.open(url, '_blank');
  }
}

