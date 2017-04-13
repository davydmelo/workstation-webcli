export class User {

    id: number;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    email: string;

    constructor(i: number, fn: string, ln: string, un: string, p: string, e: string) {

        this.id = i;
        this.firstname = fn;
        this.lastname = ln;
        this.username = un;
        this.password = p;
        this.email = e;
    }
}
