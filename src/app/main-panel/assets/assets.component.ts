import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AssetService } from '../../asset.service';
import { Asset } from '../../asset';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit
{
  assets: Asset[] = [];
  allAssets: Asset[] = [];

  @ViewChild('idFilter') idFilter: ElementRef;
  @ViewChild('nameFilter') nameFilter: ElementRef;
  @ViewChild('codeFilter') codeFilter: ElementRef;
  @ViewChild('vendorFilter') vendorFilter: ElementRef;

  constructor(private assetService: AssetService) { }

  ngOnInit()
  {
      this.allAssets = this.assetService.getAll();
      this.assets = this.allAssets;
  }

  onFilterChange(event: any) {
      this.assets = this.allAssets.filter((asset) => {
          return String(asset.id).includes(this.idFilter.nativeElement.value);
      }).filter((asset) => {
          return String(asset.code).includes(this.codeFilter.nativeElement.value);
      }).filter((asset) => {
          return asset.name.includes(this.nameFilter.nativeElement.value);
      }).filter((asset) => {
          return asset.vendor.name.includes(this.vendorFilter.nativeElement.value);
      });
  }

  cleanSearchCriteria() {
      this.assets = this.allAssets;
      this.idFilter.nativeElement.value = '';
      this.nameFilter.nativeElement.value = '';
  }

}
