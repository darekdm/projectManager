import { ProjectsRoutingModule } from './projects/projects-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core-module/core.module';
import { ProjectsService } from './projects/projects.service';
import { ProjectsModule } from './projects/projects.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProjectsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    ProjectsRoutingModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
