abstract class OptionsBase{
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
}