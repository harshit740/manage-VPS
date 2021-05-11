import { TestBed } from '@angular/core/testing';

import { FilemanagerService } from './filemanager.service';

describe('FilenameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilemanagerService = TestBed.get(FilemanagerService);
    expect(service).toBeTruthy();
  });
});
