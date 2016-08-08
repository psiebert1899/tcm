"use strict";
var Employee = (function () {
    function Employee(email, image, firstName, lastName, phone, country, city, state, title, division, department, manager, employees, projects, canManageEmployees, canManageProjects, hasManager, projectManagerFor, _id) {
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
        this._id = _id;
    }
    return Employee;
}());
exports.Employee = Employee;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxveWVlL2VtcGxveWVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUNJLGtCQUNPLEtBQVksRUFDWixLQUFZLEVBQ1osU0FBZ0IsRUFDaEIsUUFBZSxFQUNmLEtBQVksRUFDWixPQUFjLEVBQ2QsSUFBVyxFQUNYLEtBQWMsRUFDZCxLQUFjLEVBQ2QsUUFBaUIsRUFDakIsVUFBbUIsRUFDbkIsT0FBZ0IsRUFDaEIsU0FBcUIsRUFDckIsUUFBb0IsRUFDcEIsa0JBQTZCLEVBQzdCLGlCQUE0QixFQUM1QixVQUFxQixFQUNyQixpQkFBNkIsRUFDN0IsR0FBYTtRQWxCYixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLGNBQVMsR0FBVCxTQUFTLENBQU87UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBTztRQUNmLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWixZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBTztRQUNYLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxVQUFLLEdBQUwsS0FBSyxDQUFTO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFTO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBWTtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQ3BCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBVztRQUM3QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQVc7UUFDNUIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUNyQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQVk7UUFDN0IsUUFBRyxHQUFILEdBQUcsQ0FBVTtJQUNsQixDQUFDO0lBQ1AsZUFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0QlksZ0JBQVEsV0FzQnBCLENBQUEiLCJmaWxlIjoiZW1wbG95ZWUvZW1wbG95ZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRW1wbG95ZWV7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbWFpbDpzdHJpbmcsXHJcbiAgICBwdWJsaWMgaW1hZ2U6c3RyaW5nLFxyXG4gICAgcHVibGljIGZpcnN0TmFtZTpzdHJpbmcsXHJcbiAgICBwdWJsaWMgbGFzdE5hbWU6c3RyaW5nLFxyXG4gICAgcHVibGljIHBob25lOnN0cmluZyxcclxuICAgIHB1YmxpYyBjb3VudHJ5OnN0cmluZyxcclxuICAgIHB1YmxpYyBjaXR5OnN0cmluZyxcclxuICAgIHB1YmxpYyBzdGF0ZSA/OnN0cmluZyxcclxuICAgIHB1YmxpYyB0aXRsZSA/OnN0cmluZyxcclxuICAgIHB1YmxpYyBkaXZpc2lvbiA/OnN0cmluZyxcclxuICAgIHB1YmxpYyBkZXBhcnRtZW50ID86c3RyaW5nLFxyXG4gICAgcHVibGljIG1hbmFnZXIgPzpzdHJpbmcsXHJcbiAgICBwdWJsaWMgZW1wbG95ZWVzID86IHN0cmluZ1tdLFxyXG4gICAgcHVibGljIHByb2plY3RzID86IHN0cmluZ1tdLFxyXG4gICAgcHVibGljIGNhbk1hbmFnZUVtcGxveWVlcyA/OiBib29sZWFuLFxyXG4gICAgcHVibGljIGNhbk1hbmFnZVByb2plY3RzID86IGJvb2xlYW4sXHJcbiAgICBwdWJsaWMgaGFzTWFuYWdlciA/OiBib29sZWFuLFxyXG4gICAgcHVibGljIHByb2plY3RNYW5hZ2VyRm9yID86IHN0cmluZ1tdLFxyXG4gICAgcHVibGljIF9pZCA/OiBzdHJpbmdcclxuICAgICl7fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
