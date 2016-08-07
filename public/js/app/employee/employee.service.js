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
    EmployeeService.prototype.getEmployees = function (query) {
        console.log(query);
        var querystring = '';
        if (query.value != '') {
            querystring = '?type=' + query.type + "&value=" + query.value;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUN2RCxxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFDNUMseUJBQXVCLFlBQVksQ0FBQyxDQUFBO0FBQ3BDLG1CQUF5QixTQUFTLENBQUMsQ0FBQTtBQUduQztJQUdJLHlCQUFvQixLQUFVO1FBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUY5QixnQkFBVyxHQUFDLElBQUksbUJBQVksRUFBWSxDQUFDO1FBQ3pDLDRCQUF1QixHQUFHLElBQUksbUJBQVksRUFBWSxDQUFDO0lBQ3ZCLENBQUM7SUFFakMsb0NBQVUsR0FBVixVQUFXLFFBQWlCO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFHLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNuRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLEVBQUMsSUFBSSxFQUFDLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsR0FBRyxDQUMvRSxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQzlCLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFBO0lBQ3BELENBQUM7SUFDRCxzQ0FBWSxHQUFaLFVBQWEsS0FBVztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLElBQUksV0FB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dkIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBNURMO1FBQUMsaUJBQVUsRUFBRTs7dUJBQUE7SUE2RGIsc0JBQUM7QUFBRCxDQTVEQSxBQTREQyxJQUFBO0FBNURZLHVCQUFlLGtCQTREM0IsQ0FBQSIsImZpbGUiOiJlbXBsb3llZS9lbXBsb3llZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtFbXBsb3llZX0gZnJvbSBcIi4vZW1wbG95ZWVcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQge1F1ZXJ5fSBmcm9tIFwiLi4vdXRpbGl0eS9xdWVyeVwiO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFbXBsb3llZVNlcnZpY2V7XHJcbiAgICBwb3BFbXBsb3llZT1uZXcgRXZlbnRFbWl0dGVyPEVtcGxveWVlPigpO1xyXG4gICAgc2VsZWN0ZWRFbXBsb3llZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEVtcGxveWVlPigpO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDpIdHRwKXt9XHJcbiAgICBlbXBsb3llZXMgOiBFbXBsb3llZVtdO1xyXG4gICAgY3JlYXRlVXNlcihlbXBsb3llZTpFbXBsb3llZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXJ2aWNlIHJlYWNoZWRcIik7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KGVtcGxveWVlKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2VtcGxveWVlJyxib2R5LHtoZWFkZXJzOmhlYWRlcnN9KS5tYXAoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICkuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKVxyXG4gICAgfVxyXG4gICAgZ2V0RW1wbG95ZWVzKHF1ZXJ5OlF1ZXJ5KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhxdWVyeSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5c3RyaW5nPScnO1xyXG4gICAgICAgIGlmKHF1ZXJ5LnZhbHVlIT0nJyl7XHJcbiAgICAgICAgICAgIHF1ZXJ5c3RyaW5nPSc/dHlwZT0nK3F1ZXJ5LnR5cGUrXCImdmFsdWU9XCIrcXVlcnkudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9lbXBsb3llZVwiK3F1ZXJ5c3RyaW5nKS5tYXAoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVtcHMgID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwIDsgaTxkYXRhLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbXBsb3llZSA9IG5ldyBFbXBsb3llZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5pbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5maXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0ubGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0ucGhvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0uY291bnRyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5jaXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLmRpdmlzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLmRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0ubWFuYWdlclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWUuZW1wbG95ZWVzPVtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9MDsgajwgZGF0YVtpXS5lbXBsb3llZXMubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWVlLmVtcGxveWVlcy5wdXNoKGRhdGFbaV0uZW1wbG95ZWVzW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWUucHJvamVjdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGs9IDA7IGs8ZGF0YVtpXS5wcm9qZWN0cy5sZW5ndGg7aysrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWUucHJvamVjdHMucHVzaChkYXRhW2ldLnByb2plY3RzW2tdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wcy5wdXNoKGVtcGxveWVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBlbXBzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSlcclxuICAgIH1cclxuXHJcbiAgICBwb3BFbXBsb3llZURldGFpbHMoZW1wIDogRW1wbG95ZWUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VydmljZSByZWFjaGVkXCIpO1xyXG4gICAgICAgIHRoaXMucG9wRW1wbG95ZWUuZW1pdChlbXApO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0RW1wbG95ZWUoZW1wOkVtcGxveWVlKXtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRW1wbG95ZWVDaGFuZ2VkLmVtaXQoZW1wKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
