// Variable declarations
let today = moment();
let currentHr = parseInt(today.format("H"));
let headerDate = today.format("dddd, MMMM Do");
let saveDate = today.format("L");
let timeBlockEl = $(".time-block");
let timeBlockId = timeBlockEl.attr("id");
let timeBlockHr = parseInt(timeBlockId);
let saveBtnEl = $(".saveBtn");


// Function that adds appropriate color to timeblock based on current time
function timeBlockStyle() {
    timeBlockEl.each(function () {
        // Use "this" so that it works for each block in the container
        timeBlockHr = parseInt($(this).attr("id"));
        // First we remove every class
        $(this).removeClass("past future present");
        // Then add the class to each block accordingly
        if (currentHr > timeBlockHr) {
            $(this).addClass("past");
        } else if (currentHr < timeBlockHr) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

// Function for saving data in local storage
function saveText(event) {
    // Redefines timeBlockId to refer to the time block the save button belongs to
    let timeBlockId = $(this).parent().attr("id");
    let textAreaContent = $('#' + timeBlockId + " textarea").val()
    // This sets a unique key for each time block while also saving the content
    // Key is unique to that day
    localStorage.setItem(saveDate + "-" + timeBlockId, textAreaContent);
}

// Function for loading data in text area from local storage
function loadText() {
    timeBlockEl.each(function () {
        // Redefines timeBlockId to use "this" so that it refers each time block in this function
        let timeBlockId = $(this).attr("id");
        let textArea = $('#' + timeBlockId + " textarea");
        // Key changes every day
        textArea.text(localStorage.getItem(saveDate + "-" + timeBlockId));
    });
}

// Displays time
$("#currentDay").text(headerDate);

// Call functions & event handlers
timeBlockStyle();
loadText();
saveBtnEl.on("click", saveText);

