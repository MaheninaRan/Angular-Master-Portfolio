import { AfterViewInit, Component } from '@angular/core';
import { SplashComponent } from '../splash/splash.component';
import { AppConfig } from '../../../enums/app-data';
import { GlobalStatsService } from '../../services/global-stats/global-stats.service';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { AppRoutes } from '../../../enums/routes-data.enum';
import { TeamMemberComponent } from '../../components/team-member/team-member.component';
import { HomeHeroComponent } from '../../components/home-hero/home-hero.component';
import { HomeBusinessSectionsComponent } from '../../components/home-business-sections/home-business-sections.component';
import { HomeFinalCtaComponent } from '../../components/home-final-cta/home-final-cta.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        SplashComponent,
        HomeHeroComponent,
        HomeBusinessSectionsComponent,
        AboutMeComponent,
        TeamMemberComponent,
        HomeFinalCtaComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {

    public appConfig = AppConfig;
    public isAnimationPlayed: boolean;

    constructor(
        private _globalStatsService: GlobalStatsService,
    ) {
        this.isAnimationPlayed = _globalStatsService.isSplashAnimationPlayed;
        this._globalStatsService.setCanonicalUrl(AppRoutes.HOME);
    }

    ngAfterViewInit(): void {
        this._playSplashAnimation();
    }

    private _playSplashAnimation(): void {
        setTimeout(() => {
            this._globalStatsService.isSplashAnimationPlayed = true;
            this.isAnimationPlayed = true;
        }, 3200);
    }

}
