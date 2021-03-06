import {Skill} from "../skills/skill";
import {Training} from "../training/training";
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
    public canManageEmployees ?: boolean,
    public canManageProjects ?: boolean,
    public hasManager ?: boolean,
    public manager ?:string,
    public employees ?: string[],
    public projects ?: string[],
    public projectManagerFor ?: string[],
    public trainings ?: Training[],
    public skills ?: Skill[],
    public _id ?: string
    ){}
}