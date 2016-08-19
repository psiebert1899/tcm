import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "findEmployee"
})

export class EmployeeSearchPipe implements PipeTransform {
  transform(value, employeeSearch, property) {
    if (employeeSearch === undefined ||  property === undefined || property === "Please Select") return value;
    return value.filter((employee) => (employee[property].toLowerCase().includes(employeeSearch.toLowerCase())));
 }
}

// transform(value, pipeFilter) {
//  if (!pipeFilter) return value;
//  return value.filter((employee) => (employee["email"].toLowerCase().includes(pipeFilter.toLowerCase())) ||
//  employee["firstName"].toLowerCase().includes(pipeFilter.toLowerCase()) ||
//  employee["lastName"].toLowerCase().includes(pipeFilter.toLowerCase()));
// }
