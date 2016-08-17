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
var employee_1 = require("./employee");
var EmployeeDisplayComponent = (function () {
    function EmployeeDisplayComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', employee_1.Employee)
    ], EmployeeDisplayComponent.prototype, "employee", void 0);
    EmployeeDisplayComponent = __decorate([
        core_1.Component({
            selector: "my-employee-display",
            template: "\n        <div class=\"col-md-2\">\n            <div class=\"thumbnail\">\n                <img src=\"{{employee.image}}\" class=\"img img-responsive\"/>\n                <h3>{{employee.firstName + \" \" + employee.lastName}}</h3>\n                <h5>{{employee?.division +\",\"+employee?.department}}</h5>\n            </div>\n        </div>\n    ",
            styles: ["\n        h3{\n            text-align:center;\n        }\n        h5{\n            text-align:center;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeeDisplayComponent);
    return EmployeeDisplayComponent;
}());
exports.EmployeeDisplayComponent = EmployeeDisplayComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlZGlzcGxheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUFlLENBQUMsQ0FBQTtBQUNyRSx5QkFBdUIsWUFBWSxDQUFDLENBQUE7QUF1QnBDO0lBRUk7SUFDQSxDQUFDO0lBRkw7UUFBQyxZQUFLLEVBQUU7OzhEQUFBO0lBckJSO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLCtWQVFUO1lBQ0QsTUFBTSxFQUFFLENBQUMsd0hBT1IsQ0FBQztTQUNMLENBQUM7O2dDQUFBO0lBS0YsK0JBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUpZLGdDQUF3QiwyQkFJcEMsQ0FBQSIsImZpbGUiOiJlbXBsb3llZS9lbXBsb3llZWRpc3BsYXkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtFbXBsb3llZX0gZnJvbSBcIi4vZW1wbG95ZWVcIjtcclxuaW1wb3J0IHtFbXBsb3llZVNlcnZpY2V9IGZyb20gXCIuL2VtcGxveWVlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWVtcGxveWVlLWRpc3BsYXlcIixcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHVtYm5haWxcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwie3tlbXBsb3llZS5pbWFnZX19XCIgY2xhc3M9XCJpbWcgaW1nLXJlc3BvbnNpdmVcIi8+XHJcbiAgICAgICAgICAgICAgICA8aDM+e3tlbXBsb3llZS5maXJzdE5hbWUgKyBcIiBcIiArIGVtcGxveWVlLmxhc3ROYW1lfX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPGg1Pnt7ZW1wbG95ZWU/LmRpdmlzaW9uICtcIixcIitlbXBsb3llZT8uZGVwYXJ0bWVudH19PC9oNT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIGgze1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDV7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbXBsb3llZURpc3BsYXlDb21wb25lbnQge1xyXG5ASW5wdXQoKSBlbXBsb3llZTogRW1wbG95ZWU7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
