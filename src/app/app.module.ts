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

import { VendorsComponent } from './main-panel/vendors/vendors.component';
import { VendorService } from './vendor.service';
import { VendorComponent } from './main-panel/vendor/vendor.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { UserService } from "app/user.service";


const routes: Routes = [
  { path: '', component: MainPanelComponent },
  { path: 'organizational_units', component: OrganizationalUnitsComponent },
  { path: 'organizational_unit/create', component: OrganizationalUnitComponent },
  { path: 'organizational_unit/:id/view', component: OrganizationalUnitComponent },
  { path: 'organizational_unit/:id/edit', component: OrganizationalUnitComponent },
  { path: 'organizational_unit/:id/delete', component: OrganizationalUnitComponent },

  { path: 'vendors', component: VendorsComponent },
  { path: 'vendor/create', component: VendorComponent },
  { path: 'vendor/:id/view', component: VendorComponent },
  { path: 'vendor/:id/edit', component: VendorComponent },
  { path: 'vendor/:id/delete', component: VendorComponent },

  { path: 'users', component: UsersComponent },
  { path: 'user/create', component: UserComponent },
  { path: 'user/:id/view', component: UserComponent },
  { path: 'user/:id/edit', component: UserComponent },
  { path: 'user/:id/delete', component: UserComponent },
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
    OrganizationalUnitComponent,
    VendorsComponent,
    VendorComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [OrganizationalUnitService, VendorService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
