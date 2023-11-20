import { Injectable } from '@nestjs/common';
import { mongo_login } from './constants';
import { encryption } from './common';



@Injectable()
export class AppService {
  async getHello(): Promise<string> {
  
    return await encryption.hashPassword(mongo_login);
  }
  
}