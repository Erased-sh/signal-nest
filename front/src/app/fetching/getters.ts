import axios, { Axios, AxiosResponse } from "axios";


class JSONNoValidation extends OptionsBase{

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


class JSONValidation extends OptionsBase{
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