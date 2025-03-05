import { Injectable } from "@angular/core";
import { Experience } from "../models/experience";

@Injectable({
    providedIn: 'root'
})
export class experienceService {
    private experiences: Experience[] = [
        new Experience("Développeur web", "Avril 2020 à juin 2020", "Indépendant", "Projet 'Jeu du serpent' de la formation développeur web sur Udemy (John Taîeb). La totalité en javascript, puis migration vers ES6"),
        new Experience("Développeur Web", "Février 2020 à mars 2020", "FrenchWeb, Marrakech", "Création de la structure d'un site. (HTML, CSS, BOOTSTRAP, JQUERY, PHP)."),
        new Experience("Développeur Web", "Avril 2019 à Mai 2019", "Indépendant", "Création de mon site perso-portfolio avec les les technologies HTML, CSS, responsivité en BOOTSTRAP, formulaire de contact en PHP et quelques fonctionnalités en JQUERY."),
        new Experience("Comptable", "2006 à 2014", "Jean Delatour", "Tenue de la comptabilité générale de 6 magasins."),
        new Experience("Préparateur de commande", "2004 à 2006", "MGF", "Préparation de commande avec chariot élévateur (CACES 1).")
    ]

    getExperiences(): Experience[] {
        return [...this.experiences]
    }
}