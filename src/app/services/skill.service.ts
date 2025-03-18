import { Injectable } from "@angular/core";
import { Skill } from "../models/skill";

@Injectable({
    providedIn: 'root'
})
export class skillService{
    private skills: Skill[] = [
        new Skill("Html", 80),
        new Skill("css", 80),
        new Skill("Bootstrap", 80),
        new Skill("Angular", 70),
        new Skill("Javascript / Typescript", 60),
        new Skill("C# / .net", 60),
        new Skill("Sql / Sql Server", 40),
        new Skill("Git / Tortoise Git", 70),
    ];

    getSkills(): Skill[] {
        return [...this.skills];
    }
}