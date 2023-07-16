<?php
$UserController = require('./controllers/userController.php');
$RocketsController = require('./controllers/rocketsController.php');
$user = new UserController();
class API extends UserController
{
    public function __construct()
    {
        $this->handleCors();
    }
    public function handleRequest()
    {
        $rocket = new RocketsController();
        $method = $_SERVER['REQUEST_METHOD']; // identify method
        $endpoint = $_SERVER['REQUEST_URI']; //identify endpoint
        $parsedUrl = parse_url($endpoint);
        switch ($method) {
            case 'GET':
                if($parsedUrl["path"] === '/api/rockets'){
                    if($this->isAuthorized(isset($_SERVER["HTTP_AUTHORIZATION"])?urldecode($_SERVER["HTTP_AUTHORIZATION"]):null)){
                        $response = $rocket->fetch(isset($_GET["search"])?$_GET["search"]:null,isset($_GET["page"])?$_GET["page"]:null);
                    }
                    else{
                        $response = ["statusCode"=>403,"data"=>"Unauthorized"];
                    }
                }
                
                else {
                    $response = $this->notFound();
                }
                break;
            case 'POST':
                if ($endpoint === '/api/users') { // authenticate a new user to the system
                    $response= $this->createUser(isset($_SERVER["HTTP_AUTHORIZATION"])?urldecode($_SERVER["HTTP_AUTHORIZATION"]):null);
                }
                
                else {
                    $response = $this->notFound();
                }
                break;
            case 'DELETE':
                if ($endpoint === '/api/users') { 
                    // echo isset($POST["token"])?$_POST["token"]:null;
                    $response= $this->deleteUser(isset($_SERVER["HTTP_AUTHORIZATION"])?urldecode($_SERVER["HTTP_AUTHORIZATION"]):null);
                }
                else {
                    $response = $this->notFound();
                }
                break;
            case "OPTIONS":
                if ($endpoint === '/api/users' && $method === "DELETE") { 
                    if(isset($_SERVER["HTTP_AUTHORIZATION"])){
                        $response= $this->deleteUser(urldecode($_SERVER["HTTP_AUTHORIZATION"]));
                    }
                    else{
                        $response = ["statusCode"=>403,"data"=>"Unauthorized"];
                    }
                }
                $response = ["statusCode"=>200,"data"=>""];
                break;
            default:
                $response = $this->notFound();
                break;
        }
        $this->sendResponse($response ?? $this->notFound());
    }
   


    private function notFound()
    {
        return [     
            'statusCode' => 404,
            'data' => "Not found"
        ];
    }
   
    //handle cors origin
    private function handleCors()
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
        header('Access-Control-Allow-Credentials: true');
        // header('withCredentials: true');
    }
    //centralized function to send response
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