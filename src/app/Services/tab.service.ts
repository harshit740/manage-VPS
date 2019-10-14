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
      title: 'Home',
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


  addTabs(data) {
    if (data === undefined) {
      this.Tabs.push(  {
        title: 'Home',
        basePath: '/home',
        currentPath: '/home',
        previousPathQueue: [],
        data: [],
        isHidden: false,
      });
    } else {
      this.Tabs.push(  {
        title: data.name,
        basePath: '/home',
        currentPath: data.path,
        previousPathQueue: ['/home'],
        data: [],
        isHidden: false,
      });
    }
    this.TabBehaviourSubject.next(this.Tabs);
    this.TabSelectedIndex.next(this.Tabs.length);
  }
  closeTab(index) {
    this.Tabs.splice(index, 1);
    this.TabBehaviourSubject.next(this.Tabs);
    this.TabSelectedIndex.next(this.Tabs.length);
  }
}
