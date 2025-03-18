import { Injectable } from "@angular/core";
import { Experience } from "../models/experience";

@Injectable({
    providedIn: 'root'
})
export class experienceService {
    private experiences: Experience[] = [
        new Experience("Projet personnel : Mon portfolio en Angular", "Février 2025 à mars 2025", "Indépendant", "Création de mon portfolio en Angular"),
        new Experience("Projet personnel : Application workout ", "Depuis février 2024", "Indépendant", "Création d'une application répertoriant les street workout de lyon : Ceception de la base de données en Sql, Création de l'architecture N-tiers, mise en place tu pattern Repository (UnitOfWork, DbContext), utilisation d'EntityFramework en database-first, Création du webservice avec WCF'"),
        new Experience("Développeur fullstack .net Angular", "Octobre 2021 à Novembre 2023", "Dtek Consulting", "Dans une équipe composé d'une dizaine de développeurs répartis sur un ensemble de 7 applications pour un client dans le domaine du transport : Développement frontend et backend, maintenance applicative, déploiement vers serveur distant, développement de composants dans librairie partagée, utilisation nuGet, support technique."),
        new Experience("Développeur Web", "Février 2020 à mars 2020", "FrenchWeb, Marrakech", "Création de la structure d'un site. (HTML, CSS, BOOTSTRAP, JQUERY, PHP)."),
        new Experience("Développeur Web", "Avril 2019 à Mai 2019", "Indépendant", "Création de mon site perso-portfolio avec les les technologies HTML, CSS, responsivité en BOOTSTRAP, formulaire de contact en PHP et quelques fonctionnalités en JQUERY. Hebergement et versionning sur Github"),
        new Experience("Comptable", "2006 à 2014", "Jean Delatour", "Tenue de la comptabilité générale de 6 magasins."),
        new Experience("Préparateur de commande", "2004 à 2006", "MGF", "Préparation de commande avec chariot élévateur (CACES 1).")
    ]

    getExperiences(): Experience[] {
        return [...this.experiences]
    }
}