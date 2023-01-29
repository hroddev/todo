import { Component } from '@angular/core';
import { tasks } from './mocktasks';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {

  tasks = tasks;


}
