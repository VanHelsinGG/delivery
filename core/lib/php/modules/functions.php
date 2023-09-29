<?php
    namespace Modules;
    use Exception;

    class Functions{
        public function SHA512($input){
            return password_hash($input,PASSWORD_BCRYPT);
        }

        public function setCookie($cookieName, $value, $expiration){
            return setcookie($cookieName,$value,$expiration,"/");
        }

        private function _transformTime($value, $option) {
            $multipliers = [
                "d" => 3600 * 24, // 1 day = 24 hours * 3600 seconds
                "h" => 3600,      // 1 hour = 3600 seconds
                "w" => 3600 * 24 * 7,
            ];
        
            return $value * ($multipliers[$option] ?? 1);
        }

        public function transformTime($value, $option){
            return _transformTime($value,$option) + time();
        }

        public function Log($file, $text)
        {
            if (ENABLE_LOG) {
                $file = fopen($_SERVER['DOCUMENT_ROOT'] . "/delivery/core/logs/$file.txt", "a");

                if(!$file){
                    throw new Exception("O arquivo '$file.txt' não foi encontrado!");
                    return 0;
                }

                fwrite($file, "[" . date("d/m/Y h:i:sa") . "] - $text\n");
                fclose($file);
            }
        }
        
    }
?>