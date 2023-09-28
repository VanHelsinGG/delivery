<?php
    namespace Modules;
    use mysqli;
    use Exception;

    include ("main.php");

    class MySQL{
        private $db;

        public function __construct() {
            try{
                $this->db = new mysqli(HOSTNAME,USER,PASSWORD,DATABASE,CONN_PORT);
                
                if($this->db->connect_error){
                    throw new Exception("Falha na conexão ao banco MYSQL: " . $this->db->connect_error);
                }

            }catch (Exception $e){
                die($e->getMessage());
            }
        }

        public function closeConnection(){
            return $this->db->close();
        }

        /* $query = "SELECT * FROM tabela WHERE id = ?";
           $params = array(1);
           $result = $db->query($query, $params);
        */
        public function query($query, $params = array()){
            $stmt = $this->db->prepare($query);

            if(!$stmt){
                throw new Exception("Erro na preparação da consulta MYSQL: " . $this->db->error);
            }

            if(!empty($params)){
                $types = "";
                $paramValues = array();

                foreach($params as $param){
                    if(is_int($param)){
                        $types .= "i";
                    } elseif(is_double($param)){
                        $types .= "d";
                    } else{
                        $types .= "s";
                    }
                    
                    $paramValues[] = $param;
                }

                array_unshift($paramValues,$types);
                @call_user_func_array(array($stmt, 'bind_param'),$paramValues);
            }

            $result = $stmt->execute();

            if(!$result){
                throw new Exception("Erro na execução da consulta: " . $stmt->error);
            }

            // Retorna os ROWS para consultas SELECT
            if($stmt->field_count > 0){
                $resultSet = $stmt->get_result();
                $rows = array();

                while($row = $resultSet->fetch_assoc()){
                    $rows[] = $row;
                }
                
                $stmt->close();
                return $rows;
            }else{ // Retorna o número de afetados para INSERT, UPDATE, DELETE...
                $affectedRows = $stmt->affected_rows;
                $stmt->close();
                return $affectedRows;
            }
        }

    }

?>
