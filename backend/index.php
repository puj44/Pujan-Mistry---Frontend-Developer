<?php

class API
{
    private $path = "files/users.json";
    public function handleRequest()
    {
        $method = $_SERVER['REQUEST_METHOD']; // identify method
        $endpoint = $_SERVER['REQUEST_URI']; //identify endpoint

        switch ($method) {
            case 'POST':
                if ($endpoint === '/api/users') { // authenticate a new user to the system
                    $response= $this->createUser();
                } else {
                    $response = $this->notFound();
                }
                break;
            default:
                $response = $this->notFound();
                break;
        }
        $this->sendResponse($response);
    }

    private function createUser()
    {

        try{
            $jsonData = file_get_contents($this->path);
            $users = json_decode($jsonData, true);
            $token = $this->generateToken();
            foreach($users as $u){
                if($u === $token){
                    return [     
                        'statusCode' => 200,
                        'data' => "User exists"
                    ];
                }
            }
            array_push($users,$token);
            $jsonString = json_encode($users, JSON_PRETTY_PRINT);
            // Write in the file
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


    private function notFound()
    {
        return [     
            'statusCode' => 404,
            'data' => "Not found"
        ];
    }
    private function generateToken()
    {
        $randomBytes = random_bytes(32); // generate 32 random bytes
        return base64_encode($randomBytes); // encode the string
    }
    private function sendResponse($response)
    {
        http_response_code($response['statusCode']);
        header('Content-Type: application/json');
        echo json_encode($response['data']);
        exit();
    }
}

$api = new API();
$api->handleRequest();