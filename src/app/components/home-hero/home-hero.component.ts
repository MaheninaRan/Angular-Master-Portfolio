import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { AppRoutes } from '../../../enums/routes-data.enum';
import { SocialMediaLinksComponent } from '../social-media-links/social-media-links.component';

@Component({
    selector: 'app-home-hero',
    standalone: true,
    imports: [
        SocialMediaLinksComponent
    ],
    templateUrl: './home-hero.component.html',
    styleUrl: './home-hero.component.scss'
})
export class HomeHeroComponent {
    public appConfig = AppConfig;
    public assetPaths = AssetPaths;
    public appRoutes = AppRoutes;
}
