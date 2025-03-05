export class Portfolio {
    image!: string;
    link!: string;
    githubLink?: string;
    description!: string;

    constructor(image: string, link: string, description: string) {
        this.image = image;
        this.link = link;
        this.description = description
    }
}