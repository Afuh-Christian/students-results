export interface Student {
    id: number;
    name: string;
    mat: string;
    courses?: Array<Course>;
}


export interface Course {
    id: number
    studentID: number;
    name?: string;
    CA: number;
    exam: number; 
}






