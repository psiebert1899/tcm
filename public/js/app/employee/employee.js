"use strict";
var Employee = (function () {
    function Employee(email, image, firstName, lastName, phone, country, city, state, title, division, department, manager, employees, projects, canManageEmployees, canManageProjects, hasManager, projectManagerFor) {
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
        this.manager = manager;
        this.employees = employees;
        this.projects = projects;
        this.canManageEmployees = canManageEmployees;
        this.canManageProjects = canManageProjects;
        this.hasManager = hasManager;
        this.projectManagerFor = projectManagerFor;
    }
    return Employee;
}());
exports.Employee = Employee;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUNJLGtCQUNPLEtBQVksRUFDWixLQUFZLEVBQ1osU0FBZ0IsRUFDaEIsUUFBZSxFQUNmLEtBQVksRUFDWixPQUFjLEVBQ2QsSUFBVyxFQUNYLEtBQWMsRUFDZCxLQUFjLEVBQ2QsUUFBaUIsRUFDakIsVUFBbUIsRUFDbkIsT0FBZ0IsRUFDaEIsU0FBcUIsRUFDckIsUUFBb0IsRUFDcEIsa0JBQTZCLEVBQzdCLGlCQUE0QixFQUM1QixVQUFxQixFQUNyQixpQkFBNkI7UUFqQjdCLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osY0FBUyxHQUFULFNBQVMsQ0FBTztRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFPO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLFlBQU8sR0FBUCxPQUFPLENBQU87UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFPO1FBQ1gsVUFBSyxHQUFMLEtBQUssQ0FBUztRQUNkLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGVBQVUsR0FBVixVQUFVLENBQVM7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFZO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFXO1FBQzdCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBVztRQUM1QixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3JCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBWTtJQUNsQyxDQUFDO0lBQ1AsZUFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlksZ0JBQVEsV0FxQnBCLENBQUEiLCJmaWxlIjoiZW1wbG95ZWUvZW1wbG95ZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRW1wbG95ZWV7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbWFpbDpzdHJpbmcsXHJcbiAgICBwdWJsaWMgaW1hZ2U6c3RyaW5nLFxyXG4gICAgcHVibGljIGZpcnN0TmFtZTpzdHJpbmcsXHJcbiAgICBwdWJsaWMgbGFzdE5hbWU6c3RyaW5nLFxyXG4gICAgcHVibGljIHBob25lOnN0cmluZyxcclxuICAgIHB1YmxpYyBjb3VudHJ5OnN0cmluZyxcclxuICAgIHB1YmxpYyBjaXR5OnN0cmluZyxcclxuICAgIHB1YmxpYyBzdGF0ZSA/OnN0cmluZyxcclxuICAgIHB1YmxpYyB0aXRsZSA/OnN0cmluZyxcclxuICAgIHB1YmxpYyBkaXZpc2lvbiA/OnN0cmluZyxcclxuICAgIHB1YmxpYyBkZXBhcnRtZW50ID86c3RyaW5nLFxyXG4gICAgcHVibGljIG1hbmFnZXIgPzpzdHJpbmcsXHJcbiAgICBwdWJsaWMgZW1wbG95ZWVzID86IHN0cmluZ1tdLFxyXG4gICAgcHVibGljIHByb2plY3RzID86IHN0cmluZ1tdLFxyXG4gICAgcHVibGljIGNhbk1hbmFnZUVtcGxveWVlcyA/OiBib29sZWFuLFxyXG4gICAgcHVibGljIGNhbk1hbmFnZVByb2plY3RzID86IGJvb2xlYW4sXHJcbiAgICBwdWJsaWMgaGFzTWFuYWdlciA/OiBib29sZWFuLFxyXG4gICAgcHVibGljIHByb2plY3RNYW5hZ2VyRm9yID86IHN0cmluZ1tdXHJcbiAgICApe31cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
