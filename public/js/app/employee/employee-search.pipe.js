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
    EmployeeSearchPipe.prototype.transform = function (value, employeeSearch, property) {
        if (employeeSearch === undefined || property === undefined || property === "Please Select")
            return value;
        return value.filter(function (employee) { return (employee[property].toLowerCase().includes(employeeSearch.toLowerCase())); });
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
// transform(value, pipeFilter) {
//  if (!pipeFilter) return value;
//  return value.filter((employee) => (employee["email"].toLowerCase().includes(pipeFilter.toLowerCase())) ||
//  employee["firstName"].toLowerCase().includes(pipeFilter.toLowerCase()) ||
//  employee["lastName"].toLowerCase().includes(pipeFilter.toLowerCase()));
// }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlLXNlYXJjaC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFNbEQ7SUFBQTtJQUtBLENBQUM7SUFKQyxzQ0FBUyxHQUFULFVBQVUsS0FBSyxFQUFFLGNBQWMsRUFBRSxRQUFRO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsS0FBSyxTQUFTLElBQUssUUFBUSxLQUFLLFNBQVMsSUFBSSxRQUFRLEtBQUssZUFBZSxDQUFDO1lBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUF6RSxDQUF5RSxDQUFDLENBQUM7SUFDaEgsQ0FBQztJQVJGO1FBQUMsV0FBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLGNBQWM7U0FDckIsQ0FBQzs7MEJBQUE7SUFPRix5QkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFksMEJBQWtCLHFCQUs5QixDQUFBO0FBRUQsaUNBQWlDO0FBQ2pDLGtDQUFrQztBQUNsQyw2R0FBNkc7QUFDN0csNkVBQTZFO0FBQzdFLDJFQUEyRTtBQUMzRSxJQUFJIiwiZmlsZSI6ImVtcGxveWVlL2VtcGxveWVlLXNlYXJjaC5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6IFwiZmluZEVtcGxveWVlXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFbXBsb3llZVNlYXJjaFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWUsIGVtcGxveWVlU2VhcmNoLCBwcm9wZXJ0eSkge1xyXG4gICAgaWYgKGVtcGxveWVlU2VhcmNoID09PSB1bmRlZmluZWQgfHwgIHByb3BlcnR5ID09PSB1bmRlZmluZWQgfHwgcHJvcGVydHkgPT09IFwiUGxlYXNlIFNlbGVjdFwiKSByZXR1cm4gdmFsdWU7XHJcbiAgICByZXR1cm4gdmFsdWUuZmlsdGVyKChlbXBsb3llZSkgPT4gKGVtcGxveWVlW3Byb3BlcnR5XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGVtcGxveWVlU2VhcmNoLnRvTG93ZXJDYXNlKCkpKSk7XHJcbiB9XHJcbn1cclxuXHJcbi8vIHRyYW5zZm9ybSh2YWx1ZSwgcGlwZUZpbHRlcikge1xyXG4vLyAgaWYgKCFwaXBlRmlsdGVyKSByZXR1cm4gdmFsdWU7XHJcbi8vICByZXR1cm4gdmFsdWUuZmlsdGVyKChlbXBsb3llZSkgPT4gKGVtcGxveWVlW1wiZW1haWxcIl0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwaXBlRmlsdGVyLnRvTG93ZXJDYXNlKCkpKSB8fFxyXG4vLyAgZW1wbG95ZWVbXCJmaXJzdE5hbWVcIl0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwaXBlRmlsdGVyLnRvTG93ZXJDYXNlKCkpIHx8XHJcbi8vICBlbXBsb3llZVtcImxhc3ROYW1lXCJdLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocGlwZUZpbHRlci50b0xvd2VyQ2FzZSgpKSk7XHJcbi8vIH1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
