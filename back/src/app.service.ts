import { Injectable } from '@nestjs/common';
import { mongo_login } from './constants';
import { encryption } from './common';
import { gain } from './timetables';



@Injectable()
export class AppService {
  async getHello(): Promise<string> {
  
    return gain().toString();
  }
  
}