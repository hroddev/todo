import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Task } from './task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token' // TODO: implement security
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasksUrl = 'http://localhost:8080/tasks'

  constructor(
    private http: HttpClient
  ) { }

  /** GET task from the api */
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  /** GET tasks whose title contains search term */
  searchTasks(term: string): Observable<Task[]>{
    term = term.trim();

    // add safe, URL encode search parameter if the is search term
    const options = term ?
    { params: new HttpParams().set('title', term) } : {};

    return this.http.get<Task[]>(this.tasksUrl, options);
  }
    
    // ####### Save methods ################

    /** POST: add new task to the DB */
    addTask(task: Task): Observable<Task> {
      return this.http.post<Task>(this.tasksUrl, task, httpOptions);
    }

    /** DELETE the task from the DB */
    deleteTask(id: number): Observable<unknown> {
      const url = `${this.tasksUrl}/${id}`;
      return this.http.delete(url, httpOptions);
    }

    /** PUT method */
    updateTask(task: Task): Observable<Task> {
      httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-token');

      return this.http.put<Task>(this.tasksUrl, task, httpOptions);
    }
  
}
