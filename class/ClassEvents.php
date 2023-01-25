<?php
    namespace Classes;    
    use Models\ModelConect;

    class ClassEvents extends ModelConect{
        public function getEvents(){
            $b = $this->conectDB()->prepare("select * from events");
            $b->execute();
            $f = $b->fetchAll(\PDO::FETCH_ASSOC);
            return json_encode($f);
        }
    }