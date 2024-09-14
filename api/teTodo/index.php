<?php

require __DIR__ . '/vendor/autoload.php';

require 'app/routes/api.php';

app()->cors();
app()->run();

