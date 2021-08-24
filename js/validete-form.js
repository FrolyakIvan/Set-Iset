$(function() {

    $('#main_form_ajax').validate({
        errorClass: "invalid",
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        message: {
             
             "name": {
                required: "Введите свое имя",
             },
             "email": {
                required: "Введите адрес электронной почты",
                email: ""
             },     
             "message": {
                required: "Введите ваше сообщение"
             }  
        },
    })
    $('#main_form_ajaxx').validate({
         errorClass: "invalid",
         validClass: "success",
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        message: {
             
             "name": {
                required: "Введите свое имя"
             },
             "email": {
                required: "Введите адрес электронной почты",
                email: ""
             }       
        },
    })

    $('#main_form_ajaxxx').validate({
        errorClass: "invalid",
        validClass: "success",
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        message: {
             
             "name": {
                required: "Введите свое имя"
             },
             "email": {
                required: "Введите адрес электронной почты",
                email: ""
             }       
        },
    })
});
