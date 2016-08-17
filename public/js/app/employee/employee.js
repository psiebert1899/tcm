"use strict";
var Employee = (function () {
    function Employee(email, image, firstName, lastName, phone, country, city, state, title, division, department, canManageEmployees, canManageProjects, hasManager, manager, employees, projects, projectManagerFor, trainings, skills, _id) {
        this.email = email;
        this.image = image;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.country = country;
        this.city = city;
        this.state = state;
        this.title = title;
        this.division = division;
        this.department = department;
        this.canManageEmployees = canManageEmployees;
        this.canManageProjects = canManageProjects;
        this.hasManager = hasManager;
        this.manager = manager;
        this.employees = employees;
        this.projects = projects;
        this.projectManagerFor = projectManagerFor;
        this.trainings = trainings;
        this.skills = skills;
        this._id = _id;
    }
    return Employee;
}());
exports.Employee = Employee;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQTtJQUNJLGtCQUNPLEtBQVksRUFDWixLQUFZLEVBQ1osU0FBZ0IsRUFDaEIsUUFBZSxFQUNmLEtBQVksRUFDWixPQUFjLEVBQ2QsSUFBVyxFQUNYLEtBQWMsRUFDZCxLQUFjLEVBQ2QsUUFBaUIsRUFDakIsVUFBbUIsRUFDbkIsa0JBQTZCLEVBQzdCLGlCQUE0QixFQUM1QixVQUFxQixFQUNyQixPQUFnQixFQUNoQixTQUFxQixFQUNyQixRQUFvQixFQUNwQixpQkFBNkIsRUFDN0IsU0FBdUIsRUFDdkIsTUFBaUIsRUFDakIsR0FBYTtRQXBCYixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLGNBQVMsR0FBVCxTQUFTLENBQU87UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBTztRQUNmLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBTztRQUNYLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFTO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFTO1FBQ25CLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBVztRQUM3QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQVc7UUFDNUIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQVk7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUNwQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQVk7UUFDN0IsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLFFBQUcsR0FBSCxHQUFHLENBQVU7SUFDbEIsQ0FBQztJQUNQLGVBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLGdCQUFRLFdBd0JwQixDQUFBIiwiZmlsZSI6ImVtcGxveWVlL2VtcGxveWVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTa2lsbH0gZnJvbSBcIi4uL3NraWxscy9za2lsbFwiO1xyXG5pbXBvcnQge1RyYWluaW5nfSBmcm9tIFwiLi4vdHJhaW5pbmcvdHJhaW5pbmdcIjtcclxuZXhwb3J0IGNsYXNzIEVtcGxveWVle1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZW1haWw6c3RyaW5nLFxyXG4gICAgcHVibGljIGltYWdlOnN0cmluZyxcclxuICAgIHB1YmxpYyBmaXJzdE5hbWU6c3RyaW5nLFxyXG4gICAgcHVibGljIGxhc3ROYW1lOnN0cmluZyxcclxuICAgIHB1YmxpYyBwaG9uZTpzdHJpbmcsXHJcbiAgICBwdWJsaWMgY291bnRyeTpzdHJpbmcsXHJcbiAgICBwdWJsaWMgY2l0eTpzdHJpbmcsXHJcbiAgICBwdWJsaWMgc3RhdGUgPzpzdHJpbmcsXHJcbiAgICBwdWJsaWMgdGl0bGUgPzpzdHJpbmcsXHJcbiAgICBwdWJsaWMgZGl2aXNpb24gPzpzdHJpbmcsXHJcbiAgICBwdWJsaWMgZGVwYXJ0bWVudCA/OnN0cmluZyxcclxuICAgIHB1YmxpYyBjYW5NYW5hZ2VFbXBsb3llZXMgPzogYm9vbGVhbixcclxuICAgIHB1YmxpYyBjYW5NYW5hZ2VQcm9qZWN0cyA/OiBib29sZWFuLFxyXG4gICAgcHVibGljIGhhc01hbmFnZXIgPzogYm9vbGVhbixcclxuICAgIHB1YmxpYyBtYW5hZ2VyID86c3RyaW5nLFxyXG4gICAgcHVibGljIGVtcGxveWVlcyA/OiBzdHJpbmdbXSxcclxuICAgIHB1YmxpYyBwcm9qZWN0cyA/OiBzdHJpbmdbXSxcclxuICAgIHB1YmxpYyBwcm9qZWN0TWFuYWdlckZvciA/OiBzdHJpbmdbXSxcclxuICAgIHB1YmxpYyB0cmFpbmluZ3MgPzogVHJhaW5pbmdbXSxcclxuICAgIHB1YmxpYyBza2lsbHMgPzogU2tpbGxbXSxcclxuICAgIHB1YmxpYyBfaWQgPzogc3RyaW5nXHJcbiAgICApe31cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
