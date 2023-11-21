import axios, { Axios, AxiosResponse } from "axios";


abstract class getOptionsBase{
    private url:string;
    private params:JSON|null;
    private paramsKey:string[]|null

    constructor (url:string,params?:JSON){
        this.url=url;
        this.params=params?(params):null
        this.paramsKey=params?(Object.keys(params)):null;
    }

    protected configurator(){
       return this.url+this.params?(this.paramsKey?(
        "?"+this.paramsKey.map((param)=>{
            "${param}=${params[param]}"
        }).join("&")
       ):""):""

    }
    abstract getJSON():Awaited<any>;
}


class JSONNoValidation extends getOptionsBase{

  constructor (url:string,params?:JSON){
      super(url,params)
  }

   public getJSON():Awaited<any> {
       return axios.get (super.configurator())
       .then((response)=>{
       return response
       })
       .catch((error)=>{
       return error
       })
   }
   
}


class JSONValidation extends getOptionsBase{
    static TOKEN:string;
    private readonly config = {
        headers: {
          'Authorization': 'Bearer '+ "wd",
        }
    }

    constructor (url:string,params?:JSON){
        super (url,params)
    }

    getJSON(): Awaited<any>{
        return axios.get(super.configurator(),this.config)
            .then((response)=>{
            return response
            })
            .catch ((err)=>{
            return err;
            })
    }
    
}