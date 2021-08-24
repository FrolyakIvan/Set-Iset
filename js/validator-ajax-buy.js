$(function(){
            $('#buy-submit-btn').click(function() {  
                // validate and process form here  
                $('#main_form_ajaxxx').validate({
                    errorClass: "no-allowed",
                    rules: {
                        // Set rules for special fields (email/phone?)
                        B_name: {
                            required: true
                        },
                        B_email: {
                            required: true,
                            email: true
                        }
                    },
                    message: {
                         
                         "B_name": {
                            required: "Введите свое имя",
                         },
                         "B_email": {
                            required: "Введите адрес электронной почты",
                            email: ""
                         } 
                    },
                    
                    // JQuery's awesome submit handler.
                    submitHandler: (function (form) {
                    
                        // Create variables from the form
                        var to = $('input#to').val();
                        var fullname = $('input#B_name').val(); 
                        var emailaddress = $('input#B_email').val();  
                        var message = $('textarea#message').val();
                    
                        // Create variables that will be sent in a URL string to mail.php
                        var dataString = 'to=' + to + '&B_name='+ fullname + '&B_email=' + emailaddress + '&message=' + message;
                        
                        // The AJAX
                        $.ajax({  
                          type:"POST",
                          url: "../payment-mail.php",
                          data: dataString,
                          success: (function(data) {
                            // This is a callback that runs if the submission was a success.$('#modal_thanks').modal('show');
       $('#modal_thanks').modal('show');
    $('#main_form_ajaxxx').trigger("reset");
     $("#modal_hidee").modal("hide");
                            
                            // Clear the form
                            $(':input','#main_form_ajaxxx')
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
