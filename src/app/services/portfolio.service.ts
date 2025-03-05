import { Injectable } from "@angular/core";
import { Portfolio } from "../models/portfolio";

@Injectable({
    providedIn: 'root'
})
export class portfolioService {
    private portfolios: Portfolio[] = [
        new Portfolio("/pictures/portfolio/portfolio.jpg", "https://william-kowalinski.fr/", "Création de mon site perso-portfolio avec les les technologies HTML, CSS, responsivité en BOOTSTRAP, formulaire de contact en PHP et quelques fonctionnalités en JQUERY."),
        new Portfolio("/pictures/portfolio/marrakech.jpg", "https://aminepolak.github.io/Marrakech/", "Création de la structure d'un site. (HTML, CSS, BOOTSTRAP, JQUERY, PHP)."),
        new Portfolio("/pictures/portfolio/serpentin.jpg", "https://aminepolak.github.io/jeu_serpent/", "Projet 'Jeu du serpent' de la formation développeur web/javascript sur Udemy (John Taïeb). La totalité en JAVASCRIPT, puis migration vers ES6.")
    ]

    getPorfolios(): Portfolio[] {
        return [...this.portfolios]
    }
}