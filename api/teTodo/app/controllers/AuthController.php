<?php

class AuthController {
  public function __construct() {
    auth()->connect('', 'db.sqlite', '', '', 'sqlite');
  }

  public function login() {
    $data = auth()->login([
      'username' => request()->get('username'),
      'password' => request()->get('password')
    ]);
    response()->json(['auth' => $data]);
  }
  public function register() {
    $data = auth()->register([
      'username' => request()->get('username'),
      'password' => request()->get('password')
    ], ['username']);

    if(!$data) {
      $data = auth()->errors();
    }
    response()->json(['auth' => $data]);

  }
}