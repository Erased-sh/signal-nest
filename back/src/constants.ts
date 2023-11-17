import "dotenv/config"

export const mongo_login:string=process.env.MONGO_LOGIN||"not found mongo login";
export const mongo_pass:string=process.env.MONGO_PASS||"not found mongo pass";
export const mongo_adress:string=process.env.MONGO_ADRESS||"not found mongo adress"