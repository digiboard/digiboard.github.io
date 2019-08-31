<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/homepage.css?version=5">
    <link href="https://fonts.googleapis.com/css?family=Anton|Catamaran|Livvic|Montserrat|Open+Sans|Open+Sans+Condensed:300|Oswald|Poppins:400,500,700,900|Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <title>Level 100 | Time Table</title>
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/jquery.miranda.js"></script>
    <script src="js/main.js"></script>
    <script src="js/script.js"></script>
</head>
<body onload="init()">

    <aside>
        <div class="tm-sidebar">
            <div class="tm-logo">
                <i class="material-icons">panorama_fish_eye</i>
                <h1><span id="digital-txt">DNB</span></h1>
            </div>
            <nav>
                <div class="tm-levels">
                    <h1>Time Table</h1>
                    <ul id="nav">
                        <li class="nav-item">
                            <a href="homepage.php">
                                <div id="nav_icon"><i class="material-icons">home</i></div>
                                <div id="nave_text">Home</div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="level_100.php">
                                <div id="nav_icon"><i class="material-icons">label_important</i></div>
                                <div id="nave_text">Level 100</div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="level_200.php">
                                <div id="nav_icon"><i class="material-icons">label_important</i></div>
                                <div id="nave_text">Level 200</div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="level_300.php">
                                <div id="nav_icon"><i class="material-icons">label_important</i></div>
                                <div id="nave_text">Level 300</div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="level_400.php">
                                <div id="nav_icon"><i class="material-icons">label_important</i></div>
                                <div id="nave_text">Level 400</div>
                            </a>
                        </li>
                    </ul>
                    <div class="btn-wrapper">
                        <button>Add Group</button>
                    </div>
                </div>

                <div class="tm-more">
                    <h1>More</h1>
                    <ul>
                        <li class="nav-item">
                            <a href="#">
                                <div id="nav_icon"><i class="material-icons">brightness_1</i></div>
                                <div id="nave_text">Annoucement</div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#">
                                <div id="nav_icon"><i class="material-icons">brightness_1</i></div>
                                <div id="nave_text">Suggestions</div>
                            </a>
                        </li>
                    </ul>
                </div>
        
                <div class="legal-details">
                    <h5>Legal Details</h5>
                    <p>Copyright details will stay here</p>
                </div>
            </nav>
        </div>
    </aside>

    <div class="header_and_main main_container4all">
       <header>
            <div class="tm-header">
                <div class="nav_button" id="menu_ico">
                    <i class="material-icons">menu</i>
                </div>
                
                <div class="logo_img_wrapper"> <!-- this is hidden for now  -->
                    <img src="images/logo.png" alt="dnb logo">
                </div>

            </div>
        </header>      

        
            
        <main>
            <!-- 
                Add course dialogue box
            -->
            <section id="top_section" class="add_a_course">
                <div class="page_topic">
                    <p>
                        Time Table | Level 200
                    <p>
                    <div class="deploy_options">
                        <button id="btn-deploy" onclick="onDeployPressed()">
                            <!-- <i class="material-icons">import_export</i> -->
                            Deploy
                        </button>
                        <button id="btn-deploy" onclick="onDeployPressed()">
                            <!-- <i class="material-icons">import_export</i> -->
                            Import
                        </button>
                    </div>
                </div>

                <h3>
                    ADD A COURSE
                    <i class="material-icons expand_less">expand_less</i>   
                </h3>

                <form method="GET" class="fields_form clearfix" action=""> 
                        <fieldset class="form_cat">
                            <label for="course">Course: <span style="color:red">*</span> </label>
                            <select name="courses" class="dropdown" id="courseList">
                                <option>[[course_title]]</option>
                            </select>  
                        </fieldset>
                        <fieldset class="form_cat_time">
                            <label for="start_time">Start Time: <span style="color:red">*</span> </label>
                            <input type="time" name="start_time" id="start_time" class="time">    
                        </fieldset>
                        <fieldset class="form_cat_time">
                            <label for="end_time">End Time: <span style="color:red">*</span> </label>
                            <input type="time" name="end_time" id="end_time" class="time">    
                        </fieldset>
                        <fieldset class="form_cat">
                            <label for="venue">Venue: <span style="color:red">*</span> </label>
                            <select name="venue" class="dropdown" id="lectureHallList">
                                <option>[[lecture_block]]</option>
                            </select>       
                        </fieldset>
                        <fieldset class="form_cat">
                            <label for="room">Room: <span style="color:red">*</span> </label>
                            <select name="room" class="dropdown" id="roomList">
                                <option>[[lecture_room]]</option>
                            </select>       
                        </fieldset>
                        <fieldset class="form_cat">
                            <label for="lecturerName">Lecturer: <span style="color:red">*</span> </label>            
                            <select name="lecturer" class="dropdown" id="tutorList">
                                <option>[[tutor_name]]</option>
                            </select>       
                        </fieldset>
                    

                        <fieldset class="options_btns">
                            <div></div>
                            <button id="submit" onclick="onRegisterPressed()">Add Schedule</button>
                            <button id="clear" onclick="onClearPressed()">Clear</button>
                        </fieldset>
                   
                </form>      
            </section>

            <section id="middle_section" class="add_a_course">

            </section>



            <!-- Course Section -->
            <section class="table-container">
                <div class="levels_container" id="table-content">
                    <table class="table" id="timetable">
                        <thead>
                            <tr>
                                <th class="td-course">Course</th>
                                <th class="td-time">Time</th>
                                <th class="td-venue">Venue</th>
                                <th class="td-room">Room</th>
                                <th class="td-tutor">Tutor</th>
                                <th class="td-action">Action</th>
                            </tr>
                        </thead>

                        <tbody id="tablerows">
                            
                        </tbody>
                    </table>

                </div>
            </section> 
            <pre id="showJson">

            </pre> 
            
        </main>
    </div>
    

</body>
</html>