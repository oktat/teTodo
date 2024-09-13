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
}
