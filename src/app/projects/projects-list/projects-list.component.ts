import { Project } from './../model/project';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TimeInProjectComponent } from '../time-in-project/time-in-project.component';
import { ProjectsService } from './../projects.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.sass']
})
export class ProjectsListComponent implements OnInit, AfterViewInit {

  @ViewChild('totalTimeRef') totalTimeRef: TimeInProjectComponent;
  totalTime: number;
  timeInProject: number;
  addedTime: number;
  projectForm: FormGroup;
  projects: Project[];

  constructor(private projectsService: ProjectsService,
              private router: Router,
              private formBuilder: FormBuilder
              ) {  }

  ngOnInit() {
    this.loadProjects();
    this.projectForm = this.buildProjectForm();
  }

  buildProjectForm() {
    return this.formBuilder.group({
      projectName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      status: ['', Validators.required],
      priority: '',
      description: ['', [Validators.required, Validators.maxLength(200)]],
      developer: {
            id: 100,
            firstName: 'John',
            lastName: 'Wick',
            spentTime: '',
            comment: 'some comment...',
      }
    });
  }

  loadProjects(): void {
    this.projectsService.getProjects().subscribe((projects) => {
      this.projects = projects;
      this.totaltimeOnProject();
    });
  }

  addProject() {
    this.projectsService.addProject(this.projectForm.value).subscribe(() => {
      this.loadProjects();
    });
  }

  // removeProject() {
  //   this.projectsService.removeProject(this.projectForm.id).subscribe(() => {
      
  //   });
  // }

  ngAfterViewInit() {
    this.totalTimeRef.timeAdd();
  }

  totaltimeOnProject(): void {
    this.totalTime = this.projects
    .map((project) => project.developer.spentTime)
    .reduce((prev, next) => prev + next);
  }

  showAddedTime(addedTime: number): void {
    this.addedTime = addedTime;
  }

  timeAdd(): void {
    this.totalTimeRef.timeAdd();
  }

}


// {
//   "projectName": "Property layout",
//   "status": true,
//   "priority": 1,
//   "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
//   "developer": {
//        "id": 100,
//        "firstName": "John",
//        "lastName": "Wick",
//        "spentTime": 10,
//        "comment": "Some comment ..."
// }
// }