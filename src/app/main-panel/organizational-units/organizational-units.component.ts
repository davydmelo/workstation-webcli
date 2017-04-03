import { Component, OnInit } from '@angular/core';
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

  constructor(private ouService: OrganizationalUnitService,
             private router: Router)
  {
  }

  ngOnInit()
  {
      this.ous = this.ouService.getAll();
  }

  onNewOrganizationalUnit()
  {
    this.router.navigate(['/organizational_unit', {action: 'create'}]);
  }

}