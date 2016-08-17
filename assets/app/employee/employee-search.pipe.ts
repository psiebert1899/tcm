import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "findEmployee"
})

export class EmployeeSearchPipe {
  transform(value, pipeFilter): any {
    if (pipeFilter === undefined) return value;
    return value.filter(employee => employee.email.includes(pipeFilter) || employee.firstName.includes(pipeFilter));
  }
}
