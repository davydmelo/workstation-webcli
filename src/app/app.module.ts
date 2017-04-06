import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { MaterialListComponent } from './main-panel/material-list/material-list.component';
import { OrganizationalUnitsComponent } from './main-panel/organizational-units/organizational-units.component';
import { OrganizationalUnitComponent } from './main-panel/organizational-unit/organizational-unit.component';

import { OrganizationalUnitService } from './organizational-unit.service';


const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'organizational_units', component: OrganizationalUnitsComponent },
  { path: 'organizational_unit/create', component: OrganizationalUnitComponent },
  { path: 'organizational_unit/:id/view', component: OrganizationalUnitComponent },
  { path: 'organizational_unit/:id/edit', component: OrganizationalUnitComponent },
  { path: 'organizational_unit/:id/delete', component: OrganizationalUnitComponent },
//  { path: 'materials', component: OrganizationalUnitsComponent },
//  { path: 'materials/:id', component: OrganizationalUnitsComponent },
//  { path: 'vendors', component: VendorsComponent },
//  { path: 'vendors/:id', component: VendorComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    MainPanelComponent,
    MaterialListComponent,
    OrganizationalUnitsComponent,
    OrganizationalUnitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [OrganizationalUnitService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
