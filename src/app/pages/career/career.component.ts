import { Component } from '@angular/core';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { AppRoutes } from '../../../enums/routes-data.enum';
import { GlobalStatsService } from '../../services/global-stats/global-stats.service';
import { CareerMember } from '../../../interfaces/career-member.interface';
import { CareerMemberCardComponent } from '../../components/career-member-card/career-member-card.component';

@Component({
    selector: 'app-career',
    standalone: true,
    imports: [
        CareerMemberCardComponent
    ],
    templateUrl: './career.component.html',
    styleUrl: './career.component.scss'
})
export class CareerComponent {
    public assetPaths = AssetPaths;
    public members: CareerMember[] = [
        {
            fullName: 'Rado Mahenina Randrianjanahary',
            role: '',
            imageSrc: 'https://media.licdn.com/dms/image/v2/D4D03AQFja5JIM_6LUA/profile-displayphoto-scale_200_200/B4DZ0y7THpIYAY-/0/1774675901335?e=1776297600&v=beta&t=VqXoqxAfMpzg8y9r8goXul-q_TR7dyllqDiKqCLbfaI',
            summary: '',
            steps: [
                {
                    company: 'Simafri Madagascar',
                    title: 'Développeur Full-Stack & Technicien en Hébergement',
                    period: 'Avril 2025 - Aujourd hui',
                    highlights: [
                        'Développement et maintenance de diverses applications web pour les clients.',
                        'Correction de bugs, refactoring et amélioration des performances applicatives.',
                        'Développement de modules personnalisés sur des ERP/CRM.',
                        'Adaptation des fonctionnalités des ERP/CRM selon les besoins clients.',
                        'Déploiement, mise en production et maintenance des serveurs d’hébergement.'
                    ]
                },
                {
                    company: 'EDBM',
                    title: 'Stage professionnel en développement web',
                    period: 'Novembre 2024 - Fevrier 2025',
                    highlights: [
                        'Participation à des projets applicatifs en environnement professionnel.',
                        'Contribution à l\'optimisation du système interne de gestion administrative (Java Spring Boot).',
                        'Découverte du fonctionnement d\'un organisme public lié à la création et au suivi des entreprises.'
                    ]
                },
                {
                    company: 'Misaina Incorporation',
                    title: 'Stage en développement back-office',
                    period: 'Aout 2024 - Novembre 2024',
                    highlights: [
                        'Développement d\'une application web back-office pour le secteur textile.',
                        'Analyse des ventes et suivi des stocks de production à une date donnée.',
                        'Utilisation des technologies Angular, React Native, Next.js et PostgreSQL.'
                    ]
                }
            ]
        },
        {
            fullName: 'Jean Elyse Mahefaniaina',
            role: '',
            imageSrc: 'https://media.licdn.com/dms/image/v2/D4E03AQF2mwwpTj0xSQ/profile-displayphoto-shrink_200_200/B4EZWWXSLEHcAg-/0/1741984441822?e=1776297600&v=beta&t=wHcgYuFizqRIIZa45TV6KCnjCqLgOx_o8w5ki3Jffug',
            summary: '',
            steps: [
                {
                    company: 'SLK Consulting Partners',
                    title: 'Développeur Full-Stack et Consultant Technique',
                    period: 'Avril 2025 - Aujourd hui',
                    highlights: [
                        'Migration d\'une application WinDev vers Angular et Spring Boot.',
                        'Optimisation des calculs, du chargement des données et des requêtes SQL.',
                        'Développement frontend et backend pour la gestion des flux de production TRIMET.',
                        'Intégration de l\'ERP IFS chez différents clients pour assurer la fluidité des processus.',
                        'Refactoring et optimisation de l\'architecture pour améliorer la performance et la maintenabilité.'
                    ]
                },
                {
                    company: 'Freelance',
                    title: 'Développeur Front-End',
                    period: 'Septembre 2024 - Mai 2025',
                    highlights: [
                        'Conception et développement d\'une application de gestion intégrée pour Tranombarotra MANGABE.',
                        'Utilisation d\'Angular, Angular Material et SCSS pour une interface propre et structurée.',
                        'Optimisation de la gestion des stocks, produits, dépôts et bons de commande.',
                        'Mise en place de notifications et d\'un suivi en temps réel pour fiabiliser les informations.'
                    ]
                },
                {
                    company: 'Misaina Incorporation',
                    title: 'Stage en développement web et mobile',
                    period: 'Aout 2024 - Novembre 2024',
                    highlights: [
                        'Participation au développement d\'une application web et mobile pour la vente de textiles.',
                        'Utilisation des technologies Angular, React Native, Medusa et PostgreSQL.',
                        'Contributions sur les fonctionnalités clés : personnalisation des produits, suivi des livraisons et paiement en ligne.'
                    ]
                }
            ]
        },
        {
            fullName: 'Toky Jordy Rakotonirina',
            role: '',
            imageSrc: 'https://media.licdn.com/dms/image/v2/D4E03AQGwg_VAD_jyRg/profile-displayphoto-scale_200_200/B4EZsv8cAJIMAY-/0/1766035934030?e=1776297600&v=beta&t=AJtYses_QpGmGDDs3BNKs5oFLRYqkro1Pe3Zw2HzKUs',
            summary: '',
            steps: [
                {
                    company: 'Upskill Analamahitsy',
                    title: 'Développeur Full-Stack',
                    period: 'Juin 2024 - A ce jour',
                    location: 'Antananarivo',
                    highlights: [
                        'Développement et maintenance du backend Laravel avec un focus sur la sécurité et les performances.',
                        'Conception du frontend avec une interface moderne, responsive et optimisée.',
                        'Migration complète de Laravel 8 vers Laravel 10.',
                        'Intégration de code multi-développeurs, gestion des conflits et déploiement sur DigitalOcean avec CyberPanel.',
                        'Configuration de l\'infrastructure cloud, des domaines, du SSL et de l\'optimisation serveur.'
                    ]
                }
            ]
        },
        {
            fullName: 'Toky Raherimanana',
            role: '',
            imageSrc: 'https://media.licdn.com/dms/image/v2/D4E03AQH42LRjnxPb8A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718310767210?e=1776297600&v=beta&t=RS6We4j7yEmsUyGa-UNbLcfQeXGNPp6gRj4YjpvkoR4',
            summary: '',
            steps: [
                {
                    company: 'ERAK Consulting',
                    title: 'Développeur Symfony et Node.js',
                    period: 'Janvier 2025 - Aujourd hui',
                    highlights: [
                        'Développement, maintenance et optimisation de diverses fonctionnalités sur des CRM clients avec Symfony 7.',
                        'Développement d\'API REST pour des applications mobiles avec Symfony API Platform et Node.js/Express.',
                        'Participation à la conception, à l\'architecture, à la sécurité et à l\'optimisation des fonctionnalités demandées par les clients.'
                    ]
                },
                {
                    company: 'Freelance',
                    title: 'Développeur Symfony',
                    period: 'Septembre 2024 - Décembre 2024',
                    highlights: [
                        'Élaboration complète d\'un site e-commerce sur mesure pour Vanille 7 Mada, incluant l\'analyse des besoins, la conception et le déploiement.',
                        'Création d\'un site vitrine responsive présentant l\'identité et les produits de la marque.',
                        'Développement d\'un espace administrateur sécurisé permettant une gestion autonome et intuitive des produits (ajout, modification, suppression, mise en avant).'
                    ]
                },
                {
                    company: 'Freelance',
                    title: 'Développeur Full-Stack Symfony / React',
                    period: 'Juin 2024 - Octobre 2024',
                    highlights: [
                        'Conception et développement d\'un CRM sur mesure pour l\'association MA.FA.NA.',
                        'Mise en place des fonctionnalités clés : Gestion complète des membres, Suivi des événements, Gestion des cotisations et des dons, Communication interne, Reporting et tableaux de bord.',
                        'Développement avec Symfony 7 / API Platform et React – garantie de la sécurité, de la performance et de la maintenabilité de l\'application pour une utilisation fluide et fiable par l\'ensemble des membres de l\'association.'
                    ]
                },
                {
                    company: 'PRODEVSEO',
                    title: 'Stage en développement web',
                    period: 'Janvier 2024 - Avril 2024',
                    highlights: [
                        'Participation à la réalisation complète d\'un site e-commerce fonctionnel intégrant un processus de commande fluide, une gestion de stock en temps réel et une solution de paiement sécurisée.',
                        'Développement du back-end avec Symfony 7 : mise en place des API, gestion des utilisateurs, logique métier et sécurité.',
                        'Développement du front-end avec Angular : création d\'une interface utilisateur dynamique, réactive et intuitive pour une expérience d\'achat optimale.'
                    ]
                }
            ]
        }
    ];

    constructor(
        private _globalStates: GlobalStatsService,
    ) {
        this._globalStates.setCanonicalUrl(AppRoutes.CAREER);
    }
}
