// thaken from https://codepen.io/bhavsk9/pen/WxGmLe !!

$(function () {
    var pomodoro = 25 * 60;
    var longBreak = 10 * 60;
    var shortBreak = 5 * 60;
    var timerText = '25:00';
    var selectedTime = pomodoro;
    var interval = null;
    var pathclick = "sound/Arcade Click Plastic.wav";
    var pathwin = "sound/Cartoon Big Win.wav";
    // document.getElementById("myBtn").disabled = true;


    $('#timer').text('25:00');

    $('#pomodoro').on('click', function () {
        setActive($(this));
        $('#slider').hide();
        selectedTime = pomodoro;
        setTimerText(pomodoro);
    });

    $('#long').on('click', function () {
        setActive($(this));
        $('#slider').hide();
        selectedTime = longBreak;
        setTimerText(longBreak);
    });

    $('#short').on('click', function () {
        setActive($(this));
        $('#slider').hide();
        selectedTime = shortBreak;
        setTimerText(shortBreak);
    });

    $('#custom').on('click', function () {
        setActive($(this));
        $('#slider').show();
        setTimerText(pomodoro);
    });

    $('#customTimer').on('change', function () {
        if (interval) clearInterval(interval);
        var time = $('#customTimer').val();
        selectedTime = time * 60;
        setTimerText(selectedTime);
    });

    $('.btnReset').on('click', function () {
        // play click sound
        new Audio(pathclick).play();
        // document.getElementById("myBtn").disabled = true;
        setTimerText(selectedTime);
        if (interval) clearInterval(interval);
    });

    $('#btnStart').on('click', function () {
        // play click sound
        new Audio(pathclick).play();
        var timer = selectedTime,
            minutes, seconds;
        if (interval) {
            clearInterval(interval);
        }
        interval = setInterval(function () {
            setTimerText(timer);
            if (--timer < 0) {
                // timer is 0 you got a point!
                new Audio(pathwin).play();
                timer = 0;
                clearInterval(interval);
                document.getElementById("myBtn").disabled = false;
            }
        }, 1000);
    });
    $('#btnStop').on('click', function () {
        // play click sound
        new Audio(pathclick).play();
        var time = $('#timer').val().split(':');
        this.selectedTime = parseInt(time[0] * 60) + parseInt(time[1]);
        clearInterval(interval);
    });
});

function setActive(thisObj) {
    thisObj.addClass('active');
    $('a').not(thisObj).removeClass('active');
}

function setTimerText(time) {
    var minutes = parseInt(time / 60, 10);
    var seconds = parseInt(time % 60, 10);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    $('#timer').text(minutes + ':' + seconds);
}