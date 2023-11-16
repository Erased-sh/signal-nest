import { Controller, Get, HttpCode } from "@nestjs/common";

@Controller("profile")

export class ProfileController{

@Get()
@HttpCode(200)
testthis(): string{
return "nothing"
}

}