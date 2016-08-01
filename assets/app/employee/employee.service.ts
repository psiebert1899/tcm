import {Injectable, EventEmitter} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Employee} from "./employee";
import {Observable} from "rxjs/Rx";
@Injectable()
export class EmployeeService{
    popEmployee=new EventEmitter<Employee>();
    selectedEmployeeChanged = new EventEmitter<Employee>();
    constructor(private _http:Http){}
    employees : Employee[];
    createUser(employee:Employee){
        console.log("service reached");
        const body = JSON.stringify(employee);
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this._http.post('http://localhost:3000/employee',body,{headers:headers}).map(
            response => response.json()
        ).catch(error => Observable.throw(error.json()))
    }
    getEmployees(){
        console.log("get Employees Route Reached");
        return this._http.get("http://localhost:3000/employee").map(
            response => {
                const data = response.json().obj;
                let emps  = [];
                for(let i = 0 ; i<data.length;i++){
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
                    employee.employees=[];
                    for(let j =0; j< data[i].employees.length;j++){
                        employee.employees.push(data[i].employees[j]);
                    }
                    employee.projects = [];
                    for(let k= 0; k<data[i].projects.length;k++){
                        employee.projects.push(data[i].projects[k]);
                    }
                    emps.push(employee);
                }
                return emps
            }
        ).catch(error => Observable.throw(error.json()))
    }
    popEmployeeDetails(emp : Employee){
        console.log("service reached");
        this.popEmployee.emit(emp);
    }
    selectEmployee(emp:Employee){
        this.selectedEmployeeChanged.emit(emp);
    }
}