import { Module } from "@nestjs/common";
import { employeeController } from "./employees.controller";
import { EmployeeService } from "./employees.service";

@Module({
  providers: [EmployeeService],
  controllers: [employeeController],
})
export class EmployeesModule {}
