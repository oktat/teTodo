<?php

auth()->connect('', 'db.sqlite', '', '', 'sqlite');

app()->registerMiddleware('auth', function () {
  $id = auth()->id();
  if (!$id) {
    response()->exit([
      'status' => 'error',
      'message' => 'Not authorized'
      ], 401);
  }
});
