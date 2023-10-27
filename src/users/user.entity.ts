export class User{
    lastname?: string;
    firstname?: string;
    id!: number;
    age?: number
    constructor(id:number, ln:string, fn:string, age:number){
        this.id = id;
        this.lastname = ln;
        this.firstname = fn;
        this.age = age;
    }
}