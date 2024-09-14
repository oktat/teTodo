<?php

require "app/controllers/TodoController.php";
require "app/controllers/AuthController.php";
require "app/middlewares/Auth.php";

app()->post('/api/login', 'AuthController@login');
app()->post('/api/register', 'AuthController@register');

app()->group('/', ['middleware' => 'auth', function () {
  app()->get('/api/todos', 'TodoController@index');
  app()->post('/api/todos', 'TodoController@create');
  app()->put('/api/todos/{id}', 'TodoController@update');
  app()->delete('/api/todos/{id}', 'TodoController@delete');
  app()->patch('/api/todos/{id}/complete', 'TodoController@complete');
  app()->patch('/api/todos/{id}/visible', 'TodoController@visible');  
}]);

