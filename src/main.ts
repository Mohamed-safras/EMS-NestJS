import { NestFactory } from "@nestjs/core";
import { config } from "dotenv";
import { AppModule } from "./app.module";

async function bootstrap() {
  const result = config();
  if (result.error) {
    throw result.error;
  }
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.DOMAIN_URI, () => {
    console.log(`server started on PORT ${process.env.DOMAIN_URI}`);
  });
}
bootstrap();
