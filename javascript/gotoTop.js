$(document).ready(function (){
    $("#goUp").hide()

    $(window).scroll (function(){
        if($(this).scrollTop() >= 100){
            $("#goUp").show("slow")
        }
        else {
            $("#goUp").hide("fast")
        }
    })

    $("#goUp").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1500)
    })
});