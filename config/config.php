<?php
    $dirInt = "";
    define('DIRPAGE', "http://{$_SERVER['HTTP_HOST']}/{$dirInt}");
    $bar = (substr($_SERVER['DOCUMENT_ROOT'], -1) == '/') ? "" : "/";
    define('DIRREQ', "{$_SERVER['DOCUMENT_ROOT']}{$bar}{$dirInt}projeto_agendamento/");

    #Banco de Dados
    define('HOST', 'localhost');
    define('DB', 'sistema');
    define('USER', 'root');
    define('PASS', '');

    include(DIRREQ.'lib/composer/vendor/autoload.php');