import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { UsersMap } from './usersMap';
import { UsersMapService } from './usersMap/usersMap.service';
import { TablesService  } from './tables.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    UsersMap,
    Dashboard
  ],
  providers: [
    UsersMapService,
    TablesService
  ]
})
export class DashboardModule {}
