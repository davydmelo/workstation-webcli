import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  public action: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit()
  {
      this.action = this.route.snapshot.url[this.route.snapshot.url.length - 1].path;
  }

isFormDisabled(): boolean
  {
    return this.action === 'view' || this.action === 'delete';
  }

  onSelectedToTheRight()
  {
    console.log('Right');
  }

  onSelectedToTheLeft()
  {
    console.log('Left');
  }

  onSubmit()
  {
    console.log('Submit');
  }

  onDelete()
  {

  }
}
