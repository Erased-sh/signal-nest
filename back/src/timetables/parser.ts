import { error } from "console";
import { NEVER } from "rxjs";

enum URL{
    standart="localhost",telegram="external"
}

type ORIGIN = OFFICIAL_web | TELEGRAM_web;
type HTTP_PROPS = {
    url: string;
    limit?: number;
    padding?: number;
}

type UserINPUT = "PE" | "TELEGRAM";
type CASE_ACTIONS={
    returnfunc:<T>()=>T;
}

const CASE_IMPL:Record<UserINPUT,CASE_ACTIONS>={
    PE: {
        returnfunc: function <T>(): T {
            return new OFFICIAL_web({url:URL.standart}) as T
        }
    },
    TELEGRAM: {
        returnfunc: function <T>(): T {
            return new TELEGRAM_web({url:URL.telegram}) as T
        }
    }
}






abstract class WebParcerAbstract {
    private url: HTTP_PROPS["url"];
    private limit: HTTP_PROPS["limit"];
    private padding: HTTP_PROPS["padding"];

    constructor(props: HTTP_PROPS) {
        const { url, limit = 0, padding = 0 } = props;
        this.url = url;
        this.limit = limit||0;
        this.padding = padding||0;
    }

    abstract connect: () => void;
    abstract disconnect: () => void;
}

export class WEBFACTORY {
    private readonly HTTP_STAT="200"
    private webstiteType: ORIGIN

    constructor(website: UserINPUT) {
       this.webstiteType= CASE_IMPL[website].returnfunc()
    }


    public returnValue():ORIGIN {
        return this.webstiteType
     }

}

class OFFICIAL_web extends WebParcerAbstract {
    connect = () => {
     //Implement
    }
    disconnect = () => {
        // Implementation for disconnect method
    }
}

class TELEGRAM_web extends WebParcerAbstract {
    connect = () => {
        // Implementation for connect method
    }
    disconnect = () => {
        // Implementation for disconnect method
    }
}
