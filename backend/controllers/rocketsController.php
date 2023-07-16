<?php
    class rocketsController
    {
        public function fetch($search,$page){
            $requestUrl = "https://api.spacexdata.com/v3/rockets";
            $itemsPerPage = 2; //since the data is not gonna be more than 4 from api
            //get pagination number
            $pageNo = $page ?? 1;
            //offset for pagination
            $offset = ($page - 1) * $itemsPerPage;
            //retrieve search query and search type
            $searchQuery = "";
            $searchType = "";
            $fullQuery = $search ?explode(",",trim($search)) : null;
            if(!empty($fullQuery) && count($fullQuery) > 0){
                $searchQuery = trim($fullQuery[0]);
                $searchType = $fullQuery[1] ? trim($fullQuery[1]) : "";
            }
            try{
                $curl = curl_init($requestUrl);
                curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
                $response = curl_exec($curl);
                $result = [];
                $error = null;
                if ($response === false) {
                    $error = curl_error($curl);
                }
                else{
                    $data = json_decode($response);
                    if($searchQuery !== ""){
                        foreach ($data as $rocket) {
                            $objectValue = $searchType === "rocket_name" ? 
                                trim($rocket->rocket_name ?? "") 
                                : ($searchType === "type" ? trim($rocket->engines ?$rocket->engines->type : "")
                                : ($searchType === "original_launch" ? trim($rocket->country ??  ""):""));
                            // convert the rocket name to lowercase
                            $rocketName = strtolower($objectValue);
                        
                            // check if the rocket name contains the search query
                            if (strpos($rocketName, strtolower($searchQuery)) !== false) {
                                // if the search query is found, add the rocket to the result
                                $result[] = $rocket;
                            }
                        }
                    }
                    else{
                        $result = $data;
                    }
                }
                // set metadata
                $totalItems = count($result);
                $totalPages = ceil($totalItems / $itemsPerPage);

                // metadata array
                $metadata = [
                    'totalItems' => $totalItems,
                    'currentPage' => $page,
                    'itemsPerPage' => $itemsPerPage,
                    'totalPages' => $totalPages
                ];
                $paginatedResult = [];
                if(count($result) > 0){
                    $paginatedResult = array_slice($result, $offset, $itemsPerPage);
                }
                if($error){
                    return [
                        "statusCode" => 500,
                        "data" =>$error
                    ];
                }
                else{
                    return [
                        "statusCode" => 200,
                        "data" =>["rocketsData"=>$paginatedResult,"meta"=>$metadata]
                    ];
                }
                curl_close($curl);
            }
            catch(Exception $e){
                return [
                    "statusCode" => 500,
                    "data" => $e
                ];
            }
        }
    }
?>