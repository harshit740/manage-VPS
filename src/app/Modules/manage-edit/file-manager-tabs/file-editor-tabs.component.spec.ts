import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileEditorTabsComponent } from './file-editor-tabs.component';

describe('FileEditorTabsComponent', () => {
  let component: FileEditorTabsComponent;
  let fixture: ComponentFixture<FileEditorTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileEditorTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileEditorTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
