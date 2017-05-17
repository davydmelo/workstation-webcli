import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationalUnitService } from '../../organizational-unit.service';
import { OrganizationalUnit } from '../../organizational-unit';

@Component({
  selector: 'app-organizational-units',
  templateUrl: './organizational-units.component.html',
  styleUrls: ['./organizational-units.component.css']
})
export class OrganizationalUnitsComponent implements OnInit {

  ous: OrganizationalUnit[] = [];
  allOus: OrganizationalUnit[] = [];

  @ViewChild('idFilter') idFilter: ElementRef;
  @ViewChild('nameFilter') nameFilter: ElementRef;

  constructor(private ouService: OrganizationalUnitService)
  {
  }

  ngOnInit()
  {
      this.allOus = this.ouService.getAll();
      this.ous = this.allOus;
  }

  onFilterChange(event: any) {
      this.ous = this.allOus.filter((ou) => {
          return String(ou.id).includes(this.idFilter.nativeElement.value);
      }).filter((ou) => {
          return ou.name.includes(this.nameFilter.nativeElement.value);
      });
  }

  cleanSearchCriteria() {
      this.ous = this.allOus;
      this.idFilter.nativeElement.value = '';
      this.nameFilter.nativeElement.value = '';
  }
}
