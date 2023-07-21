import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("api/v1/auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  signUp(
    @Body("userName") userName: string,
    @Body("email") email: string,
    @Body("firstName") firstName: string,
    @Body("lastName") lastName: string,
  ) {
    return this.authService.signup(userName, email, firstName, lastName);
  }
}
