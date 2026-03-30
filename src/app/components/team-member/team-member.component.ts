import { Component } from '@angular/core';
import { TeamMemberCardComponent } from '../team-member-card/team-member-card.component';

interface TeamMember {
    firstName: string;
    lastName: string;
    role: string;
    imageSrc: string;
}

@Component({
  selector: 'app-team-member',
  standalone: true,
  imports: [
    TeamMemberCardComponent
  ],
  templateUrl: './team-member.component.html',
  styleUrl: './team-member.component.scss'
})

export class TeamMemberComponent {
  public teamMembers: TeamMember[] = [
        {
            firstName: 'Rado Mahenina',
            lastName: 'RANDRIANJANAHARY',
            role: 'Développeur PHP/Technicien d\'hébergement',
            imageSrc: 'https://media.licdn.com/dms/image/v2/D4D03AQFja5JIM_6LUA/profile-displayphoto-scale_200_200/B4DZ0y7THpIYAY-/0/1774675901335?e=1776297600&v=beta&t=VqXoqxAfMpzg8y9r8goXul-q_TR7dyllqDiKqCLbfaI'
        },
        {
            firstName: 'Jean Elysé',
            lastName: 'MAHEFANIAINA',
            role: 'Développeur JAVA - JS / Intégrateur ERP et base de données',
            imageSrc: 'https://media.licdn.com/dms/image/v2/D4E03AQF2mwwpTj0xSQ/profile-displayphoto-shrink_200_200/B4EZWWXSLEHcAg-/0/1741984441822?e=1776297600&v=beta&t=wHcgYuFizqRIIZa45TV6KCnjCqLgOx_o8w5ki3Jffug'
        },
        {
            firstName: 'Toky',
            lastName: 'RAHERIMANANA',
            role: 'Développeur Fullstack',
            imageSrc: 'https://media.licdn.com/dms/image/v2/D4E03AQH42LRjnxPb8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718310767210?e=1776297600&v=beta&t=RS6We4j7yEmsUyGa-UNbLcfQeXGNPp6gRj4YjpvkoR4'
        },
        {
            firstName: 'Toky Jordy',
            lastName: 'RAKOTONIRINA',
            role: 'Développeur Fullstack',
            imageSrc: 'https://media.licdn.com/dms/image/v2/D4E03AQGwg_VAD_jyRg/profile-displayphoto-scale_200_200/B4EZsv8cAJIMAY-/0/1766035934030?e=1776297600&v=beta&t=AJtYses_QpGmGDDs3BNKs5oFLRYqkro1Pe3Zw2HzKUs'
        }
    ];
}
