import { Injectable } from '@angular/core';
import { Vendor } from './vendor'

@Injectable()
export class VendorService {

  vendors: Vendor[] = [
    new Vendor('Agilent', 1),
    new Vendor('Minipa', 2)
  ];

  constructor() { }

  getAll()
  {
      return this.vendors;
  }

}
