export class Experience {
    title!: string;
    date!: string;
    place!: string;
    description!: string;

    constructor(title: string, date: string, place: string, description: string) {
        this.title = title;
        this.date = date;
        this.place = place;
        this.description = description;
    }
}
