import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./auth.model";

@Injectable()
export class AuthService {
  constructor(@InjectModel("User") private readonly userModel: Model<User>) {}

  async signup(
    userName: string,
    email: string,
    firstName: string,
    lastName: string,
  ) {
    try {
      const user = new this.userModel({ userName, email, firstName, lastName });
      const response = await user.save();

      return response.id as string;
    } catch (error) {
      console.log(error);
    }
  }
}
