<?php
    $formData = $_POST['formData'];
    $response = array( 'success' => false );
    // $formData = file_get_contents( 'php://input' );
    // $formData = json_decode( $formData );
    // if ( $formData->submit && empty( $formData->honeypot ) ) {
        $contactName = $formData->contactName;
        $email = $formData->email;
        $phone = $formData->phone;
        $company = $formData->company;
        $message = $formData->message;

        if ( $name != '' && $email != '' && $message != '' ) {
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
        }
    // }

    echo json_encode( $response );
?>