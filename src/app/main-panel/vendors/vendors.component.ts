import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../vendor.service';
import { Vendor } from '../../vendor';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  vendors: Vendor[] = [];

  constructor(private vendorService: VendorService)
  {

  }

  ngOnInit()
  {
      this.vendors = this.vendorService.getAll();
  }

}
