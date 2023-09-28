<?php
    namespace Modules;

    class Functions{
        public function SHA512($input){
            return password_hash($input,PASSWORD_BCRYPT);
        }

        public function setCookie($cookieName, $value, $expiration){
            return setcookie($cookieName,$value,$expiration,"/");
        }

        public function transformTime($value, $option) {
            $multipliers = [
                "d" => 3600 * 24, // 1 day = 24 hours * 3600 seconds
                "h" => 3600,      // 1 hour = 3600 seconds
            ];
        
            return $value * ($multipliers[$option] ?? 1);
        }
        
    }
?>