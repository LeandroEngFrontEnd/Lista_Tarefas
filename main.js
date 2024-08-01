$(document).ready(function () {

    $('header button').click(function () {
        $('form').slideDown();
    });

    $('#btn-reset').click(function () {
        $('form').slideUp();
    });

    $('header button').click(function () {
        $('.contentTask').slideDown();
    });

    $('#btn-reset').click(function () {
        $('.contentTask').slideUp();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        const valorInput = $('#inputTask').val();
        const itemTask = $('<li></li>');
        $(`<p>${valorInput}</p><i class="fa-solid fa-trash"></i>`).appendTo(itemTask);
        $(itemTask).appendTo('.contentTask');
        $('#inputTask').val('');

    });

    $('.contentTask').on('click', 'p', function () {
        $(this).toggleClass('riscar');
    });


    $('.contentTask').on('click', '.fa-trash', function () {
        $(this).parent('li').fadeOut(200);
    });

});