import { Component } from '@angular/core';

interface HomeStat {
    value: string;
    label: string;
}

interface TrustPoint {
    title: string;
    description: string;
}

@Component({
    selector: 'app-home-business-sections',
    standalone: true,
    imports: [],
    templateUrl: './home-business-sections.component.html',
    styleUrl: './home-business-sections.component.scss'
})
export class HomeBusinessSectionsComponent {
    public stats: HomeStat[] = [
        { value: '4', label: 'experts complémentaires' },
        { value: 'Fullstack', label: 'de la conception à la mise en production' },
        { value: 'Réponse rapide', label: 'pour vos besoins et vos devis' }
    ];

    public trustPoints: TrustPoint[] = [
        {
            title: 'Une équipe complète',
            description: 'Frontend, backend, base de données et hébergement sont réunis dans la même équipe.'
        },
        {
            title: 'Une approche orientée résultat',
            description: 'Nous pensons vos projets comme des outils de croissance, pas seulement comme de la technique.'
        },
        {
            title: 'Une collaboration simple',
            description: 'Nous privilégions les échanges clairs, les délais réalistes et une livraison propre.'
        }
    ];
}
