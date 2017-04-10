import { Injectable } from '@angular/core';
import { OrganizationalUnit } from './organizational-unit';

@Injectable()
export class OrganizationalUnitService {

  ous: OrganizationalUnit[] = [
    new OrganizationalUnit('Sala 1', 1),
    new OrganizationalUnit('Sala 2', 2),
    new OrganizationalUnit('Sala 3', 3),
    new OrganizationalUnit('Sala 4', 4),
    new OrganizationalUnit('Sala 5', 5)
  ];

  constructor() { }

  getAll()
  {
      return this.ous;
  }

}