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
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const accordiongroup_component_1 = require("../utility/accordiongroup.component");
const accordion_component_1 = require("../utility/accordion.component");
let EditEmployeeComponent = class EditEmployeeComponent {
    constructor(_fb) {
        this._fb = _fb;
        this.country = '';
    }
    ngOnInit() {
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
            manager: ['']
        });
    }
    isEmail(control) {
        if (!control.value.match("[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?")) {
            return { invalidMail: true };
        }
    }
    onCountryChange(val) {
        this.country = val;
        console.log(val);
    }
};
EditEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'edit-employee-component',
        template: `
        <form [ngFormModel]="myForm" (ngSubmit)="OnSubmit()">
            <accordion>
                <accordion-group heading="Basic Details">
                <div class="left-form">
                 <div class="form-group">
                    <label for="firstName">First Name:</label>
                    <input type="text" [ngFormControl]="myForm.find('firstName')" id="firstName" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name:</label>
                    <input type="text" [ngFormControl]="myForm.find('lastName')" id="lastName" class="form-control"/>
                </div>
                <!--Still need to add image uploading capability-->
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" [ngFormControl]="myForm.find('email')" id="email" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="phone">Phone:</label>
                    <input type="text" [ngFormControl]="myForm.find('phone')" id="phone" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="country">Country</label>
                    <select [ngFormControl]="myForm.find('country')" id="country" #t (change)="onCountryChange(t.value)" class="form-control">
                        <option>USA</option>
                        <option>Italy</option>
                        <option>Brazil</option>
                    </select>
                </div>
                </div>
                <div class="right-form">
                <div class="form-group">
                    <label for="city">City</label>
                    <input type="text" [ngFormControl]="myForm.find('city')" id="city" class="form-control"/>
                </div>
                <div class="form-group" *ngIf="country!='' && country=='USA'">
                    <label for="state">State:</label>
                    <select [ngFormControl]="myForm.find('state')" id="state" class="form-control">
                        <option>Illinois</option>
                        <option>Michigan</option>
                        <option>North Carolina</option>
                        <option>Washington</option>
                        <option>Florida</option>
                    </select>
                </div>
                 <div class="form-group">
                        <label for="title">Title:</label>
                        <select id="title" [ngFormControl]="myForm.find('title')" class="form-control">
                            <option>Analyst A1</option>
                            <option>Analyst A2</option>
                            <option>Consultant C1</option>
                            <option>Manager</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="division">Division</label>
                        <select id="division" [ngFormControl]="myForm.find('division')" class="form-control">
                            <option>Hyla Soft USA</option>
                            <option>Hyla Soft Italy</option>
                            <option>Hyla soft Brazil</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="department">Department</label>
                        <select id="department" [ngFormControl]="myForm.find('department')" class="form-control">
                            <option>Software</option>
                            <option>PLM</option>
                            <option>MES</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="Manager">Manager</label>
                        <select id="manager" [ngFormControl]="myForm.find('manager')" class="form-control">
                            <option>Unassigned</option>
                            <option>David Kaparis</option>
                            <option>Ettore Soldi</option>
                            <option>Jason McDonald</option>
                        </select>
                    </div>    
                  </div>
                </accordion-group>
                <accordion-group heading="Add/Remove Employees">
                    <div class="left-form">
                    
                    </div>
                    <div class="right-form">
                    
                    </div>
                    
                </accordion-group>
                <accordion-group heading="Add/Remove Projects">
                
                </accordion-group>
                <accordion-group heading="Add/Remove Skills/Edit Resume">
                
                </accordion-group>
                <accordion-group heading="Add/Remove Training">
                
                </accordion-group>
                <accordion-group heading="Edit Benefits">
                
                </accordion-group>
                <accordion-group heading="Add/Remove Notes">
                
                </accordion-group>
                
            </accordion>
        
        </form>
    `,
        directives: [accordion_component_1.AccordionComponent, accordiongroup_component_1.AccordionComponentGroup],
        styles: [
            `
            .left-form{
                width:45%;
                float:left;
            }
            .right-form{
                width:45%;
                width:45%;
                float:right;
            }
        `
        ]
    }), 
    __metadata('design:paramtypes', [common_1.FormBuilder])
], EditEmployeeComponent);
exports.EditEmployeeComponent = EditEmployeeComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VkaXRlbXBsb3llZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx5QkFBNkQsaUJBQWlCLENBQUMsQ0FBQTtBQUMvRSwyQ0FBc0MscUNBQXFDLENBQUMsQ0FBQTtBQUM1RSxzQ0FBaUMsZ0NBQWdDLENBQUMsQ0FBQTtBQWlJbEU7SUFHSSxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBRHJDLFlBQU8sR0FBUSxFQUFFLENBQUM7SUFDcUIsQ0FBQztJQUN4QyxRQUFRO1FBQ0osSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUN2QixTQUFTLEVBQUMsQ0FBQyxFQUFFLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbEMsUUFBUSxFQUFDLENBQUMsRUFBRSxFQUFDLG1CQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2pDLEtBQUssRUFBQyxDQUFDLEVBQUUsRUFBQyxtQkFBVSxDQUFDLE9BQU8sQ0FBQztvQkFDekIsbUJBQVUsQ0FBQyxRQUFRO29CQUNuQixJQUFJLENBQUMsT0FBTztpQkFDZixDQUFDLENBQUM7WUFDSCxLQUFLLEVBQUMsQ0FBQyxFQUFFLEVBQUMsbUJBQVUsQ0FBQyxRQUFRLENBQUM7WUFDOUIsT0FBTyxFQUFDLENBQUMsRUFBRSxFQUFDLG1CQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2hDLElBQUksRUFBQyxDQUFDLEVBQUUsRUFBQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUM3QixLQUFLLEVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDVixLQUFLLEVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDVixRQUFRLEVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDZixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDaEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNPLE9BQU8sQ0FBQyxPQUFpQjtRQUM3QixFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLDZQQUE2UCxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3BSLE1BQU0sQ0FBQyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsQ0FBQTtRQUM3QixDQUFDO0lBQ0wsQ0FBQztJQUNELGVBQWUsQ0FBQyxHQUFHO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBQyxHQUFHLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0FBQ0wsQ0FBQztBQS9KRDtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUseUJBQXlCO1FBQ25DLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E4R1I7UUFDRCxVQUFVLEVBQUMsQ0FBQyx3Q0FBa0IsRUFBQyxrREFBdUIsQ0FBQztRQUN2RCxNQUFNLEVBQUM7WUFDSDs7Ozs7Ozs7OztTQVVDO1NBQ0o7S0FDSixDQUFDOzt5QkFBQTtBQUNXLDZCQUFxQix3QkErQmpDLENBQUEiLCJmaWxlIjoiZW1wbG95ZWUvZWRpdGVtcGxveWVlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q29udHJvbEdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgQ29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge0FjY29yZGlvbkNvbXBvbmVudEdyb3VwfSBmcm9tIFwiLi4vdXRpbGl0eS9hY2NvcmRpb25ncm91cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtBY2NvcmRpb25Db21wb25lbnR9IGZyb20gXCIuLi91dGlsaXR5L2FjY29yZGlvbi5jb21wb25lbnRcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2VkaXQtZW1wbG95ZWUtY29tcG9uZW50JyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgICAgICA8Zm9ybSBbbmdGb3JtTW9kZWxdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIk9uU3VibWl0KClcIj5cclxuICAgICAgICAgICAgPGFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cIkJhc2ljIERldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdE5hbWVcIj5GaXJzdCBOYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2ZpcnN0TmFtZScpXCIgaWQ9XCJmaXJzdE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibGFzdE5hbWVcIj5MYXN0IE5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnbGFzdE5hbWUnKVwiIGlkPVwibGFzdE5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPCEtLVN0aWxsIG5lZWQgdG8gYWRkIGltYWdlIHVwbG9hZGluZyBjYXBhYmlsaXR5LS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2VtYWlsJylcIiBpZD1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBob25lXCI+UGhvbmU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgncGhvbmUnKVwiIGlkPVwicGhvbmVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY291bnRyeVwiPkNvdW50cnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2NvdW50cnknKVwiIGlkPVwiY291bnRyeVwiICN0IChjaGFuZ2UpPVwib25Db3VudHJ5Q2hhbmdlKHQudmFsdWUpXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5VU0E8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5JdGFseTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkJyYXppbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCI+Q2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2NpdHknKVwiIGlkPVwiY2l0eVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiICpuZ0lmPVwiY291bnRyeSE9JycgJiYgY291bnRyeT09J1VTQSdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic3RhdGVcIj5TdGF0ZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ3N0YXRlJylcIiBpZD1cInN0YXRlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5JbGxpbm9pczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk1pY2hpZ2FuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Tm9ydGggQ2Fyb2xpbmE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5XYXNoaW5ndG9uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+RmxvcmlkYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInRpdGxlXCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ3RpdGxlJylcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5BbmFseXN0IEExPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkFuYWx5c3QgQTI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Q29uc3VsdGFudCBDMTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5NYW5hZ2VyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkaXZpc2lvblwiPkRpdmlzaW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cImRpdmlzaW9uXCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2RpdmlzaW9uJylcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5IeWxhIFNvZnQgVVNBPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkh5bGEgU29mdCBJdGFseTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5IeWxhIHNvZnQgQnJhemlsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXBhcnRtZW50XCI+RGVwYXJ0bWVudDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJkZXBhcnRtZW50XCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ2RlcGFydG1lbnQnKVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNvZnR3YXJlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlBMTTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5NRVM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIk1hbmFnZXJcIj5NYW5hZ2VyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cIm1hbmFnZXJcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnbWFuYWdlcicpXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+VW5hc3NpZ25lZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5EYXZpZCBLYXBhcmlzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkV0dG9yZSBTb2xkaTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5KYXNvbiBNY0RvbmFsZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hY2NvcmRpb24tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XCJBZGQvUmVtb3ZlIEVtcGxveWVlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9hY2NvcmRpb24tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XCJBZGQvUmVtb3ZlIFByb2plY3RzXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVwiQWRkL1JlbW92ZSBTa2lsbHMvRWRpdCBSZXN1bWVcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9hY2NvcmRpb24tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8YWNjb3JkaW9uLWdyb3VwIGhlYWRpbmc9XCJBZGQvUmVtb3ZlIFRyYWluaW5nXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvYWNjb3JkaW9uLWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVwiRWRpdCBCZW5lZml0c1wiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cclxuICAgICAgICAgICAgICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cIkFkZC9SZW1vdmUgTm90ZXNcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9hY2NvcmRpb24tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9hY2NvcmRpb24+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6W0FjY29yZGlvbkNvbXBvbmVudCxBY2NvcmRpb25Db21wb25lbnRHcm91cF0sXHJcbiAgICBzdHlsZXM6W1xyXG4gICAgICAgIGBcclxuICAgICAgICAgICAgLmxlZnQtZm9ybXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjQ1JTtcclxuICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJpZ2h0LWZvcm17XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo0NSU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo0NSU7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRFbXBsb3llZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuIG15Rm9ybTpDb250cm9sR3JvdXA7XHJcbiAgICBjb3VudHJ5OlN0cmluZz0nJztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiIDogRm9ybUJ1aWxkZXIpe31cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5teUZvcm09dGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBmaXJzdE5hbWU6WycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTpbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGVtYWlsOlsnJyxWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNFbWFpbFxyXG4gICAgICAgICAgICBdKV0sXHJcbiAgICAgICAgICAgIHBob25lOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgY291bnRyeTpbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGNpdHk6WycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBzdGF0ZTpbJyddLFxyXG4gICAgICAgICAgICB0aXRsZTpbJyddLFxyXG4gICAgICAgICAgICBkaXZpc2lvbjpbJyddLFxyXG4gICAgICAgICAgICBkZXBhcnRtZW50OlsnJ10sXHJcbiAgICAgICAgICAgIG1hbmFnZXI6IFsnJ11cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaXNFbWFpbChjb250cm9sIDogQ29udHJvbCk6IHtbczpzdHJpbmddOmJvb2xlYW59e1xyXG4gICAgICAgIGlmKCFjb250cm9sLnZhbHVlLm1hdGNoKFwiWy1hLXowLTl+ISQlXiYqXz0rfXtcXCc/XSsoXFwuWy1hLXowLTl+ISQlXiYqXz0rfXtcXCc/XSspKkAoW2EtejAtOV9dWy1hLXowLTlfXSooXFwuWy1hLXowLTlfXSspKlxcLihhZXJvfGFycGF8Yml6fGNvbXxjb29wfGVkdXxnb3Z8aW5mb3xpbnR8bWlsfG11c2V1bXxuYW1lfG5ldHxvcmd8cHJvfHRyYXZlbHxtb2JpfFthLXpdW2Etel0pfChbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9KSkoOlswLTldezEsNX0pP1wiKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB7aW52YWxpZE1haWw6dHJ1ZX1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkNvdW50cnlDaGFuZ2UodmFsKXtcclxuICAgICAgICB0aGlzLmNvdW50cnk9dmFsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
