export class Formation {
    title!: string;
    date!: String;
    place!: string;
    city!: string;
    description?: string;

    constructor(title: string, date: String, place: string, city: string, description?: string){
        this.title = title;
        this.date = date;
        this.place = place;
        this.city = city;
        this.description = description;
    }
}