// ___________________ section 1 _______________
$('.openNav , .closebtn').on('click', function () {
    $('.nav').animate({ width: 'toggle', paddingInline: 'toggle' }, 600)
});

// ___________________ section 2 _______________
$('.slidTextOne').on('click', function () {
    $('.firstPar').slideToggle(1000);
});

$('.slidTextTwo').on('click', function () {
    $('.secondPar').slideToggle(1000);
});

$('.slidTextThree').on('click', function () {
    $('.theerdPar').slideToggle(1000);
});

$('.slidTextFore').on('click', function () {
    $('.forthPar').slideToggle(1000);
});

// ___________________ section 3 _________________

let time = new Date('Dec 31, 2025 23:59:59').getTime();
// $(function ()...
$(document).ready(function () {
    let myCountDown = setInterval(function () {
        let dateNow = new Date().getTime();
        let timeLeft = time - dateNow;
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        $('.days').text(days);
        $('.hours').text(hours);
        $('.minutes').text(minutes);
        $('.seconds').text(seconds);

        if (timeLeft < 0) {
            clearInterval(myCountDown);
        }
    }, 1000)
});


// TextArea

$('.myTextarea').on('keyup', function () {
    let text = $(this).val().length;
    $('.myCount').text(100 - text);

    if ($('.myCount').text() == 0 ) {
        $('.myCount').text('your available character finished ')
    }
});


