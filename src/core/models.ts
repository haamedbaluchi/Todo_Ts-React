export interface Project {
    id:string;
    title:string;
    tasks : Todo[]
}

export interface Todo{
    id:string;
    title:string;
    isDone:boolean
}

