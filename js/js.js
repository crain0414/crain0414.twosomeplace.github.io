$(document).ready(function(){

    $("#sub_title02>p:nth-child(1)").click(function(){

        $("#dessert").fadeIn();
        $("#coffee").fadeOut();
        $("#deli").fadeOut();

    });

    $("#sub_title02>p:nth-child(2)").click(function(){

        $("#dessert").fadeOut();
        $("#coffee").fadeIn();
        $("#deli").fadeOut();

    });

    $("#sub_title02>p:nth-child(3)").click(function(){

        $("#dessert").fadeOut();
        $("#coffee").fadeOut();
        $("#deli").fadeIn();

    });
    

    


}); //end