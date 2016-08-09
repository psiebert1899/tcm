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
        console.log("service reached");
        var body = JSON.stringify(employee);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/employee', body, { headers: headers }).map(function (response) { return response.json(); }).catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    EmployeeService.prototype.getEmployees = function () {
        console.log("get Employees Route Reached");
        return this._http.get("http://localhost:3000/employee").map(function (response) {
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
                emps.push(employee);
            }
            return emps;
        }).catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    EmployeeService.prototype.popEmployeeDetails = function (emp) {
        console.log("service reached");
        this.popEmployee.emit(emp);
    };
    EmployeeService.prototype.selectEmployee = function (emp) {
        this.selectedEmployeeChanged.emit(emp);
    };
    EmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUN2RCxxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFDNUMseUJBQXVCLFlBQVksQ0FBQyxDQUFBO0FBQ3BDLG1CQUF5QixTQUFTLENBQUMsQ0FBQTtBQUVuQztJQUdJLHlCQUFvQixLQUFVO1FBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUY5QixnQkFBVyxHQUFDLElBQUksbUJBQVksRUFBWSxDQUFDO1FBQ3pDLDRCQUF1QixHQUFHLElBQUksbUJBQVksRUFBWSxDQUFDO0lBQ3ZCLENBQUM7SUFFakMsb0NBQVUsR0FBVixVQUFXLFFBQWlCO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFHLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNuRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLEVBQUMsSUFBSSxFQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsR0FBRyxDQUMvRSxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQzlCLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFBO0lBQ3BELENBQUM7SUFDRCxzQ0FBWSxHQUFaO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENB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b250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7RW1wbG95ZWV9IGZyb20gXCIuL2VtcGxveWVlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvUnhcIjtcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVTZXJ2aWNle1xyXG4gICAgcG9wRW1wbG95ZWU9bmV3IEV2ZW50RW1pdHRlcjxFbXBsb3llZT4oKTtcclxuICAgIHNlbGVjdGVkRW1wbG95ZWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxFbXBsb3llZT4oKTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6SHR0cCl7fVxyXG4gICAgZW1wbG95ZWVzIDogRW1wbG95ZWVbXTtcclxuICAgIGNyZWF0ZVVzZXIoZW1wbG95ZWU6RW1wbG95ZWUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VydmljZSByZWFjaGVkXCIpO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShlbXBsb3llZSk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9lbXBsb3llZScsYm9keSx7aGVhZGVyczpoZWFkZXJzfSkubWFwKFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiByZXNwb25zZS5qc29uKClcclxuICAgICAgICApLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSlcclxuICAgIH1cclxuICAgIGdldEVtcGxveWVlcygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IEVtcGxveWVlcyBSb3V0ZSBSZWFjaGVkXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9lbXBsb3llZVwiKS5tYXAoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVtcHMgID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwIDsgaTxkYXRhLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbXBsb3llZSA9IG5ldyBFbXBsb3llZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5pbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5maXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0ubGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0ucGhvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0uY291bnRyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5jaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLmRpdmlzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLmRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0ubWFuYWdlclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWUuZW1wbG95ZWVzPVtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9MDsgajwgZGF0YVtpXS5lbXBsb3llZXMubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWVlLmVtcGxveWVlcy5wdXNoKGRhdGFbaV0uZW1wbG95ZWVzW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWUucHJvamVjdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGs9IDA7IGs8ZGF0YVtpXS5wcm9qZWN0cy5sZW5ndGg7aysrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWUucHJvamVjdHMucHVzaChkYXRhW2ldLnByb2plY3RzW2tdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wcy5wdXNoKGVtcGxveWVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBlbXBzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSlcclxuICAgIH1cclxuICAgIHBvcEVtcGxveWVlRGV0YWlscyhlbXAgOiBFbXBsb3llZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXJ2aWNlIHJlYWNoZWRcIik7XHJcbiAgICAgICAgdGhpcy5wb3BFbXBsb3llZS5lbWl0KGVtcCk7XHJcbiAgICB9XHJcbiAgICBzZWxlY3RFbXBsb3llZShlbXA6RW1wbG95ZWUpe1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRFbXBsb3llZUNoYW5nZWQuZW1pdChlbXApO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
