import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], condition?: 'all' | 'active' | 'completed'): any {
    // console.log(value);
    // console.log(args);

    // show all
    if (condition === 'all') {
      return todos;
    }
    // TODO: show active (not complete) isCompleted
    if (condition === 'active') {
      return todos.filter(todo => !todo.isCompleted);
    }
    // TODO: show completed isCompleted
    if (condition === 'completed') {
      return todos.filter(todo => todo.isCompleted);
    }
    return [];
  }

}
