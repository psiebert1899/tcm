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
var common_1 = require("@angular/common");
var project_service_1 = require("./project.service");
var accordiongroup_component_1 = require("../utility/accordiongroup.component");
var accordion_component_1 = require("../utility/accordion.component");
var NewProjectComponent = (function () {
    function NewProjectComponent(_fb, projectService) {
        this._fb = _fb;
        this.projectService = projectService;
    }
    NewProjectComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            organization: ['', common_1.Validators.required],
            name: ['', common_1.Validators.required],
            image: [''],
            manager: ['']
        });
    };
    NewProjectComponent.prototype.onSubmit = function () {
        console.log('Submitted');
    };
    NewProjectComponent = __decorate([
        core_1.Component({
            selector: 'my-new-project',
            template: "\n    <form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n        <accordion>\n            <accordion-group heading=\"Basic Details\" [isOpen]=\"true\">\n                <div class=\"form-group\">\n                    <label for=\"organization\">Organization</label>\n                    <input type=\"text\" [ngFormControl]=\"myForm.find('organization')\" id=\"organization\" class=\"form-control\"/>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"name\">Project Name:</label>\n                    <input type=\"text\" [ngFormControl]=\"myForm.find('name')\" id=\"name\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"Image\">Image</label>\n                    <input type=\"text\" [ngFormControl]=\"myForm.find('image')\" id=\"image\" class=\"form-control\" value=\"/imgs/projectImgs/defaultProjectImage.png\"/>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"Manager\">Manager</label>\n                    <input type=\"text\" [ngFormControl]=\"myForm.find('manager')\" id=\"manager\" class=\"form-control\" value=\"Jason McDonald\"/>\n                </div>\n            \n            </accordion-group>\n            <accordion-group heading=\"Budget and Scheduling\">\n            \n            </accordion-group>\n            <accordion-group heading=\"Employees\">\n            \n            </accordion-group>\n            <accordion-group heading=\"Documents\">\n            \n            </accordion-group>\n        </accordion>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </form>\n\n    ",
            directives: [accordion_component_1.AccordionComponent, accordiongroup_component_1.AccordionComponentGroup]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, project_service_1.ProjectService])
    ], NewProjectComponent);
    return NewProjectComponent;
}());
exports.NewProjectComponent = NewProjectComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QvbmV3cHJvamVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx1QkFBb0QsaUJBQWlCLENBQUMsQ0FBQTtBQUN0RSxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQUNqRCx5Q0FBc0MscUNBQXFDLENBQUMsQ0FBQTtBQUM1RSxvQ0FBaUMsZ0NBQWdDLENBQUMsQ0FBQTtBQXlDbEU7SUFFSSw2QkFBb0IsR0FBZSxFQUFTLGNBQTZCO1FBQXJELFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtJQUFFLENBQUM7SUFDNUUsc0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDdkIsWUFBWSxFQUFDLENBQUMsRUFBRSxFQUFDLG1CQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3JDLElBQUksRUFBQyxDQUFDLEVBQUUsRUFBQyxtQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUM3QixLQUFLLEVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUMsQ0FBQyxFQUFFLENBQUM7U0FDZixDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0Qsc0NBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQXJETDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUcsZ0JBQWdCO1lBQzNCLFFBQVEsRUFBQyxtc0RBbUNSO1lBQ0QsVUFBVSxFQUFDLENBQUMsd0NBQWtCLEVBQUMsa0RBQXVCLENBQUM7U0FDMUQsQ0FBQzs7MkJBQUE7SUFlRiwwQkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksMkJBQW1CLHNCQWMvQixDQUFBIiwiZmlsZSI6InByb2plY3QvbmV3cHJvamVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NvbnRyb2xHcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnN9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtQcm9qZWN0U2VydmljZX0gZnJvbSBcIi4vcHJvamVjdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QWNjb3JkaW9uQ29tcG9uZW50R3JvdXB9IGZyb20gXCIuLi91dGlsaXR5L2FjY29yZGlvbmdyb3VwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0FjY29yZGlvbkNvbXBvbmVudH0gZnJvbSBcIi4uL3V0aWxpdHkvYWNjb3JkaW9uLmNvbXBvbmVudFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yIDogJ215LW5ldy1wcm9qZWN0JyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxmb3JtIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxyXG4gICAgICAgIDxhY2NvcmRpb24+XHJcbiAgICAgICAgICAgIDxhY2NvcmRpb24tZ3JvdXAgaGVhZGluZz1cIkJhc2ljIERldGFpbHNcIiBbaXNPcGVuXT1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm9yZ2FuaXphdGlvblwiPk9yZ2FuaXphdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ29yZ2FuaXphdGlvbicpXCIgaWQ9XCJvcmdhbml6YXRpb25cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPlByb2plY3QgTmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5maW5kKCduYW1lJylcIiBpZD1cIm5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJJbWFnZVwiPkltYWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnaW1hZ2UnKVwiIGlkPVwiaW1hZ2VcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHZhbHVlPVwiL2ltZ3MvcHJvamVjdEltZ3MvZGVmYXVsdFByb2plY3RJbWFnZS5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIk1hbmFnZXJcIj5NYW5hZ2VyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnbWFuYWdlcicpXCIgaWQ9XCJtYW5hZ2VyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT1cIkphc29uIE1jRG9uYWxkXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cclxuICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVwiQnVkZ2V0IGFuZCBTY2hlZHVsaW5nXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cclxuICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVwiRW1wbG95ZWVzXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cclxuICAgICAgICAgICAgPGFjY29yZGlvbi1ncm91cCBoZWFkaW5nPVwiRG9jdW1lbnRzXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2FjY29yZGlvbi1ncm91cD5cclxuICAgICAgICA8L2FjY29yZGlvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOltBY2NvcmRpb25Db21wb25lbnQsQWNjb3JkaW9uQ29tcG9uZW50R3JvdXBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZXdQcm9qZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgbXlGb3JtOkNvbnRyb2xHcm91cDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOkZvcm1CdWlsZGVyLHByaXZhdGUgcHJvamVjdFNlcnZpY2U6UHJvamVjdFNlcnZpY2Upe31cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5teUZvcm09dGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBvcmdhbml6YXRpb246WycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBuYW1lOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgaW1hZ2U6WycnXSxcclxuICAgICAgICAgICAgbWFuYWdlcjpbJyddXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIG9uU3VibWl0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N1Ym1pdHRlZCcpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
