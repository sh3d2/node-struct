
declare namespace Struct {
    export class Struct {
        chars(name: string, length: number, encoding?: string): Struct;

        allocate(): void;

        set(name: string, value: number);
        set(name: string, value: string);

        word32Ule(name: string, length: number);

        buffer(): Buffer;
    }
}

export = Struct;