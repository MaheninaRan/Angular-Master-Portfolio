import { Component, input } from '@angular/core';

@Component({
    selector: 'app-team-member-card',
    standalone: true,
    imports: [],
    templateUrl: './team-member-card.component.html',
    styleUrl: './team-member-card.component.scss'
})
export class TeamMemberCardComponent {
    imageSrc = input.required<string>();
    firstName = input.required<string>();
    lastName = input.required<string>();
    role = input.required<string>();
}
