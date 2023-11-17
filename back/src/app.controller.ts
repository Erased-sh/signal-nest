import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthValidate } from './validation/auth';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }

  @Post()
  validateSchema(@Body() authValidate:AuthValidate){
    console.log(authValidate.login)
    return "authValidate passed"
  }
}
