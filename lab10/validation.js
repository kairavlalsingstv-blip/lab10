/* function validate() will validate form data using jQuery */ function validate() {
    var errMsg = "";
    var result = true;
    var pattern = /^[a-zA-Z ]+$/;

    // Retrieve form element values using jQuery
    var sid = $("#sid").val();
    var pwd1 = $("#pwd1").val();
    var pwd2 = $("#pwd2").val();
    var uname = $("#uname").val();
    var genm = $("#genm").prop("checked");
    var genf = $("#genf").prop("checked");

    // Validation rules (using <li> list elements for the popup window)
    if (sid == "") {
        errMsg += "<li>User ID cannot be empty.</li>";
    }
    if (pwd1 == "") {
        errMsg += "<li>Password cannot be empty.</li>";
    }
    if (pwd2 == "") {
        errMsg += "<li>Retype password cannot be empty.</li>";
    }
    if (uname == "") {
        errMsg += "<li>User name cannot be empty.</li>";
    }
    if ((!genm) && (!genf)) {
        errMsg += "<li>A gender must be selected.</li>";
    }
    if (sid.indexOf('@') == 0) {
        errMsg += "<li>User ID cannot start with an @ symbol.</li>";
    }
    if (sid.indexOf('@') < 0) {
        errMsg += "<li>User ID must contain an @ symbol.</li>";
    }
    if (pwd1 != pwd2) {
        errMsg += "<li>Passwords do not match.</li>";
    }
    if (!uname.match(pattern)) {
        errMsg += "<li>User name contains symbols.</li>";
    }

    // Display error message popup window if any errors are detected
    if (errMsg != "") {
        errMsg = "<div id='scrnoverlay'></div>" +
                 "<section id='errWin' class='window'><ul>" +
                 errMsg +
                 "</ul><a href='#' id='errBtn' class='button'>Close</a></section>";

        var numOfItems = (errMsg.match(/<\/li>/g)).length + 6;

        $("body").after(errMsg);
        $("#scrnoverlay").css('visibility', 'visible');
        $("#errWin").css('height', numOfItems.toString() + 'em');
        $("#errWin").css('margin-top', (numOfItems / -2).toString() + 'em');
        $("#errWin").show();
        
        $("#errBtn").click(function () {
            $("#scrnoverlay").remove();
            $("#errWin").remove();
        });

        result = false;
    }

    return result;
}

/* write the function toggle() that collapses/expands a section */ function toggle() {
    $(this).parent().next().slideToggle();
}

/* link HTML elements to corresponding event functions */ function init() {
    $(".collapse").click(toggle);
    $("#regform").submit(validate);
}

/* execute function init() once the window is loaded */ $(document).ready(init);

