import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AssetService } from 'app/asset.service';
import { VendorService } from 'app/vendor.service';
import { User } from 'app/user';
import { Vendor } from 'app/vendor';
import { Asset } from 'app/asset';
import { Http } from '@angular/http';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit
{
    @ViewChild('f') form: NgForm;
    
    public action: string;
    public assetId: number;

    public vendors: Vendor[];

    public asset: any = {vendor: {}};

    constructor(private route: ActivatedRoute, private assetService: AssetService, private vendorService: VendorService, private http: Http)
    {
    }

  ngOnInit()
  {
      this.action = this.route.snapshot.url[this.route.snapshot.url.length - 1].path;

      if (this.action !== 'create')
      {

        this.assetId = this.route.snapshot.params['id'];
        this.route.params.subscribe((params: Params) =>
        {
            this.assetId = params['id'];
            this.asset = this.assetService.getById(this.assetId);
            console.log(this.assetId);
        });

        this.asset = this.assetService.getById(this.assetId);

        
      }

      this.vendors = this.vendorService.getAll();

  }

  isFormDisabled(): boolean
  {
    return this.action === 'view' || this.action === 'delete';
  }
  
  onSubmit()
  {
        console.log(this.asset.id);
        console.log(this.asset.code);
        console.log(this.asset.name);
        console.log(this.asset.model);
        console.log(this.asset.vendor);

        this.http.post('https://workstation-30dec.firebaseio.com/assets.json', this.asset).subscribe((res) => console.log(res));

        //assets : { '1': {id: 1, code: 257596, name: 'Osciloscópio', model: 'Minipa', vendor : {id : 1, name : 'Minipa'}}}

        this.form.reset();
  }

  onDelete()
  {

  }
}
