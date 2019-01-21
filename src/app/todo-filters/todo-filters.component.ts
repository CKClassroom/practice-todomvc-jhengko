import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.css']
})
export class TodoFiltersComponent implements OnInit {
  @Input() filterCondition: string;
  @Output() filterConditionChange = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  changeFilter(condition) {
    this.filterConditionChange.emit(condition);
  }
}
