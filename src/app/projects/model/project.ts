import {Developer} from './developer';

export interface Project {

    id: number;
    projectName: string;
    status: boolean;
    priority: number;
    description: string;
    developer: Developer;

}
