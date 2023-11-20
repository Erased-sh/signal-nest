interface searchParams {
    year: string;
    season: string;
    group: string;
}

type exactParams={
    name?:string,
    surname?:string,
    secname?:string
}

interface IBuilderProto {
    // Определите методы интерфейса здесь, если необходимо
    clone(): IBuilderProto; // Метод clone должен возвращать IBuilderProto
    setGroup(group: string): IBuilderProto; // Метод setGroup принимает строку и возвращает IBuilderProto
    setFIO({name,surname,secname}:exactParams): IBuilderProto; // Метод setFIO принимает три строки и возвращает IBuilderProto
    mark:()=>void;
}

class BuilderProto implements IBuilderProto {
    private year: string;
    private season: string;
    private group: string;

    private surname: string|undefined = ''; 
    private name: string|undefined = '';
    private secname: string |undefined= '';

    constructor(params: searchParams) {
        const { year, season, group } = params;
        this.year = year;
        this.season = season;
        this.group=group;
    }

   

    clone(): IBuilderProto {
        return new BuilderProto({
            year: this.year,
            season: this.season,
            group: this.group,
        }); 
    }

    setGroup(group: string): IBuilderProto {
        // Устанавливаем новое значение для поля group
        this.group = group;
        // Возвращаем this для поддержки цепочки вызовов методов
        return this;
    }

    setFIO({name,surname,secname}:exactParams): IBuilderProto {
        // Устанавливаем значения для полей surname, name и secname
        this.surname = surname;
        this.name = name;
        this.secname = secname;
        // Возвращаем this для поддержки цепочки вызовов методов
        return this;
    }

    public mark() {
        type NonNullableExactParams = {
            [K in keyof exactParams]-?: NonNullable<exactParams[K]>;
        };
        type user = NonNullableExactParams;

        const modificationData:user={
            name: this.name||"",
            surname: this.surname||"",
            secname: this.secname||""
        }
         
    }


}



const builder = new BuilderProto({ year: "2023", season: "Summer", group: "A" });


const clone = builder.clone();

builder.setGroup("B").setFIO({
    name:"user",
    surname:"subuser",
    secname:"secuser"
});


