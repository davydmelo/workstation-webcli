import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalUnitComponent } from './organizational-unit.component';

describe('OrganizationalUnitComponent', () => {
  let component: OrganizationalUnitComponent;
  let fixture: ComponentFixture<OrganizationalUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationalUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationalUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
