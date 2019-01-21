import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() newTodoPlaceholder: string;
  // tslint:disable-next-line:no-output-rename
  @Output('addTodo') addTodoEmitter = new EventEmitter<string>();
  newTodo;
  constructor() {}

  ngOnInit() {}
  addTodo() {
    this.addTodoEmitter.emit(this.newTodo);
    this.newTodo = '';
  }
}
