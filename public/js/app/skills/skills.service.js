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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var SkillsService = (function () {
    function SkillsService(_http) {
        this._http = _http;
    }
    SkillsService.prototype.addSkill = function (skill) {
        var body = JSON.stringify(skill);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/skill', body, { headers: headers }).map(function (response) { return response.json(); }).catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    SkillsService.prototype.getSkillNames = function () {
        return this._http.get("http://localhost:3000/skills").map(function (response) {
            var data = response.json().obj;
            var names;
            for (var x = 0; x < data.length; x++) {
                var s = data[x].name;
            }
            return skills;
        }).catch(function (error) { return Rx_1.Observable.throw(error.json()); });
    };
    SkillsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SkillsService);
    return SkillsService;
}());
exports.SkillsService = SkillsService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy9za2lsbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6QyxtQkFBeUIsU0FBUyxDQUFDLENBQUE7QUFHbkM7SUFDSSx1QkFBb0IsS0FBVTtRQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7SUFBRSxDQUFDO0lBQ2pDLGdDQUFRLEdBQVIsVUFBUyxLQUFXO1FBQ2hCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUcsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBQyxJQUFJLEVBQUMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQzVFLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FDOUIsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUE7SUFDcEQsQ0FBQztJQUNELHFDQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQyxHQUFHLENBQ3JELFVBQUEsUUFBUTtZQUNKLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDakMsSUFBSSxLQUFnQixDQUFDO1lBQ3JCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLENBQUM7WUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUMsQ0FDSixDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQTtJQUNwRCxDQUFDO0lBdEJMO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUF1QmIsb0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLHFCQUFhLGdCQXNCekIsQ0FBQSIsImZpbGUiOiJza2lsbHMvc2tpbGxzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtFbXBsb3llZX0gZnJvbSBcIi4uL2VtcGxveWVlL2VtcGxveWVlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHtTa2lsbH0gZnJvbSBcIi4vc2tpbGxcIjtcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2tpbGxzU2VydmljZXtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6SHR0cCl7fVxyXG4gICAgYWRkU2tpbGwoc2tpbGw6U2tpbGwpe1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShza2lsbCk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9za2lsbCcsYm9keSx7aGVhZGVyczpoZWFkZXJzfSkubWFwKFxyXG4gICAgICAgICAgICByZXNwb25zZSA9PiByZXNwb25zZS5qc29uKClcclxuICAgICAgICApLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSlcclxuICAgIH1cclxuICAgIGdldFNraWxsTmFtZXMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2tpbGxzXCIpLm1hcChcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZXMgOiBzdHJpbmdbXTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgeD0wO3g8ZGF0YS5sZW5ndGg7eCsrKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcz1kYXRhW3hdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2tpbGxzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKS5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
