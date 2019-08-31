// Get the page name
var pathname = window.location.pathname;
var pagename = pathname.substring(pathname.lastIndexOf('/') + 1);
// console.log("pagename = " +pagename);

// Create the time table arrays
var l100TimeTable = [];
var l200TimeTable = [];
var l300TimeTable = [];
var l400TimeTable = [];

var selectedIndex = -1;

function init() {
    document.getElementById("tablerows").innerHTML = "";
    if (pagename == "level_100.html") {
        if (localStorage.level100Schedule) {
            l100TimeTable = JSON.parse(localStorage.level100Schedule);
            for (var i = 0; i < l100TimeTable.length; i++) {
                prepareTableCell(i, l100TimeTable[i].courseName, l100TimeTable[i].startTime, l100TimeTable[i].endTime, l100TimeTable[i].venue, l100TimeTable[i].roomName, l100TimeTable[i].tutorName);
            }
        }
    }
    else if(pagename == "level_200.html"){
        if (localStorage.level200Schedule) {
            l200TimeTable = JSON.parse(localStorage.level200Schedule);
            for (var i = 0; i < l200TimeTable.length; i++) {
                prepareTableCell(i, l200TimeTable[i].courseName, l200TimeTable[i].startTime, l200TimeTable[i].endTime, l200TimeTable[i].venue, l200TimeTable[i].roomName, l200TimeTable[i].tutorName);
            }
        }
    }
    else if(pagename == "level_300.html"){
        if (localStorage.level300Schedule) {
            l300TimeTable = JSON.parse(localStorage.level300Schedule);
            for (var i = 0; i < l300TimeTable.length; i++) {
                prepareTableCell(i, l300TimeTable[i].courseName, l300TimeTable[i].startTime, l300TimeTable[i].endTime, l300TimeTable[i].venue, l300TimeTable[i].roomName, l300TimeTable[i].tutorName);
            }
        }
    }
    else if(pagename == "level_400.html"){
        if (localStorage.level400Schedule) {
            l400TimeTable = JSON.parse(localStorage.level400Schedule);
            for (var i = 0; i < l400TimeTable.length; i++) {
                prepareTableCell(i, l400TimeTable[i].courseName, l400TimeTable[i].startTime, l400TimeTable[i].endTime, l400TimeTable[i].venue, l400TimeTable[i].roomName, l400TimeTable[i].tutorName);
            }
        }
    }    
}


function emptyAddCourseDialog() {
    document.getElementById("courseList").value = "";
    document.getElementById("lectureHallList").value = "";
    document.getElementById("tutorList").value = "";
    document.getElementById("roomList").value = "";
    document.getElementById("start_time").value = "";
    document.getElementById("end_time").value = ""; 
}


function onRegisterPressed() {
    var courseName = document.getElementById("courseList").value;
    var venue = document.getElementById("lectureHallList").value;
    var roomName = document.getElementById("roomList").value;
    var tutorName = document.getElementById("tutorList").value;
    var startTime = document.getElementById("start_time").value;
    var endTime = document.getElementById("end_time").value;
    // var timeRange = startTime + " - " + endTime; 
    // console.log(courseName);
    var scheduleObject = {courseName: courseName, startTime: startTime, endTime: endTime, venue: venue, roomName: roomName, tutorName: tutorName};
    if (pagename == "level_100.html") {
        if (selectedIndex === -1) {
            l100TimeTable.push(scheduleObject);
        } else {
            l100TimeTable.splice(selectedIndex, 1, scheduleObject);
        }
        localStorage.level100Schedule = JSON.stringify(l100TimeTable);
    }
    else if(pagename == "level_200.html"){
        if (selectedIndex === -1) {
            l200TimeTable.push(scheduleObject);
        } else {
            l200TimeTable.splice(selectedIndex, 1, scheduleObject);
        }
        localStorage.level200Schedule = JSON.stringify(l200TimeTable);
    }
    else if(pagename == "level_300.html"){
        if (selectedIndex === -1) {
            l300TimeTable.push(scheduleObject);
        } else {
            l300TimeTable.splice(selectedIndex, 1, scheduleObject);
        }
        localStorage.level300Schedule = JSON.stringify(l300TimeTable);
    }
    else if(pagename == "level_400.html"){
        if (selectedIndex === -1) {
            l400TimeTable.push(scheduleObject);
        } else {
            l400TimeTable.splice(selectedIndex, 1, scheduleObject);
        }
        localStorage.level400Schedule = JSON.stringify(l400TimeTable);
    }
    init();
    onClearPressed();
}


function prepareTableCell(index, courseName, startTime, endTime, venue, roomName, tutorName) {
    var table = document.getElementById("tablerows");
    var row = table.insertRow();
    var courseNameCell = row.insertCell(0);
    var timeCell = row.insertCell(1);
    var venueCell = row.insertCell(2);
    var roomCell = row.insertCell(3);
    var tutorNameCell = row.insertCell(4);
    var actionCell = row.insertCell(5);
    courseNameCell.innerHTML = courseName;
    var timeRange = startTime + " - " + endTime; 
    timeCell.innerHTML = timeRange;
    venueCell.innerHTML = venue;
    roomCell.innerHTML = roomName;
    tutorNameCell.innerHTML = tutorName;
    actionCell.innerHTML = '<button onclick="onEditPressed(' + index + ')" id="edit-btn">Edit</button><button onclick="deleteTableRow(' + index + ')" id="delete-btn">Delete</button>';
}


function deleteTableRow(index) {
    if (pagename == "level_100.html") {
        l100TimeTable.splice(index, 1);
        localStorage.level100Schedule = JSON.stringify(l100TimeTable);
    }
    else if(pagename == "level_200.html"){
        l200TimeTable.splice(index, 1);
        localStorage.level200Schedule = JSON.stringify(l200TimeTable);
    }
    else if(pagename == "level_300.html"){
        l300TimeTable.splice(index, 1);
        localStorage.level300Schedule = JSON.stringify(l300TimeTable);
    }
    else if(pagename == "level_400.html"){
        l400TimeTable.splice(index, 1);
        localStorage.level400Schedule = JSON.stringify(l400TimeTable);
    }
    init();
}


function onClearPressed() {
    selectedIndex = -1;
    document.getElementById("courseList").value = "";
    document.getElementById("lectureHallList").value = "";
    document.getElementById("tutorList").value = "";
    document.getElementById("roomList").value = "";
    document.getElementById("start_time").value = "";
    document.getElementById("end_time").value = "";    
}


function onEditPressed(index) {
    selectedIndex = index;
    if (pagename == "level_100.html") {
        var scheduleObject = l100TimeTable[index];
    }
    else if(pagename == "level_200.html"){
        var scheduleObject = l200TimeTable[index];
    }
    else if(pagename == "level_300.html"){
        var scheduleObject = l300TimeTable[index];
    }
    else if(pagename == "level_400.html"){
        var scheduleObject = l400TimeTable[index];
    }
    document.getElementById("courseList").value = scheduleObject.courseName;
    document.getElementById("lectureHallList").value = scheduleObject.venue;
    document.getElementById("tutorList").value = scheduleObject.tutorName;
    document.getElementById("roomList").value = scheduleObject.roomName;
    document.getElementById("start_time").value = scheduleObject.startTime;
    document.getElementById("end_time").value = scheduleObject.endTime;
    document.getElementById("top_section").style.display = "block";
    document.getElementById("submit").innerHTML = "Update";
}


function onDeployPressed() {
    if (pagename == "level_100.html") {
        var myJsonString = localStorage.level100Schedule.toString();
        // var textArea = document.getElementById("showJson");
        // textArea.innerHTML = JSON.stringify(l100TimeTable, null, 4);
        console.log(l100TimeTable);
    }
    else if(pagename == "level_200.html"){
        var myJsonString = localStorage.level200Schedule.toString();
        // var textArea = document.getElementById("showJson");
        // textArea.innerHTML = JSON.stringify(l200TimeTable, null, 4);
        console.log(l200TimeTable);
    }
    else if(pagename == "level_300.html"){
        var myJsonString = localStorage.level300Schedule.toString();
        // var textArea = document.getElementById("showJson");
        // textArea.innerHTML = JSON.stringify(l300TimeTable, null, 4);
        console.log(l300TimeTable);
    }
    else if(pagename == "level_400.html"){
        var myJsonString = localStorage.level400Schedule.toString();
        // var textArea = document.getElementById("showJson");
        // textArea.innerHTML = JSON.stringify(l400TimeTable, null, 4);
        console.log(l400TimeTable);
    }

    console.log(myJsonString);
}



// heightlight selected page tab
// var url = window.location.href;// Get current page URL
// url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));// remove # from URL
// url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));// remove parameters from URL
// url = url.substr(url.lastIndexOf("/") + 1);// select file name
// if(url == ''){// If file name not avilable
//     url = 'index.html';
// }
// $('.nav li').each(function(){// Loop all menu items
//     var href = $(this).find('a').attr('href');// select href
//     if(url == href){// Check filename
//     $(this).addClass('active');// Add active class
//     }
// });
