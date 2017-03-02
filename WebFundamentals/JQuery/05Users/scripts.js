$(document).ready(function(){
    $('form').submit(function(){
        var first = $('#first').val();
        var last = $('#last').val();
        var email = $('#email').val();
        var contact = $('#contact').val();
        $('table').append("<tr><td>" + first + "</td><td>" + last + "</td><td>" + email + "</td><td>" + contact + "</td></tr>");
        return false;
    });
});