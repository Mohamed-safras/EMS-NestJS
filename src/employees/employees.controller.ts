import { Body, Controller, Get, Post } from "@nestjs/common";
import { EmployeeService } from "./employees.service";

@Controller("api/v1/employees")
export class employeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get("emp")
  getEmp() {
    return this.employeeService.getEmp();
  }

  @Post("emp")
  setEmp(@Body("name") name: string, @Body("salary") salary: number) {
    return this.employeeService.setEmp({ name, salary });
  }
}
