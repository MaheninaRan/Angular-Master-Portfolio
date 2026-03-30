import { Routes } from '@angular/router';
import { AppRoutes } from '../enums/routes-data.enum';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { EducationComponent } from './pages/education/education.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';

export const routes: Routes = [
    {
        path: AppRoutes.HOME,
        component: HomeComponent,
        title: `Dev-Professionnel`,
    },
    // {
    //     path: AppRoutes.PROJECTS,
    //     component: ProjectsComponent,
    //     title: `Projets | Dev-Professionnel`,
    // },
    {
        path: AppRoutes.EDUCATION,
        component: EducationComponent,
        title: `Education | Dev-Professionnel`,
    },
    {
        path: AppRoutes.TECHNOLOGIE,
        component: EducationComponent,
        title: `Technologie | Dev-Professionnel`,
    },
    {
        path: AppRoutes.ACHIEVEMENTS,
        component: AchievementsComponent,
        title: `Achievements | Dev-Professionnel`,
    },
    {
        path: "**",
        redirectTo: AppRoutes.ERROR,
    },
    {
        path: AppRoutes.ERROR,
        component: ErrorComponent,
        title: `Error | Dev-Professionnel`,
    }
];
