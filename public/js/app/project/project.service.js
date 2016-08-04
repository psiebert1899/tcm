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
var project_1 = require("./project");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var core_1 = require("@angular/core");
var ProjectService = (function () {
    function ProjectService(_http) {
        this._http = _http;
    }
    ProjectService.prototype.getProjects = function () {
        return this._http.get('http://localhost:3000/project').map(function (response) {
            var data = response.json().obj;
            var projects = [];
            for (var x = 0; x < data.length; x++) {
                var project = new project_1.Project(data[x].organization, data[x].name, data[x].image, data[x].manager);
                projects.push(project);
            }
            return projects;
        }).catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    ProjectService.prototype.getProject = function (name) {
    };
    ProjectService.prototype.newProject = function (project) {
        var body = JSON.stringify(project);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/project', body, { headers: headers }).map(function (response) { return response.json(); }).catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    ProjectService.prototype.editProject = function () {
    };
    ProjectService.prototype.deleteProject = function () {
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QvcHJvamVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFDbEMscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLG1CQUF5QixTQUFTLENBQUMsQ0FBQTtBQUNuQyxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFHekM7SUFDSSx3QkFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87SUFBRSxDQUFDO0lBQ25DLG9DQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQyxHQUFHLENBQ3RELFVBQUEsUUFBUTtZQUNKLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDakMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUMzQixJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQ3JCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQ3BCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ1osSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDYixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUNsQixDQUFBO2dCQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0IsQ0FBQztZQUNELE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDcEIsQ0FBQyxDQUNKLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxtQ0FBVSxHQUFWLFVBQVcsSUFBVztJQUV0QixDQUFDO0lBQ0QsbUNBQVUsR0FBVixVQUFXLE9BQWU7UUFDdEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFNLE9BQU8sR0FBQyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRyxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFDLElBQUksRUFBQyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FDOUUsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUM5QixDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0Qsb0NBQVcsR0FBWDtJQUVBLENBQUM7SUFDRCxzQ0FBYSxHQUFiO0lBRUEsQ0FBQztJQXBDTDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBcUNiLHFCQUFDO0FBQUQsQ0FwQ0EsQUFvQ0MsSUFBQTtBQXBDWSxzQkFBYyxpQkFvQzFCLENBQUEiLCJmaWxlIjoicHJvamVjdC9wcm9qZWN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Byb2plY3R9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IHtIZWFkZXJzLCBIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2plY3RTZXJ2aWNle1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cCA6IEh0dHApe31cclxuICAgIGdldFByb2plY3RzKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcHJvamVjdCcpLm1hcChcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCB4PTA7eDxkYXRhLmxlbmd0aDt4Kyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbeF0ub3JnYW5pemF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW3hdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbeF0uaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbeF0ubWFuYWdlclxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKS5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gICAgfVxyXG4gICAgZ2V0UHJvamVjdChuYW1lOnN0cmluZyl7XHJcblxyXG4gICAgfVxyXG4gICAgbmV3UHJvamVjdChwcm9qZWN0OlByb2plY3Qpe1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0KTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzPW5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wcm9qZWN0Jyxib2R5LHtoZWFkZXJzOmhlYWRlcnN9KS5tYXAoXHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICkuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICAgIH1cclxuICAgIGVkaXRQcm9qZWN0KCl7XHJcblxyXG4gICAgfVxyXG4gICAgZGVsZXRlUHJvamVjdCgpe1xyXG5cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
