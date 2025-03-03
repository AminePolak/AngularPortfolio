import { Injectable } from "@angular/core";
import { Formation } from "../models/formation";

@Injectable({
    providedIn: 'root'
})
export class formationService {
    private formations: Formation[] = [
        new Formation("Formation Udemy (by John Taïeb)", "Mars 2019 à aujourd'hui", "En autodidacte", "Lyon",
            "Formation complète développeur web"),
        new Formation("Certification Coder et déployer des applications web simple", "Janvier 2019 à mars 2019", "Simplon", "Ile de la Réunion",
            "Formation développeur web : HTML, CSS, Bootstrap, Javascript, Jquery, PHP, phpMyAdmin,Laravel, Méthode Agile"),
        new Formation("Certification Opquast", "Février 2019", "Simplon", "Ile de la Réunion",
            "Connaissance des fondamentaux des bonnes pratiques qualité Web et des termes du Web. Capacités suffisantes pour comprendre les autres professionnels du Web."),
        new Formation("Formation Développeur Web", "Août 2018 à décembre 2018", "Autodidacte", "Ile de la Réunion",
            "Apprentissage du  HTML / CSS sur les sites Pierre-Giraud.com, Udemy et OpenClassRoom."),
        new Formation("CRPE", "2014 à 2016", "ESPE - Ecole supérieur du professorat et de l'éducation", "Ile de la Réunion",
            "Préparation au concours de recrutement de professeur des écoles"),
        new Formation("BTS assistant de gestion PME-PMI", "2002 à 2004", "Lycée Philibert Delorme", "L'Isle d'Abeau"),
        new Formation("BAC STT comptabilité-Gestion", "1999 à 2002", "Lycée Philibert Delorme", "L'Isle d'Abeau"),
    ];

    getFormations(): Formation[] {
        return [...this.formations];
    }
}