import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organizational-unit',
  templateUrl: './organizational-unit.component.html',
  styleUrls: ['./organizational-unit.component.css']
})
export class OrganizationalUnitComponent implements OnInit {

  constructor(private route: ActivatedRoute)
  {
      
  }

  ngOnInit()
  {
      console.log(this.route.snapshot.params['action']);
  }

}
