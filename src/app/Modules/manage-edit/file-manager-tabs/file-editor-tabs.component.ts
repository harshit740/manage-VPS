import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-editor-tabs',
  templateUrl: './file-editor-tabs.component.html',
  styleUrls: ['./file-editor-tabs.component.css']
})
export class FileEditorTabsComponent implements OnInit {
  tabs = [1, 2, 3, 4, 5, 6];
  constructor() { }

  ngOnInit() {
  }

}
