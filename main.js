//Javascript 

$(document).ready(function () {
    console.log('Im Ready');
    var theChange = '';

    $('.edit-in-place h1').click(function (event) {
        setInput(event);
    })

    $(".edit-in-place input").blur(function (event) {
        relieveInput(event);
    })
    //================================
    $('.edit-in-place-2 h3').click(function (event) {
        setInput(event);
    })

    $(".edit-in-place-2 input").blur(function (event) {
        relieveInput(event);
    })
    //===========================
    $('.user-Name h4').click(function (event) {
        setInput(event);
    })

    $(".user-Name input").blur(function (event) {
        relieveInput(event);
    })

    //========================
    $('.aboutText h3').click(function (event) {
        setInput(event);
    })

    $(".aboutText input").blur(function (event) {
        relieveInput(event);
    })


    //============================
    $('.main-P p').click(function (event) {
        setInput(event);
    })

    $(".main-P input").blur(function (event) {
        relieveInput(event);
    })


})

function setInput(event) {
    $(event.target).addClass('hidden');
    var theInput = $(event.target).siblings()[0]
    theChange = $(event.target).textContent;

    console.log(theChange);

    $(theInput).text($(event.target).val());
    $(theInput).toggleClass('hidden');
    $(theInput).val("");
    $(theInput).focus();
}

function relieveInput(event) {
    $(event.target).addClass('hidden');
    var theText = $(event.target).siblings()[0];

    if ($(event.target).val() !== '') {
        $(theText).text($(event.target).val());
    }

    $(theText).text($(event.target).val());
    $(theText).removeClass('hidden');
}
