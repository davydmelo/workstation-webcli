import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { VendorService } from '../../vendor.service';
import { Vendor } from '../../vendor';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  vendors: Vendor[] = [];
  allVendors: Vendor[] = [];

  @ViewChild('idFilter') idFilter: ElementRef;
  @ViewChild('nameFilter') nameFilter: ElementRef;

  constructor(private vendorService: VendorService)
  {

  }

  ngOnInit()
  {
      this.allVendors = this.vendorService.getAll();
      this.vendors = this.allVendors;
  }

onFilterChange(event: any) {
      this.vendors = this.allVendors.filter((vendor) => {
          return String(vendor.id).includes(this.idFilter.nativeElement.value);
      }).filter((vendor) => {
          return vendor.name.includes(this.nameFilter.nativeElement.value);
      });
  }

  cleanSearchCriteria() {
      this.vendors = this.allVendors;
      this.idFilter.nativeElement.value = '';
      this.nameFilter.nativeElement.value = '';
  }
}
