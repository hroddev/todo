import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Task } from './task';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
  providers: [TaskService]
})

export class TasklistComponent {

 
}
