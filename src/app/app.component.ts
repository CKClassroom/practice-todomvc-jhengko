import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todomvc';
  newTodoPlaceholder = 'What needs to be done?';

  filterCondition = 'all';
  todos: Todo[] = [];
  maxId;
 /* todos: Todo[] = [
    {
      id: 1,
      item: 'todo 1',
      isCompleted: false,
      isEditing: false
    },
    {
      id: 2,
      item: 'todo 2',
      isCompleted: true,
      isEditing: false
    },
    {
      id: 3,
      item: 'todo 3',
      isCompleted: false,
      isEditing: false
    }
  ];
  maxId = 3;
  */
  toggleStatus;

  get uncompletedCount() {
    return this.todos.filter(x => x.isCompleted === false).length;
  }

  clearCompleted() {
    this.todos = this.todos.filter(x => !x.isCompleted);
  }
  addTodo(newTodo) {
    this.todos.push({
      id: ++this.maxId,
      item: newTodo,
      isCompleted: false,
      isEditing: false
    });
  }
// MAP ARRAY
  toggleComplete(todo: Todo) {
    this.todos = this.todos.map(_todo => {
      if (_todo.id === todo.id) {
        _todo.isCompleted = !_todo.isCompleted;
      }
      return _todo;
    });

  }
// SPLICE
  removeTodo(idx) {
    this.todos.splice(idx, 1);
  }
// FOREACH
  toggleAllComplete(event) {
    this.todos.forEach(x => (x.isCompleted = true));
  }
}

export interface Todo {
  id: number;
  item: string;
  isCompleted: boolean;
  isEditing: boolean;
}
