$(document).ready(function() {
    
    $("#Apple2").hide();
    $("#Banana2").hide();
    $("#Orange2").hide();
    $("#Peach2").hide();
    $("#Plum2").hide();
    
    $("#Apple").click(function() {
        $("#Apple").hide();
        $("#Apple2").show();
    });
    $("#Banana").click(function() {
        $("#Banana").hide();
        $("#Banana2").show();
    });
    $("#Orange").click(function() {
        $("#Orange").hide();
        $("#Orange2").show();
    });
    $("#Peach").click(function() {
        $("#Peach").hide();
        $("#Peach2").show();
    });
    $("#Plum").click(function() {
        $("#Plum").hide();
        $("#Plum2").show();
    });
});