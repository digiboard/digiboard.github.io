var l200TimeTable = [];
var selectedIndex = -1;
function init() {
    document.getElementById("tablerows").innerHTML = "";
    if (localStorage.level200Schedule) {
        l200TimeTable = JSON.parse(localStorage.level200Schedule);
        for (var i = 0; i < l200TimeTable.length; i++) {
            prepareTableCell(i, l200TimeTable[i].courseName, l200TimeTable[i].startTime, l200TimeTable[i].endTime, l200TimeTable[i].venue, l200TimeTable[i].roomName, l200TimeTable[i].tutorName);
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
    console.log(courseName);

    var scheduleObject = {courseName: courseName, startTime: startTime, endTime: endTime, venue: venue, roomName: roomName, tutorName: tutorName};
    if (selectedIndex === -1) {
        l200TimeTable.push(scheduleObject);
    } else {
        l200TimeTable.splice(selectedIndex, 1, scheduleObject);
    }

    localStorage.level200Schedule = JSON.stringify(l200TimeTable);
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
    /*
     var table = document.getElementById("l200Timetable");
     table.deleteRow(index+1);
     */
    l200TimeTable.splice(index, 1);
    localStorage.level200Schedule = JSON.stringify(l200TimeTable);
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
    var scheduleObject = l200TimeTable[index];
    document.getElementById("courseList").value = scheduleObject.courseName;
    document.getElementById("lectureHallList").value = scheduleObject.venue;
    document.getElementById("tutorList").value = scheduleObject.tutorName;
    document.getElementById("roomList").value = scheduleObject.roomName;
    document.getElementById("start_time").value = scheduleObject.startTime;
    document.getElementById("end_time").value = scheduleObject.endTime;
    document.getElementById("add_course_dialog").style.display = "block";
    document.getElementById("submit").innerHTML = "Update";
}

function onDeployPressed() {
    var myJsonString = localStorage.level200Schedule.toString();
    var textArea = document.getElementById("showJson");
    
    textArea.innerHTML = JSON.stringify(l200TimeTable, null, 4);
    console.log(myJsonString);

    // JSON.stringify(yourJSObjectHere, null, 1)
}


    
    
        



