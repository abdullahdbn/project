 
    //********************validation 
    // Wait for the DOM to be ready
jQuery(function ($) {
    $('#form').validate({
        rules: {
            
            name: {
                required: true,
                minlength: 2,
                maxlength: 20,
                lettersonly: true,
                Email: true
            },
      nric: {
        required: true,
        minlength: 5
      }
    },
    // Specify validation error messages
        masseges: {
     name: {
                required: "Please enter your name",
                minlength: "Name should be more than 5 characters",
                maxlength: "Name should be less than 20 characters",
                lettersonly: "Name should contain only letters"
            },
nric: {
        required: "please enter the pasword",
        minlength: "not validpassword"
      }    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});