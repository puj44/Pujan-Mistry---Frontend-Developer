<?php

class API
{

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
            $jsonData = file_get_contents("files/users.json");
            $users = json_decode($jsonData, true);


        }catch(Exception $err){
            return [     
                'statusCode' => 500,
                'data' => "File Error: "+$err
            ];
        }
        
        return [     
            'statusCode' => 200,
            'data' => "User"
        ];
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
    private function sendResponse($statusCode, $data)
    {
        http_response_code($statusCode);
        header('Content-Type: application/json');
        echo json_encode($data);
        exit();
    }
}

$api = new API();
$api->handleRequest();