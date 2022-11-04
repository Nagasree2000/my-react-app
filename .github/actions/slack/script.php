<?php

require_once 'vendor/autoload.php';
Requests::register_autoloader();

//var_dump( $argv );

//var_dump( $_ENV );
echo "::debug ::Sending a request to slack";

$response = Requests::post(
 $_ENV['INPUT_SLACK_WEBHOOK'],
     array(
        'content-type'=> 'application/json'
     ),
    
        json_encode(array(
            'text'=> $_ENV['INPUT_MESSAGE']
        ),
      ),
     
        );

        var_dump( $response );

        if( !$response->success )
        {
           echo $response->body;
        }
        