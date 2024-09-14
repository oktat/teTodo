<?php

class TodoController {
  public function __construct() {
    db()->connect([
      'dbtype' => 'sqlite',
      'dbname' => 'db.sqlite'
    ]);
  }
  public function index() {
    $todos = db()->select('todos')->all();
    response()->json($todos);
  }

  public function create() {
    $res = db()
    ->insert('todos')
    ->params([request()->body()])
    ->execute();

    $id = db()->lastInsertId();
    $todo = db()->select('todos')->where('id', $id)->first();
    response()->json($todo);
  }

  public function update($id) {
    $res = db()
    ->update('todos')
    ->params(request()->body())
    ->where('id', $id)
    ->execute();
    $todo = db()->select('todos')->where('id', $id)->first();
    response()->json($todo);
  }

  public function delete($id) {
    $res = db()
    ->delete('todos')
    ->where('id', $id)
    ->execute();
    response()->json($res);
  }

  public function complete($id) {
    $actTodo = db()->select('todos')->where('id', $id)->first();

    db()
    ->update('todos')
    ->params(['complete' => $actTodo['complete'] == 0 ? 1 : 0])
    ->where('id', $id)
    ->execute();
    $todo = db()->select('todos')->where('id', $id)->first();
    response()->json($todo);
  }

  public function visible($id) {
    $actTodo = db()->select('todos')->where('id', $id)->first();

    db()
    ->update('todos')
    ->params(['visible' => 0])
    ->where('id', $id)
    ->execute();
    $todo = db()->select('todos')->where('id', $id)->first();
    response()->json($todo);
  }
}
