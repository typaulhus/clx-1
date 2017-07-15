<?php

ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
   
$_POST = $_POST;
    echo '<pre>';
print_r($_POST);
echo '</pre>';
    echo json_encode( $_POST );
    $response = array( 'success' => false );
    $_POST = file_get_contents( 'php://input' );
    $_POST = json_decode( $_POST );
    // if ( $_POST['submit && empty( $_POST['honeypot ) ) {
        $contactName = $_POST['contactName;'];
        $email = $_POST['email;'];
        $phone = $_POST['phone;'];
        $company = $_POST['company;'];
        $message = $_POST['message;'];

        // if ( $contactName != '' && $email != '' && $message != '' ) {
           
                var_dump($_POST);
               echo json_encode( '$_POST ');
            $mailTo = 'chelseapaulhus@gmail.com';
            $subject = 'New contact form submission';
            $body  = 'From: ' . $contactName . "\n";
            $body .= 'Company: ' . $company . "\n";
            $body .= 'Email: ' . $email . "\n";
            $body .= 'Phone: ' . $phone . "\n";
            $body .= "Message:\n" . $message . "\n\n";

            $success = mail( $mailTo, $subject, $body );

            if ( $success ) {
                $response[ 'success' ] = true;
            }
        // }
    // }

    echo json_encode( $response );
?>