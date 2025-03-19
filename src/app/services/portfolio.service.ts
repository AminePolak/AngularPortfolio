import { Injectable } from "@angular/core";
import { Portfolio } from "../models/portfolio";

@Injectable({
    providedIn: 'root'
})
export class portfolioService {
    private portfolios: Portfolio[] = [
        new Portfolio("pictures/portfolio/portfolio.jpg", "https://william-kowalinski.fr/", "Création de mon site perso-portfolio en Angular 19. Utilisation Boostrap 5, MailJs"),
        new Portfolio("pictures/portfolio/marrakech.jpg", "https://aminepolak.github.io/Marrakech/", "Création de la structure d'un site. (HTML, CSS, BOOTSTRAP, JQUERY, PHP)."),
        new Portfolio("pictures/portfolio/portfolio.jpg", "https://william-kowalinski.fr/", "Création de mon site perso-portfolio avec les les technologies HTML, CSS, responsivité en BOOTSTRAP, formulaire de contact en PHP et quelques fonctionnalités en JQUERY."),
        new Portfolio("pictures/portfolio/serpentin.jpg", "https://aminepolak.github.io/jeu_serpent/", "Projet 'Jeu du serpent' de la formation développeur web/javascript sur Udemy (John Taïeb). La totalité en JAVASCRIPT, puis migration vers ES6."),
        new Portfolio("pictures/portfolio/quizz.jpg", "https://aminepolak.github.io/ProjetsJavascript-Quizz/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'un petit questionnaire dynamique avec certaines animations en Javascript."),
        new Portfolio("pictures/portfolio/meteo.jpg", "https://aminepolak.github.io/AppMeteo/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'une application météo dynamique avec gestion de données pour les prévisions, avec géolocalisation, en javascript. Appel d'une API météo"),
        new Portfolio("pictures/portfolio/pokedex.jpg", "https://aminepolak.github.io/Pokedex/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'une application Pokedex en javascript, avec appel d'API, scroll infini, manipulation de DOM, moteur de recherche."),
        new Portfolio("pictures/portfolio/toDoList.jpg", "https://aminepolak.github.io/ToDoListJs/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'une application To Do List en javascript."),
        new Portfolio("pictures/portfolio/pomodoro.jpg", "https://aminepolak.github.io/Pomodoro/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'une application Pomodoro en javascript, avec des timers."),
        new Portfolio("pictures/portfolio/colorJS.jpg", "https://aminepolak.github.io/Generateur-Degrade-Couleur/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'une application JS Generateur de dégradé de couleur."),
        new Portfolio("pictures/portfolio/validForm.jpg", "https://aminepolak.github.io/ValidationForm/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'un formulaire avec validation d'inscription pour nom d'utilisateur, mail valide et 'force' de mot de passe. Langage Javascript, utilisation de Regex."),
        new Portfolio("pictures/portfolio/MemoryCardGame.jpg", "https://aminepolak.github.io/MemoryCardGame/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'un jeu de carte de mémoire en JS."),
        new Portfolio("pictures/portfolio/githubAPI.jpg", "https://aminepolak.github.io/GithubApi/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'une application de recherche de profil Github en javascript. Avec appel d'une API Github, création d'un template HTML dans le JS."),
        new Portfolio("pictures/authSystem.jpg", "https://aminepolak.github.io/AuthSystem/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'un système d'authentification en Js avec Firebase, base de donnée Cloud Firestore. Modale Inscription / Connexion."),
        new Portfolio("pictures/portfolio/Drag&Drop.jpg", "https://aminepolak.github.io/Drag-Drop/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'un slider en Javascript."),
        new Portfolio("pictures/portfolio/particuleJs.jpg", "https://aminepolak.github.io/ParticuleJS/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'une animation de particule en Javascript. Utilisation de canvas, d'objet, récursion."),
        new Portfolio("pictures/portfolio/typingGame.jpg", "https://aminepolak.github.io/TypingGame/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'un petit jeu de vitesse d'écriture en Javascript. Appel d'API pour un text random."),
        new Portfolio("pictures/portfolio/spaceInvader.jpg", "https://aminepolak.github.io/SpaceInvaders/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'un petit jeu Space Invader en Javascript."),
        new Portfolio("pictures/portfolio/customLecteurVideo.jpg", "https://aminepolak.github.io/CustomLecteurVideo/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Customisation d'un lecteur vidéo avec Javascript."),
        new Portfolio("pictures/portfolio/casseBriques.jpg", "https://aminepolak.github.io/CasseBriques/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'un petit jeu Casse Brique en Javascript."),
        new Portfolio("pictures/portfolio/morpion.jpg", "https://aminepolak.github.io/JeuDuMorpion/", "Formation '20 Projets en Javascript' de Enzo Ustariz sur la plateform Udemy. Création d'un petit jeu du Morpion en Javascript.")
    ]

    getPorfolios(): Portfolio[] {
        return [...this.portfolios]
    }
}