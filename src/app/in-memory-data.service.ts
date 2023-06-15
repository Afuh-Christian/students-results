import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Course, Student } from './student/types';
// import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students: Student[] =  [
      {
        id: 1,
        mat: "SC20A830",
        name: "Afuh Christian Forkoum",
      },
      {
        id: 2,
        mat: "SC19B455",
        name: "EKILI LIONEL EKWO",
      }, 
      {
        id: 3,
        mat: "SC20A828",
        name: "ADO DANIEL NJI",
      },
      {
        id: 4,
        mat: "SC20A842",
        name: "AKWOGE MARCUS NGLALAME",
      },

      {
        id: 5,
        mat: "SC12A125",
        name: "OSMAN DEMBELE",
      },
     
              
    ]
      
  const courses: Course[] = [
          {
            id:1,
            studentID: 1,
            name: "CSC205",
            CA: 23, 
            exam : 20
             },
          {
            id:2,
            studentID: 1,
            name: "CSC305",
            CA: 10, 
            exam : 40
             },
          {
            id:3,
            studentID: 1,
            name: "CHEM205",
            CA: 24, 
            exam : 55
             },
          {
            id:4,
            studentID: 1,
            name: "MAT205",
            CA: 20, 
            exam : 50
             },
          {
            id:5,
            studentID: 1,
            name: "ENG205",
            CA: 30, 
            exam : 30
             },

            {
              id:6,
              studentID: 2,
              name: "CSC205",
              CA: 23, 
              exam : 50
               },
            {
              id:7,
              studentID: 2,
              name: "CSC305",    
              CA: 10, 
              exam : 20
               },
            {
              id:8,
              studentID: 2,
              name: "CHEM205",
              CA: 24, 
              exam : 45
               },
            {
              id:9,
              studentID: 2,
              name: "MAT205",
              CA: 20, 
              exam : 50
               },
            {
              id:10,
              studentID: 2,
              name: "ENG205",
              CA: 30, 
              exam : 37
               },
         
      
       
       
            {
              id:11,
              studentID: 3,
              name: "CSC205",
              CA: 23, 
              exam : 50
               },
            {
              id:12,
              studentID: 3,
              name: "CSC305",
              CA: 10, 
              exam : 20
               },
            {
              id:13,
              studentID: 3,
              name: "CHEM205",
              CA: 24, 
              exam : 55
               },
            {
              id:14,
              studentID: 3,
              name: "MAT205",
              CA: 20, 
              exam : 50
               },
            {
              id:15,
              studentID: 3,
              name: "ENG205",
              CA: 30, 
              exam : 30
               },
         
      
  
            {
              id:16,
              studentID: 4,
              name: "CSC205",
              CA: 23, 
              exam : 50
               },
            {
              id:17,
              studentID: 4,
              name: "CSC305",
              CA: 10, 
              exam : 20
               },
            {
              id:18,
              studentID: 4,
              name: "CHEM205",
              CA: 24, 
              exam : 55
               },
            {
              id:19,
              studentID: 4,
              name: "MAT205",
              CA: 20, 
              exam : 50
               },
            {
              id:20,
              studentID: 4,
              name: "ENG205",
              CA: 30, 
              exam : 60
               },
            {
              id:21,
              studentID: 5,
              name: "CSC205",
              CA: 23, 
              exam : 50
               },
            {
              id:22,
              studentID: 5,
              name: "CSC305",
              CA: 10, 
              exam : 20
               },
            {
              id:23,
              studentID: 5,
              name: "CHEM205",
              CA: 24, 
              exam : 55
               },
            {
              id:24,
              studentID: 5,
              name: "MAT205",
              CA: 20, 
              exam : 50
               },
            {
              id:25,
              studentID: 5,
              name: "ENG205",
              CA: 30, 
              exam : 20
               },
         
              ]
    return {students, courses};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(students: Student[]): number {
  //   return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 11;
  // }
}