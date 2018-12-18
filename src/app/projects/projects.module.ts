import { ProjectResolve } from './project-resolve.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared-module/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { TimeInProjectComponent } from './time-in-project/time-in-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ProjectsListComponent
  ],
  providers: [ProjectResolve],
  declarations: [ProjectsListComponent, TimeInProjectComponent, ProjectDetailsComponent]
})
export class ProjectsModule { }
