<?php
use Modules\Functions;

session_start();

if (isset($_POST['cookie'])) {
    $cookiePreference = $_POST['cookie'];

    if ($cookiePreference !== 'true' && $cookiePreference !== 'false') {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid cookie preference']);
        exit;
    }

    if($cookiePreference){
       Functions::setCookie("cookiePreference",$cookiePreference, self::_transformTime(1,"w"));
    }else{
        $_SESSION['cookieAccepted'] = $cookiePreference;
    }
} else {
    http_response_code(400); // Bad Request
    echo json_encode(['error' => 'Cookie not provided']);
}
?>