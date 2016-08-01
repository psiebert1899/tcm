export class Employee{
    constructor(
    public email:string,
    public image:string,
    public firstName:string,
    public lastName:string,
    public phone:string,
    public country:string,
    public city:string,
    public state ?:string,
    public title ?:string,
    public division ?:string,
    public department ?:string,
    public manager ?:string,
    public employees ?: string[],
    public projects ?: string[]
    ){}
}