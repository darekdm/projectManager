import { Project } from './model/project';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ProjectsService {

  private apiUrl = 'http://localhost:3000/api/projects';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(this.apiUrl + `/${id}`);
  }

  addProject(data): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, data);
  }

  updateProject(id: number, data): Observable<Project> {
    return this.http.put<Project>(this.apiUrl + `/${id}`, data);
  }

  removeProject(id: number): Observable<Project> {
    return this.http.delete<Project>(this.apiUrl + `/${id}`);
  }
}
