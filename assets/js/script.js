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
    presentDay.text("The current day, date, and time is: " + presentData);

    // Second: Make the 9-5 nine timeblocks display
    //// Here are all the timeblocks I will need

    var timeblockList = [
        {hour: "9:00 AM"},
        {hour: "10:00 AM"},
        {hour: "11:00 AM"},
        {hour: "12:00 PM"},
        {hour: "1:00 PM"},
        {hour: "2:00 PM"},
        {hour: "3:00 PM"},
        {hour: "4:00 PM"},
        {hour: "5:00 PM"},
    ]
    console.log(timeblockList);

    //// I'll need to reference the html where to put the timeslots eventually.
    var timeblockContainer = $(".container");

    //// Go through each timeblock and add their row & 3 columns
    for ( i = 0; i < timeblockList.length; i++) {
        var timeblockRow = $("<div>").addClass("row");
        timeblockContainer.append(timeblockRow);

        var timeCol = $("<div>").addClass("col-sm-1").text("Hey Hey");
        timeblockRow.append(timeCol);

        var textCol = $("<textarea>").addClass("col-sm-10").text("Sup sup");
        timeblockRow.append(textCol);

        var btnCol = $("<button>").addClass("col-sm-1");
        timeblockRow.append(btnCol);
    }
})