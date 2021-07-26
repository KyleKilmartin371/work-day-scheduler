//todays date and time
var currentDay = moment().format("dddd MM. YY");
var currentDayEl = $("#currentDay");
currentDayEl.text(currentDay);


//local storage for each timeslot
var time9 = localStorage.getItem("slot9");
$("#time9").val(time9);

var time10 = localStorage.getItem("slot10");
$("#time10").val(time10);

var time11 = localStorage.getItem("slot11");
$("#time11").val(time11);

var time12 = localStorage.getItem("slot12");
$("#time12").val(time12);

var time1 = localStorage.getItem("slot1");
$("#time1").val(time1);

var time2 = localStorage.getItem("slot2");
$("#time2").val(time2);

var time3 = localStorage.getItem("slot3");
$("#time3").val(time3);

var time4 = localStorage.getItem("slot4");
$("#time4").val(time4);

var time5 = localStorage.getItem("slot5");
$("#time5").val(time5);



//functions to save notes to local storage
$("#btn9").on("click", function(){
    var block9 = $("#time9").val();
    localStorage.setItem("slot9", block9);
});

$("#btn10").on("click", function(){
    var block10 = $("#time10").val();
    localStorage.setItem("slot10", block10);
});

$("#btn11").on("click", function(){
    var block11 = $("#time11").val();
    localStorage.setItem("slot11", block11);
    console.log(block11);
});

$("#btn12").on("click", function(){
    var block12 = $("#time12").val();
    localStorage.setItem("slot12", block12);
});

$("#btn1").on("click", function(){
    var block1 = $("#time1").val();
    localStorage.setItem("slot1", block1);
});

$("#btn2").on("click", function(){
    var block2 = $("#time2").val();
    localStorage.setItem("slot2", block2);
});

$("#btn3").on("click", function(){
    var block3 = $("#time3").val();
    localStorage.setItem("slot3", block3);
});

$("#btn4").on("click", function(){
    var block4 = $("#time4").val();
    localStorage.setItem("slot4", block4);
});

$("#btn5").on("click", function(){
    var block5 = $("#time5").val();
    localStorage.setItem("slot5", block5);
});

//change blocks depending on time of day
var currentTime = moment().hour();

$(".time-block").each(function () {
    var textBlock = $(this).attr("id");
    // textBlock = textBlock.substring(1, textBlock.length);
    textBlock = parseInt(textBlock);

    if (textBlock < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }else if (textBlock === currentTime) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    }else{
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    }
});

$(document).ready(function(){
    setInterval(function(){
        if (currentTime !=moment().hour()) {
            location.reload();
        }
    },60 * 1000);
});