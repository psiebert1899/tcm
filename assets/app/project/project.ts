import {Employee} from "../employee/employee";
export class Project{
    constructor(
       public organization : string,
       public name:string,
       public image:string,
       public manager : Employee,
       public _id ?: string
    ){}
}