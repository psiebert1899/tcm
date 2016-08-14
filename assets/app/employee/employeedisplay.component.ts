import {Component, Input, EventEmitter, Output} from "@angular/core";
import {Employee} from "./employee";
import {EmployeeService} from "./employee.service";
import {ErrorService} from "../errors/error.service";
@Component({
    selector: 'my-employee-display',
    template:`
        <div class="col-md-2">
            <div class="thumbnail">
                <img src="{{employee.image}}" class="img img-responsive"/>
                <h3>{{employee.firstName + " " + employee.lastName}}</h3>
                <h5>{{employee?.division +","+employee?.department}}</h5>
            </div>
        </div>
    `,
    styles:[`
        h3{
            text-align:center;
        }
        h5{
            text-align:center;
        }
    `]
})
export class EmployeeDisplayComponent{
@Input() employee: Employee;
    @Output() expand = new EventEmitter<Employee>();
    constructor(private _employeeService: EmployeeService,private errorService: ErrorService){
    }
}