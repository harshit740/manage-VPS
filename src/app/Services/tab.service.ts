import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

export interface TabModel {
  title: string;
  basePath: string;
  currentPath: string;
  previousPathQueue: [];
  data: [];
  isHidden: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class TabService {
  Tabs = [
   {
      title: 'Tab1',
     basePath: '/home',
     currentPath: '/home',
     previousPathQueue: [],
      data: [],
    isHidden: false,
   }
  ];
  TabBehaviourSubject = new BehaviorSubject(this.Tabs);
  TabSelectedIndex = new BehaviorSubject(0);
  constructor() { }
  addTabs(newTab) {
    this.Tabs.push(  {
      title: 'Tab2',
      basePath: '/home',
      currentPath: '/home',
      previousPathQueue: [],
      data: [],
      isHidden: false,
    });
    this.TabBehaviourSubject.next(this.Tabs);
    this.TabSelectedIndex.next(this.Tabs.length);
  }
}
