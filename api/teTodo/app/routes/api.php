<?php

require "app/controllers/TodoController.php";
require "app/controllers/AuthController.php";
require "app/middlewares/Auth.php";

app()->get('/api/todos', 'TodoController@index');

app()->post('/api/login', 'AuthController@login');
app()->post('/api/register', 'AuthController@register');

app()->group('/', ['middleware' => 'auth', function () {
  app()->post('/api/todos', 'TodoController@create');
  app()->put('/api/todos/{id}', 'TodoController@update');
  app()->delete('/api/todos/{id}', 'TodoController@delete');    
}]);

app()->run();
