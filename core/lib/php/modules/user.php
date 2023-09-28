<?php

    class User{
        private $db;

        public function __construct($database){
            $this->db = $database;
        }

        private function getUserData($data, $condition, $conditionValue){
            $query = "SELECT $data FROM usuarios WHERE $condition = ?";
            
            $result = $this->db->query($query,array($conditionValue));
            return ($result) ? $result : null;
        }

        public function getUserName_byID($id){
            $result = self::getUserData("nome","pk_user",$id);
            return ($result) ? $result : null;
        }
    }

?>