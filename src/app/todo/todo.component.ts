import { Component, OnInit } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { InterFaccia } from '../inter-faccia';
import * as todoFunction from '../lista.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {



  constructor() {}

  ngOnInit(): void {}
  title = 'todo list';
  list: any[] = [];
  addTask(item: string) {
    this.list.push({ id: this.list.length, name: item });
    console.warn(this.list);
  }
}

