$(document).ready(function() {
    // ****************************
    // Load Contents
    //*****************************
    
    ///load html components
    // $(".tm-sidebar").load('page/sidebar.php');
    // $(".tm-header").load('page/header.php');

    //Load page without refresh
    // $('ul#nav li a').click(function(){
    //     var page = $(this).attr('href');
    //     $(".tm-content").load('page/' + page + '.php');
    //     return false;
    // });

    //populate data in the drop down lists
    $("#courseList").mirandajs(course_list);
    $("#lectureHallList").mirandajs(lecture_hall_list);
    $("#roomList").mirandajs(room_list);
    $("#tutorList").mirandajs(tutor_name_list);

    //populate data in the homepage tables

    //empty add cause dialogue when the page loads
    emptyAddCourseDialog();



    // ****************************
    // Visual Effects
    //*****************************
    $("#clear").click(function() {
        $("#submit").text("Add Schedule");
    });

    $("#json-export").click(function() {
        $("#submit").text("Add Schedule");
    });
    
    $(".expand_less").click(function() {
        $('.fields_form').toggle('100');
        $(this).text(function(i, text){
            return text === "expand_less" ? "expand_more" : "expand_less";
        })
    });

    $("#add_course").click(function() {
        emptyAddCourseDialog() 
        $("#submit").text("Add Schedule");
        $(".fields_form").show();
    });

    // $("#main_container4all").addClass("fullScreenWidth");
    // $("#main_container4all").addClass("header_and_main");

    $("#menu_ico").click(function() {
        $('aside').toggle('100')
        $('.main_container4all').toggleClass(
            "header_and_main fullScreenWidth"
        );
            
    });

    //close and empty the dialog box.
    // $(".close").click(function() {
    //      $("#top_section").hide();
    //      emptyAddCourseDialog();   
    // });

    //highlight clicked tab when its clicked
    setNavigation();
    function setNavigation() {
        var path = window.location.pathname;
        path = path.replace(/\/$/, "");
        path = decodeURIComponent(path);
        var nameofPage = pathname.substring(pathname.lastIndexOf('/') + 1);
        console.log(nameofPage);
    
        $("#nav a").each(function () {
            var href = $(this).attr('href');
            console.log(href);
            if (nameofPage === href) {
                $(this).closest('li').addClass('active');
            }
        });
    }

});



// ****************************
// Data Set
//*****************************
var course_list =  [
    {"course_title":"CSIT 202"},
    {"course_title":"CSIT 204"},
    {"course_title":"UGBS 204"},
    {"course_title":"CSIT 208"},
    {"course_title":"UGRC 231"}
];

var lecture_hall_list =  [
    {"lecture_block":"Old Block"},
    {"lecture_block":"New Library Complex"},
    {"lecture_block":"New Block 2"},
    {"lecture_block":"N-Block"}
];

var room_list =  [
    {"lecture_room":"1A"},
    {"lecture_room":"1B"},
    {"lecture_room":"2C"},
    {"lecture_room":"2A"},
    {"lecture_room":"2B"},
    {"lecture_room":"2C"},
    {"lecture_room":"3A"},
    {"lecture_room":"3B"},
    {"lecture_room":"3C"},
    {"lecture_room":"IT Smart Class"},
    {"lecture_room":"Computer Lab"},
    {"lecture_room":"Lab 2"},
    {"lecture_room":"Room 3"},
    {"lecture_room":"Hall 1"},
    {"lecture_room":"Hall 2"}
];

var tutor_name_list =  [
    {"tutor_name":"Sir Micheal Kolugu"},
    {"tutor_name":"Prof. Alexander Ayitey"},
    {"tutor_name":"Mrs. Sarah Afrakomah"},
    {"tutor_name":"Edwina Amanso Gladson"},
    {"tutor_name":"Prof. Edem Koliko"}
];

// if (pagename == "level_100.php") {
//     alert('this is fun on page Level 100');
// }
// else if(pagename == "level_200.php"){
//     alert('this is fun on page Level 200');
// }
// else if(pagename == "level_300.php"){
//     alert('this is fun on page Level 300');
// }
// else if(pagename == "level_400.php"){
//     alert('this is fun on page Level 400');
// }