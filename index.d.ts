
declare namespace Struct {
    export class Struct {
        chars(name: string, length: number, encoding?: string): Struct;

        allocate(): void;

        set(name: string, value: number);
        set(name: string, value: string);
        get(name: string) : number;
        get(name: string) : any;

        word32Ule(name: string, length: number) : Struct;
        _setBuff(buffer: Buffer);

        buffer(): Buffer;
    }
}

export = Struct;