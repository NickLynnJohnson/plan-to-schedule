// Write all the moment and other code here - don't change anything to the index.html file.

// What I need to do:
//// Add an uptodate Moment timestamp beneath the title
//// Add a section below the horizontal bar for timeslots from 9am to 5pm (note: how to do 12 hr vs. 24 hr?)
////// Since the assignment will always have fixed hours from 9-5, I could make an array with just these values
////// Will need 9 rows total. I don't want to manually write out 9 rows...
////// Each row needs 3 columns: the hour, the text area, the submit button
////// Special note about the text area: it needs to change color based on past, present, future related to the current Moment timestamp
////// Then the toughie: user will enter text into the text area for each row, and this information needs to save and be present for each refresh

// Notes:
//// I don't need to worry about deleting each note saved

// Start the document function
$(document).ready(function() {

    // First: Timestamp work
    //// I need to bring in the section from the html where I want to put the date stamp from Moment
    var presentDay = $("#currentDay");

    //// Here's the documentation from moment: https://momentjs.com/docs/#/displaying/
    var presentData = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    presentDay.text("The current date and time is: " + presentData);

    // Second: Make the 9-5 nine timeblocks display
    //// Here are all the timeblocks I will need

    var timeblockList = [
        {
            hour: "9:00 AM",
            displayID: 9
        },
        {   
            hour: "10:00 AM",
            displayID: 10
        },
        {
            hour: "11:00 AM",
            displayID: 11
        },
        {
            hour: "12:00 PM",
            displayID: 12
        },
        {
            hour: "1:00 PM",
            displayID: 13
        },
        {
            hour: "2:00 PM",
            displayID: 14
        },
        {
            hour: "3:00 PM",
            displayID: 15
        },
        {
            hour: "4:00 PM",
            displayID: 16
        },
        {
            hour: "5:00 PM",
            displayID: 17
        },
    ]

    //// I'll need to reference the html where to put the timeslots eventually. I'll need to reference the current moment hour to make the row col stylish. 
    var timeblockContainer = $(".container");
    var presentHour = moment().format("H");

    //// Go through each timeblock and add their row & 3 columns
    for ( i = 0; i < timeblockList.length; i++) {

        // It seems that my timeblock array loses scope once I'm in the for loop so I need to define it here again to use down below. Also I have to use a const here.
        const timeID = timeblockList[i].displayID;

        // The row
        var timeblockRow = $("<div>").addClass("row");
        timeblockContainer.append(timeblockRow);

        // The timeblock's hour column
        var timeCol = $("<div>").addClass("col-sm-1 hour").text(timeblockList[i].hour);
        timeblockRow.append(timeCol);

        // The column for text entry
        //// Also have it check if there is anything in localstorage, if so, text it to the display (see localStorage.setitem work below)
        var textCol = $("<textarea>").addClass("col-sm-10 description").attr("id", timeblockList[i].displayID).text(localStorage.getItem("#" + timeID));
        timeblockRow.append(textCol);

        // The last column for the submit button
        //// Add the onclick function to each button
        var btnCol = $("<button>").addClass("col-sm-1 fas fa-save saveBtn").on("click", function(event) {
            event.preventDefault();

            //// Collect the value and then also put that value into localstorage
            var timeblockInput = $("#" + timeID).val();
            localStorage.setItem("#" + timeID, timeblockInput);
        });
        timeblockRow.append(btnCol);

        //// Check the timeblock ids just generated and compare to moment hour. Put past, present, future rules in place for how the css background colors should display.
        if (timeblockList[i].displayID < presentHour) {
            textCol.addClass("past");
            textCol.removeClass("present");
            textCol.removeClass("future");
        } else if (timeblockList[i].displayID > presentHour) {
            textCol.addClass("future");
            textCol.removeClass("past");
            textCol.removeClass("present");
        } else {
            textCol.addClass("present");
            textCol.removeClass("past");
            textCol.removeClass("future"); 
        }  
    } 
})