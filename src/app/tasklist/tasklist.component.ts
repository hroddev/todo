import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Task } from './task';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
  providers: [TaskService]
})

export class TasklistComponent implements OnInit {

  tasks: Task[] = [];
  editTask: Task | undefined;
  taskTitle = "";

  constructor(
    private taskService: TaskService
  ) { }

  @ViewChild('taskEditInput')
  set taskEditInput(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus();
    }
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => (this.tasks = tasks));
  }

  add(title: string): void {
    this.editTask = undefined;
    title = title.trim();
    if (!title){
      return;
    }

    // the server will generate the id or this new task
    const newTask: Task = { title } as Task;
    this.taskService
      .addTask(newTask)
      .subscribe(task => this.tasks.push(task));
  }



}
