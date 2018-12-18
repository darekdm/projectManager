import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';


const APP_ROUTES: Route[] = [
    // { path: '', pathMatch: 'full', redirectTo: 'projects'},
    { path: 'projects', component: <any>ProjectsListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
