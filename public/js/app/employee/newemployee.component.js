"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var error_service_1 = require("../errors/error.service");
var employee_service_1 = require("./employee.service");
var common_1 = require("@angular/common");
var accordiongroup_component_1 = require("../utility/accordiongroup.component");
var accordion_component_1 = require("../utility/accordion.component");
var employee_1 = require("./employee");
var NewEmployeeComponent = (function () {
    function NewEmployeeComponent(_fb, _employeeService, _errorService) {
        this._fb = _fb;
        this._employeeService = _employeeService;
        this._errorService = _errorService;
        this.country = '';
        this.canManageEmployees = false;
        this.canManageProjects = false;
        this.hasManager = false;
        this.managers = [];
    }
    NewEmployeeComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            firstName: ['', common_1.Validators.required],
            lastName: ['', common_1.Validators.required],
            email: ['', common_1.Validators.compose([
                    common_1.Validators.required,
                    this.isEmail
                ])],
            phone: ['', common_1.Validators.required],
            country: ['', common_1.Validators.required],
            city: ['', common_1.Validators.required],
            state: [''],
            title: [''],
            division: [''],
            department: [''],
            projects: [''],
            employees: [''],
            manager: [''],
            hasManager: [''],
            canManageEmployees: [''],
            canManageProjects: [''],
            projectManagerFor: ['']
        });
    };
    NewEmployeeComponent.prototype.onCountryChange = function (val) {
        this.country = val;
        console.log(val);
    };
    NewEmployeeComponent.prototype.onSubmit = function () {
        console.log('submitted');
        var employee = new employee_1.Employee(this.myForm.value.email, null, this.myForm.value.firstName, this.myForm.value.lastName, this.myForm.value.phone, this.myForm.value.country, this.myForm.value.city, this.myForm.value.state, this.myForm.value.title, this.myForm.value.division, this.myForm.value.department, this.myForm.value.manager, this.myForm.value.employees, this.myForm.value.projects, this.myForm.value.canManageEmployees, this.myForm.value.canManageProjects, this.myForm.value.hasManager, this.myForm.value.projectManagerFor);
        console.log(employee);
        this._employeeService.createUser(employee).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    NewEmployeeComponent.prototype.handleRadioChange = function (value, forField) {
        if (forField == "canManageEmployees") {
            this.canManageEmployees = value;
        }
        if (forField == "canManageProjects") {
            this.canManageProjects = value;
        }
        if (forField == "hasManager") {
            this.hasManager = value;
        }
    };
    NewEmployeeComponent.prototype.isEmail = function (control) {
        if (!control.value.match("[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?")) {
            return { invalidMail: true };
        }
    };
    NewEmployeeComponent = __decorate([
        core_1.Component({
            selector: "my-new-employee",
            template: "\n        <h1>New Employee</h1>\n        <div class=\"col-md-12\">\n        <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n            <accordion>\n                <accordion-group heading=\"Required\" isOpen=\"true\">\n                <div class=\"left-form\">\n                    <div class=\"form-group\">\n                        <label for=\"firstName\">First Name:</label>\n                        <input type=\"text\" [ngFormControl]=\"myForm.find('firstName')\" id=\"firstName\" class=\"form-control\"/>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"lastName\">Last Name:</label>\n                        <input type=\"text\" [ngFormControl]=\"myForm.find('lastName')\" id=\"lastName\" class=\"form-control\"/>\n                    </div>\n                    <!--Still need to add image uploading capability-->\n                    <div class=\"form-group\">\n                        <label for=\"email\">Email</label>\n                        <input type=\"email\" [ngFormControl]=\"myForm.find('email')\" id=\"email\" class=\"form-control\"/>\n                    </div>\n                </div>\n                <div class=\"right-form\">\n                    <div class=\"form-group\">\n                        <label for=\"phone\">Phone:</label>\n                        <input type=\"text\" [ngFormControl]=\"myForm.find('phone')\" id=\"phone\" class=\"form-control\"/>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"country\">Country</label>\n                        <select [ngFormControl]=\"myForm.find('country')\" id=\"country\" #t (change)=\"onCountryChange(t.value)\" class=\"form-control\">\n                            <option>USA</option>\n                            <option>Italy</option>\n                            <option>Brazil</option>\n                        </select>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"city\">City</label>\n                        <input type=\"text\" [ngFormControl]=\"myForm.find('city')\" id=\"city\" class=\"form-control\"/>\n                    </div>\n                    <div class=\"form-group\" *ngIf=\"country!='' && country=='USA'\">\n                        <label for=\"state\">State:</label>\n                        <select [ngFormControl]=\"myForm.find('state')\" id=\"state\" class=\"form-control\">\n                            <option>Illinois</option>\n                            <option>Michigan</option>\n                            <option>North Carolina</option>\n                            <option>Washington</option>\n                            <option>Florida</option>\n                        </select>\n                    </div>\n                </div>\n                </accordion-group>\n                <accordion-group heading=\"Employee Data (optional)\">\n                    <div class=\"col-one\">\n                        <div class=\"form-group\">\n                            <label for=\"title\">Title:</label>\n                            <select id=\"title\" [ngFormControl]=\"myForm.find('title')\" class=\"form-control\">\n                                <option>Analyst A1</option>\n                                <option>Analyst A2</option>\n                                <option>Consultant C1</option>\n                                <option>Manager</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Has Direct Supervisor?</label>\n                            <div class=\"radio-inline\">\n                                <label><input type=\"radio\" name=\"hasManager\" value=\"true\" [ngFormControl]=\"myForm.find('hasManager')\" (click)=\"handleRadioChange(true,'hasManager')\"/>Yes</label>\n                            </div>\n                            <div class=\"radio-inline\">\n                                <label><input type=\"radio\" name=\"hasManager\" value=\"false\" checked [ngFormControl]=\"myForm.find('hasManager')\" (click)=\"handleRadioChange(false,'hasManager')\"/>No</label>\n                            </div>\n                        </div>\n                        <div class=\"form-group\" *ngIf=\"hasManager\">\n                            <label for=\"Manager\">Manager</label>\n                            <select id=\"manager\" [ngFormControl]=\"myForm.find('manager')\" class=\"form-control\" size=\"4\">\n                                <option>Unassigned</option>\n                                <option>David Kaparis</option>\n                                <option>Ettore Soldi</option>\n                                <option>Jason McDonald</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-two\">\n                        <div class=\"form-group\">\n                            <label for=\"division\">Division</label>\n                            <select id=\"division\" [ngFormControl]=\"myForm.find('division')\" class=\"form-control\">\n                                <option>Hyla Soft USA</option>\n                                <option>Hyla Soft Italy</option>\n                                <option>Hyla soft Brazil</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group\">\n                        <label>Manages Others?</label>\n                            <div class=\"radio-inline\">\n                                <label><input type=\"radio\" name=\"canManageEmployees\" value=\"true\" [ngFormControl]=\"myForm.find('canManageEmployees')\"(click)=\"handleRadioChange(true,'canManageEmployees')\"/>Yes</label>\n                            </div>\n                            <div class=\"radio-inline\">\n                                <label><input type=\"radio\" name=\"canManageEmployees\" value=\"false\" [ngFormControl]=\"myForm.find('canManageEmployees')\"  (click)=\"handleRadioChange(false,'canManageEmployees')\" checked/>No</label>\n                            </div>\n                        </div>\n                        <div class=\"form-group\" *ngIf=\"canManageEmployees\">\n                            <label for=\"employees\">Employees</label>\n                            <select id=\"employees\" [ngFormControl]=\"myForm.find('employees')\" multiple class=\"form-control\">\n                                <option>Paul Siebert</option>\n                                <option>Casey Townsend</option>\n                                <option>Jon Netzky</option>\n                                <option>Dario Casula</option>\n                                <option>Logan Habben</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-three\">\n                        <div class=\"form-group\">\n                            <label for=\"department\">Department</label>\n                            <select id=\"department\" [ngFormControl]=\"myForm.find('department')\" class=\"form-control\">\n                                <option>Software</option>\n                                <option>PLM</option>\n                                <option>MES</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>Manages Projects?</label>\n                            <div class=\"radio-inline\">\n                                <label><input type=\"radio\" name=\"canManageProjects\" [ngFormControl]=\"myForm.find('canManageProjects')\" (click)=\"handleRadioChange(true,'canManageProjects')\" value=\"true\"/>Yes</label>\n                            </div>\n                            <div class=\"radio-inline\">\n                                <label><input type=\"radio\" name=\"canManageProjects\" value=\"false\" [ngFormControl]=\"myForm.find('canManageProjects')\"(click)=\"handleRadioChange(false,'canManageProjects')\" checked/>No</label>\n                            </div>\n                        </div>\n                        <div class=\"form-group\" *ngIf=\"canManageProjects\">\n                            <label for=\"projects\">Project Manager For:</label>\n                            <select id=\"projects\" [ngFormControl]=\"myForm.find('projectManagerFor')\" multiple class=\"form-control\">\n                                <option>Kuka</option>\n                                <option>Monsanto</option>\n                                <option>Williams</option>\n                            </select>\n                        </div>\n                    </div>\n                </accordion-group>\n                <accordion-group heading=\"Resume (optional)\"><h1>Resume Upload Capability & skills section</h1></accordion-group>\n                <accordion-group heading=\"Training (optional)\"><h1>Training and Info</h1></accordion-group>\n                <accordion-group heading=\"Benefits (optional)\"><h1>Benefits information</h1></accordion-group>\n            </accordion>\n            <button type=\"submit\" class=\"btn btn-primary btn-lg center-block\">Submit</button>\n        </form>\n        </div>\n    ",
            providers: [employee_service_1.EmployeeService],
            directives: [accordion_component_1.AccordionComponent, accordiongroup_component_1.AccordionComponentGroup],
            styles: ["\n        .left-form{\n            float:left;\n            width:49%;\n        }\n        .right-form{\n            float:right;\n            width:49%;\n        }\n        .col-one{\n            float:left;\n            width:33%;\n        }\n        .col-two{\n            float:left;\n            width:30%;\n            margin-right:2%;\n            margin-left:2%;\n        }\n        .col-three{\n            float:left;\n            width:33%;\n        }\n        h1{\n            color:white;\n            font-family:OpenSans;\n        }\n        .btn{\n            width:100%;\n            border-radius:0;\n            border-bottom-left-radius: 5px;\n            border-bottom-right-radius: 5px;\n        }\n        .col-md-12{\n            background-color:white;\n            border-radius:5px;\n            padding:0;\n\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, employee_service_1.EmployeeService, error_service_1.ErrorService])
    ], NewEmployeeComponent);
    return NewEmployeeComponent;
}());
exports.NewEmployeeComponent = NewEmployeeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL25ld2VtcGxveWVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3JELGlDQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELHVCQUE2RCxpQkFBaUIsQ0FBQyxDQUFBO0FBQy9FLHlDQUFzQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQzVFLG9DQUFpQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2xFLHlCQUF1QixZQUFZLENBQUMsQ0FBQTtBQStMcEM7SUFPSSw4QkFBb0IsR0FBZSxFQUFTLGdCQUFnQyxFQUFTLGFBQTRCO1FBQTdGLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBUyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWdCO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFMakgsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNsQix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0Isc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsYUFBUSxHQUFjLEVBQUUsQ0FBQztJQUMwRixDQUFDO0lBQ3BILHVDQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLFNBQVMsRUFBQyxDQUFDLEVBQUUsRUFBQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNsQyxRQUFRLEVBQUMsQ0FBQyxFQUFFLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFDakMsS0FBSyxFQUFDLENBQUMsRUFBRSxFQUFDLG1CQUFVLENBQUMsT0FBTyxDQUFDO29CQUN6QixtQkFBVSxDQUFDLFFBQVE7b0JBQ25CLElBQUksQ0FBQyxPQUFPO2lCQUNmLENBQUMsQ0FBQztZQUNILEtBQUssRUFBQyxDQUFDLEVBQUUsRUFBQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUM5QixPQUFPLEVBQUMsQ0FBQyxFQUFFLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFDaEMsSUFBSSxFQUFDLENBQUMsRUFBRSxFQUFDLG1CQUFVLENBQUMsUUFBUSxDQUFDO1lBQzdCLEtBQUssRUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNWLEtBQUssRUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNWLFFBQVEsRUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNiLFVBQVUsRUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNmLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNkLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNmLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNiLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNoQixrQkFBa0IsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUN4QixpQkFBaUIsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUN2QixpQkFBaUIsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUMxQixDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0QsOENBQWUsR0FBZixVQUFnQixHQUFHO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBQyxHQUFHLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsdUNBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsSUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQ3ZCLElBQUksRUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBRXRDLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUNoRCxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQTtJQUNMLENBQUM7SUFDRCxnREFBaUIsR0FBakIsVUFBa0IsS0FBSyxFQUFDLFFBQVE7UUFDNUIsRUFBRSxDQUFBLENBQUMsUUFBUSxJQUFFLG9CQUFvQixDQUFDLENBQUEsQ0FBQztZQUMvQixJQUFJLENBQUMsa0JBQWtCLEdBQUMsS0FBSyxDQUFDO1FBQ2xDLENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxRQUFRLElBQUUsbUJBQW1CLENBQUMsQ0FBQSxDQUFDO1lBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBQyxLQUFLLENBQUM7UUFDakMsQ0FBQztRQUNELEVBQUUsQ0FBQSxDQUFDLFFBQVEsSUFBRSxZQUFZLENBQUMsQ0FBQSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUMsS0FBSyxDQUFDO1FBQzFCLENBQUM7SUFDTCxDQUFDO0lBQ08sc0NBQU8sR0FBZixVQUFnQixPQUFpQjtRQUM3QixFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLDZQQUE2UCxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3BSLE1BQU0sQ0FBQyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsQ0FBQTtRQUM3QixDQUFDO0lBQ0wsQ0FBQztJQS9RTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBQyxrdlNBZ0pSO1lBQ0QsU0FBUyxFQUFDLENBQUMsa0NBQWUsQ0FBQztZQUMzQixVQUFVLEVBQUMsQ0FBQyx3Q0FBa0IsRUFBQyxrREFBdUIsQ0FBQztZQUN2RCxNQUFNLEVBQUMsQ0FBQyxzMUJBdUNQLENBQUM7U0FDTCxDQUFDOzs0QkFBQTtJQW9GRiwyQkFBQztBQUFELENBbkZBLEFBbUZDLElBQUE7QUFuRlksNEJBQW9CLHVCQW1GaEMsQ0FBQSIsImZpbGUiOiJlbXBsb3llZS9uZXdlbXBsb3llZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RW1wbG95ZWVTZXJ2aWNlfSBmcm9tIFwiLi9lbXBsb3llZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgVmFsaWRhdG9ycywgQ29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge0FjY29yZGlvbkNvbXBvbmVudEdyb3VwfSBmcm9tIFwiLi4vdXRpbGl0eS9hY2NvcmRpb25ncm91cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtBY2NvcmRpb25Db21wb25lbnR9IGZyb20gXCIuLi91dGlsaXR5L2FjY29yZGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtFbXBsb3llZX0gZnJvbSBcIi4vZW1wbG95ZWVcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1uZXctZW1wbG95ZWVcIixcclxuICAgIHRlbXBsYXRlOmBcclxuICAgICAgICA8aDE+TmV3IEVtcGxveWVlPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XHJcbiAgICAgICAgICAgIDxhY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XCJSZXF1aXJlZFwiIGlzT3Blbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlyc3ROYW1lXCI+Rmlyc3QgTmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnZmlyc3ROYW1lJylcIiBpZD1cImZpcnN0TmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0TmFtZVwiPkxhc3QgTmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnbGFzdE5hbWUnKVwiIGlkPVwibGFzdE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tU3RpbGwgbmVlZCB0byBhZGQgaW1hZ2UgdXBsb2FkaW5nIGNhcGFiaWxpdHktLT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnZW1haWwnKVwiIGlkPVwiZW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGhvbmVcIj5QaG9uZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgncGhvbmUnKVwiIGlkPVwicGhvbmVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY291bnRyeVwiPkNvdW50cnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdjb3VudHJ5JylcIiBpZD1cImNvdW50cnlcIiAjdCAoY2hhbmdlKT1cIm9uQ291bnRyeUNoYW5nZSh0LnZhbHVlKVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlVTQTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5JdGFseTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5CcmF6aWw8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj5DaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2NpdHknKVwiIGlkPVwiY2l0eVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgKm5nSWY9XCJjb3VudHJ5IT0nJyAmJiBjb3VudHJ5PT0nVVNBJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3RhdGVcIj5TdGF0ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdzdGF0ZScpXCIgaWQ9XCJzdGF0ZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPklsbGlub2lzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk1pY2hpZ2FuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk5vcnRoIENhcm9saW5hPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPldhc2hpbmd0b248L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+RmxvcmlkYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hY2NvcmRpb24tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XCJFbXBsb3llZSBEYXRhIChvcHRpb25hbClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJ0aXRsZVwiIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCd0aXRsZScpXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkFuYWx5c3QgQTE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkFuYWx5c3QgQTI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkNvbnN1bHRhbnQgQzE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk1hbmFnZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5IYXMgRGlyZWN0IFN1cGVydmlzb3I/PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJoYXNNYW5hZ2VyXCIgdmFsdWU9XCJ0cnVlXCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2hhc01hbmFnZXInKVwiIChjbGljayk9XCJoYW5kbGVSYWRpb0NoYW5nZSh0cnVlLCdoYXNNYW5hZ2VyJylcIi8+WWVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImhhc01hbmFnZXJcIiB2YWx1ZT1cImZhbHNlXCIgY2hlY2tlZCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnaGFzTWFuYWdlcicpXCIgKGNsaWNrKT1cImhhbmRsZVJhZGlvQ2hhbmdlKGZhbHNlLCdoYXNNYW5hZ2VyJylcIi8+Tm88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiICpuZ0lmPVwiaGFzTWFuYWdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIk1hbmFnZXJcIj5NYW5hZ2VyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtYW5hZ2VyXCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ21hbmFnZXInKVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgc2l6ZT1cIjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlVuYXNzaWduZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkRhdmlkIEthcGFyaXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkV0dG9yZSBTb2xkaTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SmFzb24gTWNEb25hbGQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXR3b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRpdmlzaW9uXCI+RGl2aXNpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImRpdmlzaW9uXCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2RpdmlzaW9uJylcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SHlsYSBTb2Z0IFVTQTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+SHlsYSBTb2Z0IEl0YWx5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5IeWxhIHNvZnQgQnJhemlsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYW5hZ2VzIE90aGVycz88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNhbk1hbmFnZUVtcGxveWVlc1wiIHZhbHVlPVwidHJ1ZVwiIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdjYW5NYW5hZ2VFbXBsb3llZXMnKVwiKGNsaWNrKT1cImhhbmRsZVJhZGlvQ2hhbmdlKHRydWUsJ2Nhbk1hbmFnZUVtcGxveWVlcycpXCIvPlllczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpby1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjYW5NYW5hZ2VFbXBsb3llZXNcIiB2YWx1ZT1cImZhbHNlXCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2Nhbk1hbmFnZUVtcGxveWVlcycpXCIgIChjbGljayk9XCJoYW5kbGVSYWRpb0NoYW5nZShmYWxzZSwnY2FuTWFuYWdlRW1wbG95ZWVzJylcIiBjaGVja2VkLz5ObzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgKm5nSWY9XCJjYW5NYW5hZ2VFbXBsb3llZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbXBsb3llZXNcIj5FbXBsb3llZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImVtcGxveWVlc1wiIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdlbXBsb3llZXMnKVwiIG11bHRpcGxlIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5QYXVsIFNpZWJlcnQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkNhc2V5IFRvd25zZW5kPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Kb24gTmV0emt5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5EYXJpbyBDYXN1bGE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkxvZ2FuIEhhYmJlbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtdGhyZWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXBhcnRtZW50XCI+RGVwYXJ0bWVudDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiZGVwYXJ0bWVudFwiIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdkZXBhcnRtZW50JylcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+U29mdHdhcmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlBMTTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+TUVTPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWFuYWdlcyBQcm9qZWN0cz88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNhbk1hbmFnZVByb2plY3RzXCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2Nhbk1hbmFnZVByb2plY3RzJylcIiAoY2xpY2spPVwiaGFuZGxlUmFkaW9DaGFuZ2UodHJ1ZSwnY2FuTWFuYWdlUHJvamVjdHMnKVwiIHZhbHVlPVwidHJ1ZVwiLz5ZZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW8taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2FuTWFuYWdlUHJvamVjdHNcIiB2YWx1ZT1cImZhbHNlXCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2Nhbk1hbmFnZVByb2plY3RzJylcIihjbGljayk9XCJoYW5kbGVSYWRpb0NoYW5nZShmYWxzZSwnY2FuTWFuYWdlUHJvamVjdHMnKVwiIGNoZWNrZWQvPk5vPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiAqbmdJZj1cImNhbk1hbmFnZVByb2plY3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJvamVjdHNcIj5Qcm9qZWN0IE1hbmFnZXIgRm9yOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwicHJvamVjdHNcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgncHJvamVjdE1hbmFnZXJGb3InKVwiIG11bHRpcGxlIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5LdWthPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Nb25zYW50bzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+V2lsbGlhbXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVwiUmVzdW1lIChvcHRpb25hbClcIj48aDE+UmVzdW1lIFVwbG9hZCBDYXBhYmlsaXR5ICYgc2tpbGxzIHNlY3Rpb248L2gxPjwvYWNjb3JkaW9uLWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVwiVHJhaW5pbmcgKG9wdGlvbmFsKVwiPjxoMT5UcmFpbmluZyBhbmQgSW5mbzwvaDE+PC9hY2NvcmRpb24tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XCJCZW5lZml0cyAob3B0aW9uYWwpXCI+PGgxPkJlbmVmaXRzIGluZm9ybWF0aW9uPC9oMT48L2FjY29yZGlvbi1ncm91cD5cclxuICAgICAgICAgICAgPC9hY2NvcmRpb24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZyBjZW50ZXItYmxvY2tcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgcHJvdmlkZXJzOltFbXBsb3llZVNlcnZpY2VdLFxyXG4gICAgZGlyZWN0aXZlczpbQWNjb3JkaW9uQ29tcG9uZW50LEFjY29yZGlvbkNvbXBvbmVudEdyb3VwXSxcclxuICAgIHN0eWxlczpbYFxyXG4gICAgICAgIC5sZWZ0LWZvcm17XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOjQ5JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0LWZvcm17XHJcbiAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICAgICAgICB3aWR0aDo0OSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtb25le1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDozMyU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtdHdve1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDozMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDoyJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MiU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtdGhyZWV7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOjMzJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDF7XHJcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTpPcGVuU2FucztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bntcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czowO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtbWQtMTJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcblxyXG4gICAgICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXdFbXBsb3llZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIG15Rm9ybTpDb250cm9sR3JvdXA7XHJcbiAgICBjb3VudHJ5OlN0cmluZz0nJztcclxuICAgIGNhbk1hbmFnZUVtcGxveWVlcyA9IGZhbHNlO1xyXG4gICAgY2FuTWFuYWdlUHJvamVjdHMgPSBmYWxzZTtcclxuICAgIGhhc01hbmFnZXIgPSBmYWxzZTtcclxuICAgIG1hbmFnZXJzOkVtcGxveWVlW10gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOkZvcm1CdWlsZGVyLHByaXZhdGUgX2VtcGxveWVlU2VydmljZTpFbXBsb3llZVNlcnZpY2UscHJpdmF0ZSBfZXJyb3JTZXJ2aWNlIDogRXJyb3JTZXJ2aWNlKXt9XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubXlGb3JtPXRoaXMuX2ZiLmdyb3VwKHtcclxuICAgICAgICAgICAgZmlyc3ROYW1lOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6WycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBlbWFpbDpbJycsVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRW1haWxcclxuICAgICAgICAgICAgXSldLFxyXG4gICAgICAgICAgICBwaG9uZTpbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGNvdW50cnk6WycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBjaXR5OlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgc3RhdGU6WycnXSxcclxuICAgICAgICAgICAgdGl0bGU6WycnXSxcclxuICAgICAgICAgICAgZGl2aXNpb246WycnXSxcclxuICAgICAgICAgICAgZGVwYXJ0bWVudDpbJyddLFxyXG4gICAgICAgICAgICBwcm9qZWN0czogWycnXSxcclxuICAgICAgICAgICAgZW1wbG95ZWVzOiBbJyddLFxyXG4gICAgICAgICAgICBtYW5hZ2VyOiBbJyddLFxyXG4gICAgICAgICAgICBoYXNNYW5hZ2VyOiBbJyddLFxyXG4gICAgICAgICAgICBjYW5NYW5hZ2VFbXBsb3llZXM6IFsnJ10sXHJcbiAgICAgICAgICAgIGNhbk1hbmFnZVByb2plY3RzOiBbJyddLFxyXG4gICAgICAgICAgICBwcm9qZWN0TWFuYWdlckZvcjogWycnXVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBvbkNvdW50cnlDaGFuZ2UodmFsKXtcclxuICAgICAgICB0aGlzLmNvdW50cnk9dmFsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XHJcbiAgICB9XHJcbiAgICBvblN1Ym1pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXR0ZWQnKTtcclxuICAgICAgICBjb25zdCBlbXBsb3llZSA9IG5ldyBFbXBsb3llZShcclxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUuZW1haWwsXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUubGFzdE5hbWUsXHJcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnBob25lLFxyXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5jb3VudHJ5LFxyXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5jaXR5LFxyXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5zdGF0ZSxcclxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUudGl0bGUsXHJcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmRpdmlzaW9uLFxyXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5kZXBhcnRtZW50LFxyXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5tYW5hZ2VyLFxyXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5lbXBsb3llZXMsXHJcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnByb2plY3RzLFxyXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5jYW5NYW5hZ2VFbXBsb3llZXMsXHJcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmNhbk1hbmFnZVByb2plY3RzLFxyXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5oYXNNYW5hZ2VyLFxyXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5wcm9qZWN0TWFuYWdlckZvclxyXG4gICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVtcGxveWVlKTtcclxuICAgICAgICB0aGlzLl9lbXBsb3llZVNlcnZpY2UuY3JlYXRlVXNlcihlbXBsb3llZSkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBoYW5kbGVSYWRpb0NoYW5nZSh2YWx1ZSxmb3JGaWVsZCl7XHJcbiAgICAgICAgaWYoZm9yRmllbGQ9PVwiY2FuTWFuYWdlRW1wbG95ZWVzXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmNhbk1hbmFnZUVtcGxveWVlcz12YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZm9yRmllbGQ9PVwiY2FuTWFuYWdlUHJvamVjdHNcIil7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuTWFuYWdlUHJvamVjdHM9dmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGZvckZpZWxkPT1cImhhc01hbmFnZXJcIil7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzTWFuYWdlcj12YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGlzRW1haWwoY29udHJvbCA6IENvbnRyb2wpOiB7W3M6c3RyaW5nXTpib29sZWFufXtcclxuICAgICAgICBpZighY29udHJvbC52YWx1ZS5tYXRjaChcIlstYS16MC05fiEkJV4mKl89K317XFwnP10rKFxcLlstYS16MC05fiEkJV4mKl89K317XFwnP10rKSpAKFthLXowLTlfXVstYS16MC05X10qKFxcLlstYS16MC05X10rKSpcXC4oYWVyb3xhcnBhfGJpenxjb218Y29vcHxlZHV8Z292fGluZm98aW50fG1pbHxtdXNldW18bmFtZXxuZXR8b3JnfHByb3x0cmF2ZWx8bW9iaXxbYS16XVthLXpdKXwoWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfSkpKDpbMC05XXsxLDV9KT9cIikpe1xyXG4gICAgICAgICAgICByZXR1cm4ge2ludmFsaWRNYWlsOnRydWV9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
