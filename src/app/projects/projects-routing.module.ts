import { ProjectResolve } from './project-resolve.service';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route, Resolve } from '@angular/router';

const PROJECT_ROUTES: Route[] = [
    {
        path: 'projects/:id',
        component: <any>ProjectDetailsComponent,
        resolve: { project: ProjectResolve }
     }
];

@NgModule({
    imports: [
        RouterModule.forChild(PROJECT_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class ProjectsRoutingModule {}
