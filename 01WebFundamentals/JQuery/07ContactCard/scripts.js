$(document).ready(function(){
    $('form').submit(function(){
        var first = $('#first').val();
        var last = $('#last').val();
        var description = $('#description').val();
        $('#appended_cards').append("<div class='cards'><p>" + first + " " + last + "</p><p>Click for description</p></div><div class=descText><p class='desc'>" + description + "</p></div>");
        return false;
    });
    $(document).on("click", ".cards", function(){
        $('.cards').click(function(){
            // alert('div clicked');
            // // $(this).$('div:first-child').hide();
            // // $(this).$('div:last-child').hide();
            // console.log($(description).val());
        });
    });   
});