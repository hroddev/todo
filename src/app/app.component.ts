import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { Task } from './tasklist/task';
import { TaskService } from './tasklist/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  tasks: Task[] = [];
  editTask: Task | undefined;
  taskTitle = '';

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

  edit(taskTitle: string){
    this.update(taskTitle);
  }

  search(searchTerm: string){
    this.editTask = undefined;
    if(searchTerm){
      this.taskService
      .searchTasks(searchTerm)
      .subscribe(tasks => (this.tasks = tasks));
    } else {
      this.getTasks();
    }
  }

  update(taskTitle: string){
    if (taskTitle && this.editTask && this.editTask.title !== taskTitle){
      this.taskService
      .updateTask({ ...this.editTask, title: taskTitle})
      .subscribe( task => {
        const e = task ? this.tasks.findIndex(t => t.id === task.id) : -1;
        if (e > -1) {
          this.tasks[e] = task;
        }
      });
      this.editTask = undefined;
    }
  }

  public onOpenModal(task: Task, mode: string):void {

    const container = document.getElementById('tasks-container');
    const button = document.createElement('button');

    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-target', '#addtaskmodal');
    }

    if (mode === 'edittaskmodal') {
      button.setAttribute('data-target', '#addtaskmodal');
    }

    if (mode === 'deletetaskmodal') {
      button.setAttribute('data-target', '#addtaskmodal');
    }

    container?.appendChild(button);
    button.click();
  }



}
