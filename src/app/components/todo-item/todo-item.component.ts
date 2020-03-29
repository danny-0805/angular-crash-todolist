import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit(): void {}

  // NOTE: Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    };

    return classes;
  }

  onToggle(todo) {
    console.log('toggle');
    todo.completed = !todo.completed;
  }

  onDelete(todo) {
    console.log('de');
  }
}
