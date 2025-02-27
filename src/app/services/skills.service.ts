import { Injectable } from "@angular/core";
import { Skill } from "../models/skill";

@Injectable({
    providedIn: 'root'
})
export class skillsService{
    private skills: Skill[] = [
        new Skill("Html", 80),
        new Skill("css", 80),
        new Skill("C# / .net", 60),
        new Skill("Angular", 60),
        new Skill("Bootstrap", 75),
        new Skill("Javasgggcript", 60),
        new Skill("Git/Github", 60),
        new Skill("ddd/Github", 60),
        new Skill("ddd/Github", 60),
        new Skill("ddd/Github", 60),

    ];

    getSkills(): Skill[] {
        return [...this.skills];
    }
}