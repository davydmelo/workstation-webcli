import { Injectable } from '@angular/core';
import { Asset } from './asset';
import { Vendor } from './vendor';
import { VendorService } from './vendor.service';

@Injectable()
export class AssetService {

  agilent = new Vendor('Agilent', 1);
  tektronix = new Vendor('Tektronix', 2);

  assets: Asset[];
  vendors: Vendor[];

  constructor(vendorService: VendorService) {
    this.vendors = vendorService.getAll();

    this.assets = [
    new Asset(1, 257595, 'Osciloscópio', 'MSO-2012', this.vendors[0]),
    new Asset(2, 257596, 'Osciloscópio', 'MSO-2012', this.vendors[1]),
    new Asset(3, 257597, 'Osciloscópio', 'MSO-2012', this.vendors[0]),
    new Asset(4, 257598, 'Osciloscópio', 'MSO-2012', this.vendors[1])
  ];
   }

  getAll() {
      return this.assets;
  }

  getById(id: number): Asset {
      return this.assets.filter(asset => asset.id == id)[0];
  }
}
