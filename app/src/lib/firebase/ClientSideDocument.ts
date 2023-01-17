import {DocumentData} from "./DocumentData";

export class ClientSideDocument<T = DocumentData>
{
    public readonly id: string;
    private readonly _data: T;

    constructor(id: string, data: T)
    {
        this.id = id;
        this._data = data;
    }

    public data()
    {
        return this._data;
    }
}
