$(function(){
            $('#request-btn').click(function() {  
                // validate and process form here  
                $('#main_form_ajaxx').validate({
                    errorClass: "error",
                    rules: {
                        // Set rules for special fields (email/phone?)
                        R_name: {
                            required: true
                        },
                        R_email: {
                            required: true,
                            email: true
                        }
                    },
                    message: {
                         
                         "R_name": {
                            required: "Введите свое имя",
                         },
                         "R_email": {
                            required: "Введите адрес электронной почты",
                            email: ""
                         } 
                    },
                    
                    // JQuery's awesome submit handler.
                    submitHandler: (function (form) {
                    
                        // Create variables from the form
                        var to = $('input#to').val();
                        var fullname = $('input#R_name').val(); 
                        var emailaddress = $('input#R_email').val();  
                        var message = $('textarea#message').val();
                    
                        // Create variables that will be sent in a URL string to mail.php
                        var dataString = 'to=' + to + '&R_name='+ fullname + '&R_email=' + emailaddress + '&message=' + message;
                        
                        // The AJAX
                        $.ajax({  
                          type:"POST",
                          url: "../contact-mail.php",
                          data: dataString,
                          success: (function(data) {
                            // This is a callback that runs if the submission was a success.$('#modal_thanks').modal('show');
       $('#modal_thanks').modal('show');
    $('#main_form_ajaxx').trigger("reset");
     $("#modal_hide").modal("hide");
                            
                            // Clear the form
                            $(':input','#main_form_ajaxx')
                             .not(':button, :submit, :reset, :hidden')
                             .val('')
                             .removeAttr('checked')
                             .removeAttr('selected');
                            return false;
                          }),
                            error: (function(){
                               
                            })
                        });
                        return false;
                    })
                });
            });
});  