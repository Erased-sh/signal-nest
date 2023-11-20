import { WEBFACTORY } from "./parser";
//DepInject
export function gain(){
    return new WEBFACTORY("TELEGRAM").returnValue().connect()
}