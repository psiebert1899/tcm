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
const project_service_1 = require("./project.service");
const project_1 = require("./project");
const employee_service_1 = require("../employee/employee.service");
const query_1 = require("../utility/query");
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
let NewProjectComponent = class NewProjectComponent {
    constructor(_fb, projectService, _employeeService, _router) {
        this._fb = _fb;
        this.projectService = projectService;
        this._employeeService = _employeeService;
        this._router = _router;
        this.managers = [];
    }
    ngOnInit() {
        this.myForm = this._fb.group({
            organization: ['', forms_1.Validators.required],
            name: ['', forms_1.Validators.required],
            image: ['', forms_1.Validators.required],
            manager: ['', forms_1.Validators.required]
        });
        this._employeeService.getEmployees(new query_1.Query('canManageProjects', true)).subscribe(response => this.managers = response, error => console.log(error));
    }
    onSubmit() {
        var project = new project_1.Project(this.myForm.value.organization, this.myForm.value.name, this.myForm.value.image, this.myForm.value.manager);
        this.projectService.newProject(project).subscribe(data => this._router.navigateByUrl('/project/list'), error => console.log(error));
    }
};
NewProjectComponent = __decorate([
    core_1.Component({
        selector: 'my-new-project',
        template: `
    <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
        <accordion>
            <accordion-group heading="Basic Details" [isOpen]="true">
                <div class="form-group">
                    <label for="organization">Organization</label>
                    <input type="text" [formControl]="myForm.find('organization')" id="organization" class="form-control"/>
                </div>
                <div class="form-group">
                    <label for="name">Project Name:</label>
                    <input type="text" [formControl]="myForm.find('name')" id="name" class="form-control">
                </div>
                <div class="form-group">
                    <label for="Image">Image</label>
                    <input type="text" [formControl]="myForm.find('image')" id="image" class="form-control" value="/imgs/projectImgs/defaultProjectImage.png"/>
                </div>
                <div class="form-group">
                    <label for="Manager">Manager</label>
                    <select name="Manager" id="manager" [formControl]="myForm.find('manager')" class="form-control">
                        <option *ngFor="let m of managers" [value]="m._id">{{m.firstName + " "+m.lastName}}</option>
                    </select>
                </div>
            
            </accordion-group>
            <accordion-group heading="Budget and Scheduling">
            
            </accordion-group>
            <accordion-group heading="Employees">
            
            </accordion-group>
            <accordion-group heading="Documents">
            
            </accordion-group>
        </accordion>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    `
    }), 
    __metadata('design:paramtypes', [forms_1.FormBuilder, project_service_1.ProjectService, employee_service_1.EmployeeService, router_1.Router])
], NewProjectComponent);
exports.NewProjectComponent = NewProjectComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QvbmV3cHJvamVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxrQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRCwwQkFBc0IsV0FBVyxDQUFDLENBQUE7QUFDbEMsbUNBQThCLDhCQUE4QixDQUFDLENBQUE7QUFDN0Qsd0JBQW9CLGtCQUFrQixDQUFDLENBQUE7QUFDdkMseUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsd0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUEyQ2xFO0lBR0ksWUFBb0IsR0FBZSxFQUFTLGNBQTZCLEVBQVMsZ0JBQWdDLEVBQVMsT0FBYztRQUFySCxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBUyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWdCO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUR6SSxhQUFRLEdBQUcsRUFBRSxDQUFDO0lBQzZILENBQUM7SUFDNUksUUFBUTtRQUNKLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDdkIsWUFBWSxFQUFDLENBQUMsRUFBRSxFQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3JDLElBQUksRUFBQyxDQUFDLEVBQUUsRUFBQyxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUM3QixLQUFLLEVBQUMsQ0FBQyxFQUFFLEVBQUMsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDOUIsT0FBTyxFQUFDLENBQUMsRUFBRSxFQUFDLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ25DLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxhQUFLLENBQUMsbUJBQW1CLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQzdFLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFDLFFBQVEsRUFDbEMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUE7SUFDTCxDQUFDO0lBQ0QsUUFBUTtRQUNKLElBQUksT0FBTyxHQUFFLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsSSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQzdDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFDbkQsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUE7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQWhFRDtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUcsZ0JBQWdCO1FBQzNCLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXFDUjtLQUNKLENBQUM7O3VCQUFBO0FBQ1csMkJBQW1CLHNCQXVCL0IsQ0FBQSIsImZpbGUiOiJwcm9qZWN0L25ld3Byb2plY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtQcm9qZWN0U2VydmljZX0gZnJvbSBcIi4vcHJvamVjdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQge0VtcGxveWVlU2VydmljZX0gZnJvbSBcIi4uL2VtcGxveWVlL2VtcGxveWVlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtRdWVyeX0gZnJvbSBcIi4uL3V0aWxpdHkvcXVlcnlcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3IgOiAnbXktbmV3LXByb2plY3QnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxyXG4gICAgICAgIDxhY2NvcmRpb24+XHJcbiAgICAgICAgICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cIkJhc2ljIERldGFpbHNcIiBbaXNPcGVuXT1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm9yZ2FuaXphdGlvblwiPk9yZ2FuaXphdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW2Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdvcmdhbml6YXRpb24nKVwiIGlkPVwib3JnYW5pemF0aW9uXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5Qcm9qZWN0IE5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbZm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ25hbWUnKVwiIGlkPVwibmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIkltYWdlXCI+SW1hZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtmb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnaW1hZ2UnKVwiIGlkPVwiaW1hZ2VcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHZhbHVlPVwiL2ltZ3MvcHJvamVjdEltZ3MvZGVmYXVsdFByb2plY3RJbWFnZS5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIk1hbmFnZXJcIj5NYW5hZ2VyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJNYW5hZ2VyXCIgaWQ9XCJtYW5hZ2VyXCIgW2Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCdtYW5hZ2VyJylcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBtIG9mIG1hbmFnZXJzXCIgW3ZhbHVlXT1cIm0uX2lkXCI+e3ttLmZpcnN0TmFtZSArIFwiIFwiK20ubGFzdE5hbWV9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cclxuICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVwiQnVkZ2V0IGFuZCBTY2hlZHVsaW5nXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cclxuICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVwiRW1wbG95ZWVzXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cclxuICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVwiRG9jdW1lbnRzXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cclxuICAgICAgICA8L2FjY29yZGlvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ld1Byb2plY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBteUZvcm06Rm9ybUdyb3VwO1xyXG4gICAgbWFuYWdlcnMgPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOkZvcm1CdWlsZGVyLHByaXZhdGUgcHJvamVjdFNlcnZpY2U6UHJvamVjdFNlcnZpY2UscHJpdmF0ZSBfZW1wbG95ZWVTZXJ2aWNlOkVtcGxveWVlU2VydmljZSxwcml2YXRlIF9yb3V0ZXI6Um91dGVyKXt9XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMubXlGb3JtPXRoaXMuX2ZiLmdyb3VwKHtcclxuICAgICAgICAgICAgb3JnYW5pemF0aW9uOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgbmFtZTpbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGltYWdlOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgbWFuYWdlcjpbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuX2VtcGxveWVlU2VydmljZS5nZXRFbXBsb3llZXMobmV3IFF1ZXJ5KCdjYW5NYW5hZ2VQcm9qZWN0cycsdHJ1ZSkpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4gdGhpcy5tYW5hZ2Vycz1yZXNwb25zZSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgb25TdWJtaXQoKXtcclxuICAgICAgICB2YXIgcHJvamVjdD0gbmV3IFByb2plY3QodGhpcy5teUZvcm0udmFsdWUub3JnYW5pemF0aW9uLHRoaXMubXlGb3JtLnZhbHVlLm5hbWUsdGhpcy5teUZvcm0udmFsdWUuaW1hZ2UsdGhpcy5teUZvcm0udmFsdWUubWFuYWdlcik7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0U2VydmljZS5uZXdQcm9qZWN0KHByb2plY3QpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZGF0YSA9PiB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3Byb2plY3QvbGlzdCcpLFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
