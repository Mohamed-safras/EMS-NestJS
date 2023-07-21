import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.DATA_BASE_URI ||
        "mongodb+srv://Mohamed_Safras:Safras6747@cluster0.przlotk.mongodb.net/nestjs-demo?retryWrites=true&w=majority",
    ),
  ],
})
export class DatabaseModule {}
