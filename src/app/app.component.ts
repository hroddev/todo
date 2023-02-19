import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from './task';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public tasks: Task[] = [];
  public editTask!: Task;
  public delete!: Task;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(
      (response: Task[]) => {
        this.tasks = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddTask(addForm: NgForm): void {
    document.getElementById('')?.click();
    this.taskService.addTask(addForm.value).subscribe(
      (response: Task) => {
        console.log(response);
        this.getTasks();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },

    )
  }

  public onOpenModal(task: Task | null, mode: string): void {

    const container = document.getElementById('tasks-container');
    const button = document.createElement('button');

    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-target', '#addtaskmodal');
    }

    if (mode === 'edit') {
      button.setAttribute('data-target', '#edittaskmodal');
    }

    if (mode === 'delete') {

      button.setAttribute('data-target', '#deletetaskmodal');
    }

    container?.appendChild(button);
    button.click();
  }

  taskStatus(id: number):void {
    const container = document.getElementById('eta-container');
    const badge = document.createElement('span');
    const eta = this.taskService.getTasks

  }



}
