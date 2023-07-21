import { Injectable } from "@nestjs/common";

export interface Emp {
  name: string;
  salary: number;
}

@Injectable()
export class EmployeeService {
  private employees: Array<Emp> = [];

  getEmp() {
    return this.employees;
  }

  setEmp(emp: Emp) {
    this.employees = [...this.employees, emp];
    console.log(this.employees);
    return this.employees;
  }
}
