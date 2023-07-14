<?php 
class userController{
    private $path = "files/users.json";
    public function deleteUser($token){
        if($token && $token !== ""){
            try{
                $jsonData = file_get_contents($this->path);
                $users = json_decode($jsonData, true);
                $value = explode("Bearer ",$token);
                $decoded= $value[1];
                if (($key = array_search($decoded, $users)) !== false) {
                    unset($users[$key]);
                    $jsonString = json_encode($users, JSON_PRETTY_PRINT);
                    $fp = fopen($this->path, 'w');
                    fwrite($fp, $jsonString);
                    fclose($fp);
                }
                return [     
                    'statusCode' => 200,
                    'data' => ["message"=>$decoded,"token"=>""]
                ];
            }catch(Exception $e){
                return [     
                    'statusCode' => 500,
                    'data' => "File Error: "+$e
                ];
            }
        }
        else{
            return [     
                'statusCode' => 200,
                'data' => ["message"=>""]
            ];
        }
    }
    public function createUser($cookieToken)
    {

        try{
            $jsonData = file_get_contents($this->path);
            $users = json_decode($jsonData, true);
            $token = $this->generateToken();
            array_push($users,$token);
            $jsonString = json_encode($users, JSON_PRETTY_PRINT);
            $fp = fopen($this->path, 'w');
            fwrite($fp, $jsonString);
            fclose($fp);
            $res = ["token"=>$token, "message"=>"User authenticated successfully"];
            return [     
                'statusCode' => 200,
                'data' => $res
            ];
        }catch(Exception $err){
            return [     
                'statusCode' => 500,
                'data' => "File Error: "+$err
            ];
        }
        
       
    }
     //generate token for user
     private function generateToken()
     {
         $randomBytes = random_bytes(32);
         $value = base64_encode($randomBytes);
         return $value;
     }
}
?>