import { TestBed } from '@angular/core/testing';

import { TaskService } from './tasklist/tasks.service';

describe('TaskserviceService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
