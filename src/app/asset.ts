import { Vendor } from './vendor';

export class Asset {
    id: number;
    code: number;
    name: string;
    model: string;
    vendor: Vendor;

    constructor(id: number, code: number, name: string, model: string, vendor: Vendor) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.model = model;
        this.vendor = vendor;
    }
}
