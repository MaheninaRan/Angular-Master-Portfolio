import { Component } from '@angular/core';
import { AppRoutes } from '../../../enums/routes-data.enum';

@Component({
    selector: 'app-home-final-cta',
    standalone: true,
    imports: [],
    templateUrl: './home-final-cta.component.html',
    styleUrl: './home-final-cta.component.scss'
})
export class HomeFinalCtaComponent {
    public appRoutes = AppRoutes;
}
