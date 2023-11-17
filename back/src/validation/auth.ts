import { Length } from "class-validator";

export class AuthValidate{
    @Length(5)
    login: string;
    @Length(6)
    password:string;
}