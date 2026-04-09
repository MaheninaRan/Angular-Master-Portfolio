import { Component, input } from '@angular/core';
import { CareerMember } from '../../../interfaces/career-member.interface';

@Component({
    selector: 'app-career-member-card',
    standalone: true,
    imports: [],
    templateUrl: './career-member-card.component.html',
    styleUrl: './career-member-card.component.scss'
})
export class CareerMemberCardComponent {
    member = input.required<CareerMember>();
}
