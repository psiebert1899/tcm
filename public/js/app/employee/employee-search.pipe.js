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
var EmployeeSearchPipe = (function () {
    function EmployeeSearchPipe() {
    }
    EmployeeSearchPipe.prototype.transform = function (value, pipeFilter) {
        if (pipeFilter === undefined)
            return value;
        return value.filter(function (employee) { return employee.email.includes(pipeFilter) || employee.firstName.includes(pipeFilter); });
    };
    EmployeeSearchPipe = __decorate([
        core_1.Pipe({
            name: "findEmployee"
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeeSearchPipe);
    return EmployeeSearchPipe;
}());
exports.EmployeeSearchPipe = EmployeeSearchPipe;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlLXNlYXJjaC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFNbEQ7SUFBQTtJQUtBLENBQUM7SUFKQyxzQ0FBUyxHQUFULFVBQVUsS0FBSyxFQUFFLFVBQVU7UUFDekIsRUFBRSxDQUFDLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDM0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBOUUsQ0FBOEUsQ0FBQyxDQUFDO0lBQ2xILENBQUM7SUFSSDtRQUFDLFdBQUksQ0FBQztZQUNKLElBQUksRUFBRSxjQUFjO1NBQ3JCLENBQUM7OzBCQUFBO0lBT0YseUJBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQTtBQUxZLDBCQUFrQixxQkFLOUIsQ0FBQSIsImZpbGUiOiJlbXBsb3llZS9lbXBsb3llZS1zZWFyY2gucGlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiBcImZpbmRFbXBsb3llZVwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVTZWFyY2hQaXBlIHtcclxuICB0cmFuc2Zvcm0odmFsdWUsIHBpcGVGaWx0ZXIpOiBhbnkge1xyXG4gICAgaWYgKHBpcGVGaWx0ZXIgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHZhbHVlO1xyXG4gICAgcmV0dXJuIHZhbHVlLmZpbHRlcihlbXBsb3llZSA9PiBlbXBsb3llZS5lbWFpbC5pbmNsdWRlcyhwaXBlRmlsdGVyKSB8fCBlbXBsb3llZS5maXJzdE5hbWUuaW5jbHVkZXMocGlwZUZpbHRlcikpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
