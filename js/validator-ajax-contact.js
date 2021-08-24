$(function(){
            $('#submit-btn').click(function() {  
                // validate and process form here  
                $('#main_form_ajax').validate({
                    errorClass: "invalid",
                    rules: {
                        // Set rules for special fields (email/phone?)
                        C_name: {
                            required: true
                        },
                        C_email: {
                            required: true,
                            email: true
                        },
                        C_message: {
                            required: true
                        }
                    },
                    message: {
                         
                         "C_name": {
                            required: "Введите свое имя",
                         },
                         "C_email": {
                            required: "Введите адрес электронной почты",
                            email: ""
                         },     
                         "C_message": {
                            required: "Введите ваше сообщение"
                         }  
                    },
                    
                    // JQuery's awesome submit handler.
                    submitHandler: (function (form) {
                    
                        // Create variables from the form
                        var to = $('input#to').val();
                        var fullname = $('input#C_name').val(); 
                        var emailaddress = $('input#C_email').val();  
                        var message = $('textarea#C_message').val();
                    
                        // Create variables that will be sent in a URL string to mail.php
                        var dataString = 'to=' + to + '&C_name='+ fullname + '&C_email=' + emailaddress + '&C_message=' + message;
                        
                        // The AJAX
                        $.ajax({  
                          type:"POST",
                          url: "../mail.php",
                          data: dataString,
                          success: (function(data) {
                            // This is a callback that runs if the submission was a success.$('#modal_thanks').modal('show');
       $('#modal_thanks').modal('show');
    $('#main_form_ajax').trigger("reset");
                            
                            // Clear the form
                            $(':input','#main_form_ajax')
                             .not(':button, :submit, :reset, :hidden')
                             .val('')
                             .removeAttr('checked')
                             .removeAttr('selected');
                            return false;
                          }),
                            
                        });
                        return false;
                    })
                });
            });
});  