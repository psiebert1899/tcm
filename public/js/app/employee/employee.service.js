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
var http_1 = require("@angular/http");
var employee_1 = require("./employee");
var Rx_1 = require("rxjs/Rx");
var EmployeeService = (function () {
    function EmployeeService(_http) {
        this._http = _http;
        this.popEmployee = new core_1.EventEmitter();
        this.selectedEmployeeChanged = new core_1.EventEmitter();
    }
    EmployeeService.prototype.createUser = function (employee) {
        var body = JSON.stringify(employee);
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        return this._http.post("http://localhost:3000/employee", body, { headers: headers }).map(function (response) { return response.json(); }).catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    EmployeeService.prototype.getEmployees = function (query) {
        var querystring = "";
        if (query.value !== "") {
            querystring = "?type=" + query.type + "&value=" + query.value;
        }
        return this._http.get("http://localhost:3000/employee" + querystring).map(function (response) {
            var data = response.json().obj;
            var emps = [];
            for (var i = 0; i < data.length; i++) {
                var employee = new employee_1.Employee(data[i].email, data[i].image, data[i].firstName, data[i].lastName, data[i].phone, data[i].country, data[i].city, data[i].state, data[i].title, data[i].division, data[i].department, data[i].manager);
                employee.employees = [];
                for (var j = 0; j < data[i].employees.length; j++) {
                    employee.employees.push(data[i].employees[j]);
                }
                employee.projects = [];
                for (var k = 0; k < data[i].projects.length; k++) {
                    employee.projects.push(data[i].projects[k]);
                }
                employee.skills = [];
                for (var l = 0; l < data[i].skills.length; l++) {
                    employee.skills.push(data[i].skills[l]);
                }
                employee.trainings = [];
                for (var l = 0; l < data[i].skills.length; l++) {
                    employee.trainings.push(data[i].trainings[l]);
                }
                employee._id = data[i]._id;
                employee.canManageEmployees = data[i].canManageEmployees;
                employee.canManageProjects = data[i].canManageProjects;
                employee.hasManager = data[i].hasManager;
                employee.trainings = data[i].trainings;
                employee.skills = data[i].skills;
                emps.push(employee);
            }
            return emps;
        }).catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    EmployeeService.prototype.popEmployeeDetails = function (emp) {
        this.popEmployee.emit(emp);
    };
    EmployeeService.prototype.selectEmployee = function (emp) {
        this.selectedEmployeeChanged.emit(emp);
        this.selectedEmployee = emp;
    };
    EmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFrRCxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDekcscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLHlCQUF1QixZQUFZLENBQUMsQ0FBQTtBQUNwQyxtQkFBeUIsU0FBUyxDQUFDLENBQUE7QUFHbkM7SUFJSSx5QkFBb0IsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFIL0IsZ0JBQVcsR0FBRSxJQUFJLG1CQUFZLEVBQVksQ0FBQztRQUMxQyw0QkFBdUIsR0FBRyxJQUFJLG1CQUFZLEVBQVksQ0FBQztJQUVyQixDQUFDO0lBRW5DLG9DQUFVLEdBQVYsVUFBVyxRQUFrQjtRQUN6QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFHLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNuRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUMsR0FBRyxDQUNsRixVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQzlCLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxzQ0FBWSxHQUFaLFVBQWEsS0FBWTtRQUNyQixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDckIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JC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O3VCQUFBO0lBMEViLHNCQUFDO0FBQUQsQ0F6RUEsQUF5RUMsSUFBQTtBQXpFWSx1QkFBZSxrQkF5RTNCLENBQUEiLCJmaWxlIjoiZW1wbG95ZWUvZW1wbG95ZWUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtFbXBsb3llZX0gZnJvbSBcIi4vZW1wbG95ZWVcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQge1F1ZXJ5fSBmcm9tIFwiLi4vdXRpbGl0eS9xdWVyeVwiO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFbXBsb3llZVNlcnZpY2Uge1xyXG4gICAgcG9wRW1wbG95ZWU9IG5ldyBFdmVudEVtaXR0ZXI8RW1wbG95ZWU+KCk7XHJcbiAgICBzZWxlY3RlZEVtcGxveWVlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RW1wbG95ZWU+KCk7XHJcbiAgICBzZWxlY3RlZEVtcGxveWVlOiBFbXBsb3llZTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XHJcbiAgICBlbXBsb3llZXM6IEVtcGxveWVlW107XHJcbiAgICBjcmVhdGVVc2VyKGVtcGxveWVlOiBFbXBsb3llZSkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShlbXBsb3llZSk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcIkNvbnRlbnQtVHlwZVwiIDogXCJhcHBsaWNhdGlvbi9qc29uXCJ9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2VtcGxveWVlXCIsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSkubWFwKFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiByZXNwb25zZS5qc29uKClcclxuICAgICAgICApLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgICB9XHJcbiAgICBnZXRFbXBsb3llZXMocXVlcnk6IFF1ZXJ5KSB7XHJcbiAgICAgICAgbGV0IHF1ZXJ5c3RyaW5nID0gXCJcIjtcclxuICAgICAgICBpZiAocXVlcnkudmFsdWUgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcXVlcnlzdHJpbmcgPSBcIj90eXBlPVwiICsgcXVlcnkudHlwZSArIFwiJnZhbHVlPVwiICsgcXVlcnkudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9lbXBsb3llZVwiICsgcXVlcnlzdHJpbmcpLm1hcChcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XHJcbiAgICAgICAgICAgICAgICBsZXQgZW1wcyAgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW1wbG95ZWUgPSBuZXcgRW1wbG95ZWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0uZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0uaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0uZmlyc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLmxhc3ROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLnBob25lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLmNvdW50cnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0uY2l0eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5kaXZpc2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5kZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLm1hbmFnZXJcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGVtcGxveWVlLmVtcGxveWVlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YVtpXS5lbXBsb3llZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWUuZW1wbG95ZWVzLnB1c2goZGF0YVtpXS5lbXBsb3llZXNbal0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbXBsb3llZS5wcm9qZWN0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZGF0YVtpXS5wcm9qZWN0cy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZS5wcm9qZWN0cy5wdXNoKGRhdGFbaV0ucHJvamVjdHNba10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbXBsb3llZS5za2lsbHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IGRhdGFbaV0uc2tpbGxzLmxlbmd0aDsgbCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWVlLnNraWxscy5wdXNoKGRhdGFbaV0uc2tpbGxzW2xdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWUudHJhaW5pbmdzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCBkYXRhW2ldLnNraWxscy5sZW5ndGg7IGwrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZS50cmFpbmluZ3MucHVzaChkYXRhW2ldLnRyYWluaW5nc1tsXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVtcGxveWVlLl9pZCA9IGRhdGFbaV0uX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgIGVtcGxveWVlLmNhbk1hbmFnZUVtcGxveWVlcyA9IGRhdGFbaV0uY2FuTWFuYWdlRW1wbG95ZWVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGVtcGxveWVlLmNhbk1hbmFnZVByb2plY3RzID0gZGF0YVtpXS5jYW5NYW5hZ2VQcm9qZWN0cztcclxuICAgICAgICAgICAgICAgICAgICBlbXBsb3llZS5oYXNNYW5hZ2VyID0gZGF0YVtpXS5oYXNNYW5hZ2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIGVtcGxveWVlLnRyYWluaW5ncyA9IGRhdGFbaV0udHJhaW5pbmdzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZS5za2lsbHMgPSBkYXRhW2ldLnNraWxscztcclxuICAgICAgICAgICAgICAgICAgICBlbXBzLnB1c2goZW1wbG95ZWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVtcHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9wRW1wbG95ZWVEZXRhaWxzKGVtcDogRW1wbG95ZWUpIHtcclxuICAgICAgICB0aGlzLnBvcEVtcGxveWVlLmVtaXQoZW1wKTtcclxuICAgIH1cclxuICAgIHNlbGVjdEVtcGxveWVlKGVtcDogRW1wbG95ZWUpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRW1wbG95ZWVDaGFuZ2VkLmVtaXQoZW1wKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRW1wbG95ZWUgPSBlbXA7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
