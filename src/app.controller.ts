import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // comment to test git more stuff
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
