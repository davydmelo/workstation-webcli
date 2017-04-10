export class User
{
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    password: string;

    constructor(i: number, fn: string, ln: string, un: string, p: string)
    {
        this.id = i;
        this.firstname = fn;
        this.lastname = ln;
        this.username = un;
        this.password = p;
    }
}