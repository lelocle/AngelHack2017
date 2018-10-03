$(document).ready(function () {
    var ulUser = $('#ulUser');


    $('#btn').click(function () {

        // Get the username & password from textboxes
        var username = $('#txtUsername').val();
        var password = $('#txtPassword').val();

        $.ajax({
            type: 'POST',
            // Make sure to change the port number to
            // where you have the employee service
            // running on your local machine
            url: 'http://192.168.43.231:8888/api/authenticate',
            dataType: 'json',
            // Specify the authentication header
            // btoa() method encodes a string to Base64
            data: {
                name: username,
                password: password
            },
            success: function (data) {
                ulUser.empty();
                localStorage.setItem("token", data.token);
                console.log(data);
                window.location.href = "home.html";
            }
        });
    });

    $('#btnClear').click(function () {
        ulUser.empty();
    });

});
