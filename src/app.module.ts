import { Module } from "@nestjs/common";
import { AuthModule } from "./Auth/auth.module";
import { DatabaseModule } from "./DB/database.module";
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [DatabaseModule, AuthModule, EmployeesModule],
})
export class AppModule {}
