import axios from "axios";

type request="POST"|"PUT"

class Mutate extends OptionsBase{
    private type:request;
    private data:JSON;
    private validate:boolean;

    constructor (url:string,type:request,data:JSON,validate:boolean,params?:JSON){
    super(url,params)
    this.type=type;
    this.data=data;
    this.validate=validate;
}

    private postData(){
    axios.post(this.configurator(),this.data).then((response)=>{
      return response
    })
    .catch((err)=>{
        return err
    })
    }

    private putData(){
    return axios.put(this.configurator(),this.data).then((response)=>{
        return response
    }).catch((err)=>{
        return err;
    })
    }

    public sendMutation(){
        return this.type==="POST"?
        this.postData():
        this.putData()
    }



}