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
let EmployeeSearchPipe = class EmployeeSearchPipe {
    transform(value, employeeSearch, property) {
        if (employeeSearch === undefined || property === undefined || property === "Please Select")
            return value;
        return value.filter((employee) => (employee[property].toLowerCase().includes(employeeSearch.toLowerCase())));
    }
};
EmployeeSearchPipe = __decorate([
    core_1.Pipe({
        name: "findEmployee"
    }), 
    __metadata('design:paramtypes', [])
], EmployeeSearchPipe);
exports.EmployeeSearchPipe = EmployeeSearchPipe;
// transform(value, pipeFilter) {
//  if (!pipeFilter) return value;
//  return value.filter((employee) => (employee["email"].toLowerCase().includes(pipeFilter.toLowerCase())) ||
//  employee["firstName"].toLowerCase().includes(pipeFilter.toLowerCase()) ||
//  employee["lastName"].toLowerCase().includes(pipeFilter.toLowerCase()));
// }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlLXNlYXJjaC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBa0MsZUFBZSxDQUFDLENBQUE7QUFNbEQ7SUFDRSxTQUFTLENBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxRQUFRO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsS0FBSyxTQUFTLElBQUssUUFBUSxLQUFLLFNBQVMsSUFBSSxRQUFRLEtBQUssZUFBZSxDQUFDO1lBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hILENBQUM7QUFDRixDQUFDO0FBVEQ7SUFBQyxXQUFJLENBQUM7UUFDSixJQUFJLEVBQUUsY0FBYztLQUNyQixDQUFDOztzQkFBQTtBQUVXLDBCQUFrQixxQkFLOUIsQ0FBQTtBQUVELGlDQUFpQztBQUNqQyxrQ0FBa0M7QUFDbEMsNkdBQTZHO0FBQzdHLDZFQUE2RTtBQUM3RSwyRUFBMkU7QUFDM0UsSUFBSSIsImZpbGUiOiJlbXBsb3llZS9lbXBsb3llZS1zZWFyY2gucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiBcImZpbmRFbXBsb3llZVwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVTZWFyY2hQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlLCBlbXBsb3llZVNlYXJjaCwgcHJvcGVydHkpIHtcclxuICAgIGlmIChlbXBsb3llZVNlYXJjaCA9PT0gdW5kZWZpbmVkIHx8ICBwcm9wZXJ0eSA9PT0gdW5kZWZpbmVkIHx8IHByb3BlcnR5ID09PSBcIlBsZWFzZSBTZWxlY3RcIikgcmV0dXJuIHZhbHVlO1xyXG4gICAgcmV0dXJuIHZhbHVlLmZpbHRlcigoZW1wbG95ZWUpID0+IChlbXBsb3llZVtwcm9wZXJ0eV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhlbXBsb3llZVNlYXJjaC50b0xvd2VyQ2FzZSgpKSkpO1xyXG4gfVxyXG59XHJcblxyXG4vLyB0cmFuc2Zvcm0odmFsdWUsIHBpcGVGaWx0ZXIpIHtcclxuLy8gIGlmICghcGlwZUZpbHRlcikgcmV0dXJuIHZhbHVlO1xyXG4vLyAgcmV0dXJuIHZhbHVlLmZpbHRlcigoZW1wbG95ZWUpID0+IChlbXBsb3llZVtcImVtYWlsXCJdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocGlwZUZpbHRlci50b0xvd2VyQ2FzZSgpKSkgfHxcclxuLy8gIGVtcGxveWVlW1wiZmlyc3ROYW1lXCJdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocGlwZUZpbHRlci50b0xvd2VyQ2FzZSgpKSB8fFxyXG4vLyAgZW1wbG95ZWVbXCJsYXN0TmFtZVwiXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHBpcGVGaWx0ZXIudG9Mb3dlckNhc2UoKSkpO1xyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
