
function setupCurrentDateEl() { // element that display the current date

    $("#currentDay").text(moment().format("dddd, MMMM Do")); // Get the current day
}

function setupSaveButtonHandlers() { // click handler to save calendar events

    $("#saveInput0").on("click", () => {
        saveText(0);
    });
    $("#saveInput1").on("click", () => {
        saveText(1);
    });
    $("#saveInput2").on("click", () => {
        saveText(2);
    });
    $("#saveInput3").on("click", () => {
        saveText(3);
    });
    $("#saveInput4").on("click", () => {
        saveText(4);
    });
    $("#saveInput5").on("click", () => {
        saveText(5);
    });
    $("#saveInput6").on("click", () => {
        saveText(6);
    });
    $("#saveInput7").on("click", () => {
        saveText(7);
    });
    $("#saveInput8").on("click", () => {
        saveText(8);
    });

}

function saveText(id) { // Saves logged event to local storage 

    var currentEvents = JSON.parse(localStorage.getItem("events")); // retrievs events from localstorage

    var inputText = $(`#input${id}`).val(); // input text the user has typed

    currentEvents[id] = inputText; // Store text in local storage

    localStorage.setItem("events", JSON.stringify(currentEvents)); // save the array to local storage
}


function setupLocalStorage() { // create local storage

    var calendarEvents = JSON.parse(localStorage.getItem("events")); // array for saved for the scheduler

    if (!calendarEvents) {
        localStorage.setItem("events", JSON.stringify([]));
        return;
    }

    for (var i = 0; i < 9; i++) {
        var textAreaEl = $(`#input${i}`);
        if (calendarEvents[i]) {
            textAreaEl.val(calendarEvents[i]);
        }
    }
}

function setColors() { //sets color

    var now = moment().format("H"); // 24hr format

    for (var i = 0; i < 9; i++) {

        var hourBlock = $(`#input${i}`);

        var hour = hourBlock.attr("data-hour");

        if (now > hour) { // Set the background color to the calendar for past, present, or future events
            hourBlock.addClass("bg-secondary");
        } else if (now < hour) {
            hourBlock.addClass("bg-success");
        } else if (now == hour) {
            hourBlock.addClass("bg-danger");
        }
    }
}

function init() { // calls function for the application

    setupCurrentDateEl();// current date

    setupSaveButtonHandlers();// event handlers for save button

    setupLocalStorage();// local storage saved events

    setColors(); // colors of the time blocks for current time
}

init(); // call funtion