<?php
    namespace Modules;

    class User{
        private $db;

        public function __construct(MySQL $db) {
            $this->db = $db;
        }
    
        private function getUserData($data, $condition, $conditionValue) {
            $query = "SELECT $data FROM usuarios WHERE $condition = ?";
            $result = $this->db->query($query, [$conditionValue]);
            return ($result) ? $result[0][$data] : null;
        }

        public function getUserName_byID($id){
            $result = self::getUserData("nome","pk_user",$id);
            return ($result) ? $result : null;
        }

    }

?>