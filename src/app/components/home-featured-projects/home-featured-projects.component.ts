import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';
import { Project } from '../../../interfaces/project.interface';

@Component({
    selector: 'app-home-featured-projects',
    standalone: true,
    imports: [],
    templateUrl: './home-featured-projects.component.html',
    styleUrl: './home-featured-projects.component.scss'
})
export class HomeFeaturedProjectsComponent {
    public featuredProjects: Project[] = AppConfig.projectSections[0]?.entities.slice(0, 3) ?? [];
}
