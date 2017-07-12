export class Ticket {

    id: number;
    title: string;
    description: string;
    
    constructor(i: number, t: string, d: string) {
        this.id = i;
        this.title = t;
        this.description = d;        
    }
}
