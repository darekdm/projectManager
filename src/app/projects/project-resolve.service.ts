import { Project } from './model/project';
import { ProjectsService } from './projects.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectResolve implements Resolve<Project> {
    constructor(private projectsService: ProjectsService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.projectsService.getProject(route.params['id']);
    }
}
