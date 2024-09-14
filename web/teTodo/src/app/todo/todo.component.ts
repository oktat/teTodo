import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  tasks: any[] = [];
  todoForm !: FormGroup;
  addTodoForm !: FormGroup;

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      task: [''],
      complete: [0],
      visible: [1]
    })

    this.addTodoForm = this.formBuilder.group({
      task: ['']
    })

    this.getTodos();
  }
  onChange(id: number) {   
    this.tasks.forEach((task) => {
      if(task.id == id) {
        if(task.complete == 1) {
          task.complete = 0;
        } else {
          task.complete = 1;
        }       
      }
    })
    this.todoService.toggleTodoComplete(id).subscribe({
      next: (data: any) => {
        console.log(data);        
      }
    })    
  }
  onHide(id: number) {
    this.tasks.forEach((task) => {
      if(task.id == id) {        
        task.visible = 0;        
      }
    })

    this.todoService.switchOffVisible(id).subscribe({
      next: (data: any) => {
        console.log(data);        
      }
    })
  }

  getTodos() {
    this.todoService.getTodos().subscribe({
      next: (data: any) => {
        console.log(data);
        this.tasks = data;
      }
    })
  }

  addTodo() {
    console.log('műkszik')
    this.todoService.addTodo(this.addTodoForm.value).subscribe({
      next: (data: any) => {
        console.log(data);
        this.getTodos();
        this.addTodoForm.reset();
      }
    })
  }
}
