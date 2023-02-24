$(document).ready(function() {
    $('.tab-pane').each(function(index, element) {
        if ($(element).attr('id') != 'all') {
            $(element).find('.col-md-4').clone().appendTo('#all .row');
        }
    })       
    
    $('#tel').mask('+00 00 000-000-000')
    
    $('form').validate({
        errorClass: 'error-message',
        
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: false
            },
            message: {
                required: true
            }
        },
        submitHandler: function(form) {
            alert('Message sent!* We will be replying to you as soon as possible :). *Just for educational purposes, the form is NOT really working YET.')
            form.reset();
        }
    })
})