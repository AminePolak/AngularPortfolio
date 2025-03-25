export class Portfolio {
    title!: string;
    image!: string;
    link!: string;
    githubLink?: string;
    description!: string;

    constructor(title: string, image: string, link: string, description: string) {
        this.title = title;
        this.image = image;
        this.link = link;
        this.description = description
    }
}