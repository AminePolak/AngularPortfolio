export class Skill{
    title: string;
    level: number;
    // id: string;

    constructor(title: string, level: number){
        this.title = title;
        this.level = level;
        // this.id = crypto.randomUUID().substring(0, 8);
    }
}