var output=[];
var currentHr = new Date().getHours();

//To load day planner called by html body onload event
function loadDp() {
    var rowEnd;
    var rowBegin;
    setClock();
    for(var x=9; x < 24; x++) {
        row ='<div id="' + x + '" class="row">'+
             '<div align="right" class="hour">'+ (x > 12 ? (x-12) : x) + " "+ (x > 11 ? 'pm' : 'am') + '</div>' + 
             '<textarea id="hour'+x+'" class=' + (x < currentHr ? "past" : x === currentHr ? "present" : "future") + '></textarea>' +
             '<button onclick="setSchedule(' + x + ')" class="saveBtn fas fa-save"></button>'+
             '</div>';
        output.push(row); 
    }
    $(".container").append(output);
    for(var x=9; x < 24; x++) {
        getSchedule(x);
    }
}

//To display running clock and to set color based on current hour
function setClock() {
    var time = moment().format('HH:mm:ss a');
    var day = moment().format('dddd');
    if(currentHr < moment().format('HH')) {
        currentHr = moment().format('HH');
        $('.present').addClass('past').removeClass('present');
        $('.future:first').addClass('present').removeClass('future')
    } 
    $("#clock").html(day + " " + time);
}

setInterval(function() {
    setClock();
}, 1000);

//To store schedule to local storage with hour as key
function setSchedule(hour){
    localStorage.setItem(hour, $("#hour"+hour).val());
}

//To retrieve schedule from local storage
function getSchedule(hour) {
    console.log('From localstorage for:' + hour + " >>" + localStorage.getItem(hour));
    $("#hour"+hour).val(localStorage.getItem(hour));
}