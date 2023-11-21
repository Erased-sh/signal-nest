import axios from "axios"

class deleteMutations extends OptionsBase{
    constructor (url:string,params?:JSON){
        super (url,params)
    }
    delete(){
        axios.delete(this.configurator())
    }
}