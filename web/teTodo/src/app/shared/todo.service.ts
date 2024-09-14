import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  host = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getTodos() {
    let endpoint = '/api/todos';
    let url = this.host + endpoint;
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`
    };    
    return this.http.get(url, {headers});
  }

  addTodo(task: any) {
    let endpoint = '/api/todos';
    let url = this.host + endpoint;

    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`
    };

    return this.http.post(url, task, {headers});
  }

  updateTodo(id: number, task: any) {
    let endpoint = '/api/todos/' + id;
    let url = this.host + endpoint;
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    return this.http.put(url, task, {headers});
  }

  deleteTodo(id: number) {
    let endpoint = '/api/todos/' + id;
    let url = this.host + endpoint;
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    return this.http.delete(url, {headers});
  }

  toggleTodoComplete(id: number) {
    let endpoint = '/api/todos/' + id + '/complete';
    let url = this.host + endpoint;

    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`
    }; 

    return this.http.patch(url, {}, {headers});
  }

  switchOffVisible(id: number) {
    let endpoint = '/api/todos/' + id + '/visible';
    let url = this.host + endpoint;
    let visible = 0;

    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    
    return this.http.patch(url, {visible: 0}, {headers});
  }
}
