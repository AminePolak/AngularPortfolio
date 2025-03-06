import { Injectable } from "@angular/core";
import { Portfolio } from "../models/portfolio";

@Injectable({
    providedIn: 'root'
})
export class portfolioService {
    private portfolios: Portfolio[] = [
        new Portfolio("/pictures/portfolio/portfolio.jpg", "https://william-kowalinski.fr/", "Création de mon site perso-portfolio avec les les technologies HTML, CSS, responsivité en BOOTSTRAP, formulaire de contact en PHP et quelques fonctionnalités en JQUERY."),
        new Portfolio("/pictures/portfolio/marrakech.jpg", "https://aminepolak.github.io/Marrakech/", "Création de la structure d'un site. (HTML, CSS, BOOTSTRAP, JQUERY, PHP)."),
        new Portfolio("/pictures/portfolio/serpentin.jpg", "https://aminepolak.github.io/jeu_serpent/", "Projet 'Jeu du serpent' de la formation développeur web/javascript sur Udemy (John Taïeb). La totalité en JAVASCRIPT, puis migration vers ES6."),
        new Portfolio("/pictures/portfolio/quizz.jpg", "https://aminepolak.github.io/ProjetsJavascript-Quizz/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'un petit questionnaire dynamique avec certaines animations en Javascript."),
        new Portfolio("/pictures/portfolio/meteo.jpg", "https://aminepolak.github.io/AppMeteo/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'une application météo dynamique avec gestion de données pour les prévisions, avec géolocalisation, en javascript. Appel d'une API météo"),
        new Portfolio("/pictures/portfolio/portfolio.jpg", "https://william-kowalinski.fr/", "Création de mon site perso-portfolio avec les les technologies HTML, CSS, responsivité en BOOTSTRAP, formulaire de contact en PHP et quelques fonctionnalités en JQUERY."),
        new Portfolio("/pictures/portfolio/marrakech.jpg", "https://aminepolak.github.io/Marrakech/", "Création de la structure d'un site. (HTML, CSS, BOOTSTRAP, JQUERY, PHP)."),
        new Portfolio("/pictures/portfolio/serpentin.jpg", "https://aminepolak.github.io/jeu_serpent/", "Projet 'Jeu du serpent' de la formation développeur web/javascript sur Udemy (John Taïeb). La totalité en JAVASCRIPT, puis migration vers ES6."),
        new Portfolio("/pictures/portfolio/quizz.jpg", "https://aminepolak.github.io/ProjetsJavascript-Quizz/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'un petit questionnaire dynamique avec certaines animations en Javascript."),
        new Portfolio("/pictures/portfolio/meteo.jpg", "https://aminepolak.github.io/AppMeteo/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'une application météo dynamique avec gestion de données pour les prévisions, avec géolocalisation, en javascript. Appel d'une API météo")
    ]

    getPorfolios(): Portfolio[] {
        return [...this.portfolios]
    }
}