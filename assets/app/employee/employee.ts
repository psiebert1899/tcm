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
    public projects ?: string[],
    public canManageEmployees ?: boolean,
    public canManageProjects ?: boolean,
    public hasManager ?: boolean,
    public projectManagerFor ?: string[],
    public _id ?: string
    ){}
}