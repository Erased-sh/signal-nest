import axios from "axios";

type request="POST"|"PUT"|"PATCH"



class Mutate extends OptionsBase{
    
    private type:request;
    private data:JSON;
    private validate:boolean;

    private readonly actions={
        "POST": this.postData(),
        "PUT": this.putData(),
        "PATCH":this.patchData(),
    }

    constructor (url:string,type:request,data:JSON,validate:boolean,params?:JSON){
    super(url,params)
    this.type=type;
    this.data=data;
    this.validate=validate;
}

    private postData() {
    axios.post(this.configurator(),this.data).then((response)=>{
      return response
    })
    .catch((err)=>{
        return err
    })
    }

    private putData() {
    return axios.put(this.configurator(),this.data).then((response)=>{
        return response
    }).catch((err)=>{
        return err;
    })
    }

    private patchData() {
        return axios.patch(this.configurator(),this.data).then((response)=>{
            return response
        }).catch((err)=>{
            return err;
        })
    }
    

    public async sendMutation(){
        return await this.actions[this.type]
    }

}