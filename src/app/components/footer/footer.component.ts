import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';
import { SocialMediaLinksComponent } from '../social-media-links/social-media-links.component';
import { AppRoutes } from '../../../enums/routes-data.enum';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [
        SocialMediaLinksComponent
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    public readonly currentDate = new Date();
    public readonly currentYear = this.currentDate.getFullYear();

    public appConfig = AppConfig;
    public appRoutes = AppRoutes;
}
