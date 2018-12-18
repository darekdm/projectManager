import { Developer } from './../model/developer';
import { Project } from './../model/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from './../projects.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.sass']
})
export class ProjectDetailsComponent implements OnInit {

  project: Project;
  projectForm: FormGroup;

  constructor(private projectsService: ProjectsService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadProject();
    this.projectForm = this.buildProjectForm();
  }

  buildProjectForm() {
    return this.formBuilder.group({
      projectName: [this.project.projectName, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      status: [this.project.status, Validators.required],
      priority: this.project.priority,
      description: [this.project.description, [Validators.required, Validators.maxLength(200)]],
      developer: {
            id: this.project.developer.id,
            firstName: this.project.developer.firstName,
            lastName: this.project.developer.lastName,
            spentTime: this.project.developer.spentTime,
            comment: this.project.developer.comment,
          }
    });
  }

  updateProject() {
    this.projectsService.updateProject(this.project.id, this.projectForm.value).subscribe(() => {
      this.router.navigate(['/projects']);
    });
  }

  loadProject() {

      this.project = this.route.snapshot.data['project'];

  }


}
