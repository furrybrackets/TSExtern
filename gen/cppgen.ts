export class FunctionProto {
    ret: string;
    name: string;
    params: Array<Param>;
    constructor(retVal: string, name: string, params: Array<Param>) {
        this.ret = retVal;
        this.name = name;
        this.params = params;
    };

    stringify(): string {
        let k: string = '';
        this.params.map((value, index) => {
            if (index == 0) {
                k += `${value[0]} ${value[1]}`
            } else {
                k += `, ${value[0]} ${value[1]}`;
            }
        });
        return `${this.ret} ${this.name}(${k})`;
    }
};

export type Param = [string, string];