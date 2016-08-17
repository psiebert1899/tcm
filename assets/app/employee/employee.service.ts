                                                  import {Injectable, EventEmitter} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Employee} from "./employee";
import {Observable} from "rxjs/Rx";
import {Query} from "../utility/query";
@Injectable()
export class EmployeeService {
    popEmployee= new EventEmitter<Employee>();
    selectedEmployeeChanged = new EventEmitter<Employee>();
    selectedEmployee: Employee;
    constructor(private _http: Http) {}
    employees: Employee[];
    createUser(employee: Employee) {
        const body = JSON.stringify(employee);
        const headers = new Headers({"Content-Type" : "application/json"});
        return this._http.post("http://localhost:3000/employee", body, {headers: headers}).map(
            response => response.json()
        ).catch(error => Observable.throw(error.json()));
    }
    getEmployees(query: Query) {
        let querystring = "";
        if (query.value !== "") {
            querystring = "?type=" + query.type + "&value=" + query.value;
        }
        return this._http.get("http://localhost:3000/employee" + querystring).map(
            response => {
                const data = response.json().obj;
                let emps  = [];
                for (let i = 0 ; i < data.length; i++) {
                    let employee = new Employee(
                        data[i].email,
                        data[i].image,
                        data[i].firstName,
                        data[i].lastName,
                        data[i].phone,
                        data[i].country,
                        data[i].city,
                        data[i].state,
                        data[i].title,
                        data[i].division,
                        data[i].department,
                        data[i].manager
                    );
                    employee.employees = [];
                    for (let j = 0; j < data[i].employees.length; j++) {
                        employee.employees.push(data[i].employees[j]);
                    }
                    employee.projects = [];
                    for (let k = 0; k < data[i].projects.length; k++) {
                        employee.projects.push(data[i].projects[k]);
                    }
                    employee.skills = [];
                    for (let l = 0; l < data[i].skills.length; l++) {
                        employee.skills.push(data[i].skills[l]);
                    }
                    employee.trainings = [];
                    for (let l = 0; l < data[i].skills.length; l++) {
                        employee.trainings.push(data[i].trainings[l]);
                    }
                    employee._id = data[i]._id;
                    employee.canManageEmployees = data[i].canManageEmployees;
                    employee.canManageProjects = data[i].canManageProjects;
                    employee.hasManager = data[i].hasManager;
                    employee.trainings = data[i].trainings;
                        employee.skills = data[i].skills;
                    emps.push(employee);
                }
                return emps;
            }
        ).catch(error => Observable.throw(error.json()));
    }

    popEmployeeDetails(emp: Employee) {
        this.popEmployee.emit(emp);
    }
    selectEmployee(emp: Employee) {
        this.selectedEmployeeChanged.emit(emp);
        this.selectedEmployee = emp;
    }
}
