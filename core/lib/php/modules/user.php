<?php
    namespace Modules;

    class User {
        private $db;

        public function __construct(MySQL $db) {
            $this->db = $db;
        }
    
        private function getUserData($data, $table, $condition, $conditionValue) {
            $query = "SELECT $data FROM $table WHERE $condition = ?";
            $result = $this->db->query($query, [$conditionValue]);
            return ($result) ? $result : null;
        }

        public function getUserName_byID($id){
            $result = self::getUserData("nome","usuarios","pk_user",$id);
            return ($result) ? $result : null;
        }

        public function getUserEmail_byID($id){
            $result = self::getUserData("email","usuarios","pk_user",$id);
            return ($result) ? $result : null;
        }

        public function getUserPassword_byID($id){
            $result = self::getUserData("senha","usuarios","pk_user",$id);
            return ($result) ? $result : null;
        }

        public function getUserCPF_byID($id){
            $result = self::getUserData("cpf","usuarios","pk_user",$id);
            return ($result) ? $result : null;
        }

        public function getUserCellphone_byID($id){
            $result = self::getUserData("telefone","usuarios","pk_user",$id);
            return ($result) ? $result : null;
        }
    }

?>