//when the webpage is loaded
jQuery(document).ready(function($) {

    //initial
    $(".tm-content").load('page/home.php');

    //handle clicks
    $('ul#nav li a').click(function(){
        var page = $(this).attr('href');
        $(".tm-content").load('page/' + page + '.php');
        return false;
    });


    
});