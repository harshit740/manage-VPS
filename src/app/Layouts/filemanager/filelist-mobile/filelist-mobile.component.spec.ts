import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilelistMobileComponent } from './filelist-mobile.component';

describe('FilelistMobileComponent', () => {
  let component: FilelistMobileComponent;
  let fixture: ComponentFixture<FilelistMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilelistMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilelistMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
