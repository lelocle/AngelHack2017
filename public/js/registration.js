$(document).ready(function() {
    $("#register").click(function() {
        var name = $("#name").val();
        var password = $("#password").val();
        var cpassword = $("#cpassword").val();
        if (name == '' || password == '' || cpassword == '') {
            alert("Please fill all fields...!!!!!!");
        } else if ((password.length) < 3) {
            alert("Password should atleast 3 character in length...!!!!!!");
        } else if (!(password).match(cpassword)) {
            alert("Your passwords don't match. Try again?");
        } else {
            $.post("http://192.168.43.231:8888/api/signup", {
                name: name,
                password: password
            }, function(data) {
                if (data == 'You have Successfully Registered.....') {
                    $("form")[0].reset();
                    window.location.href = "index.html";
                }
                console.log(data);
            });
            $.ajax({
          url: "http://192.168.43.231:8888/api/authenticate",
          type: 'POST',
          // Fetch the stored token from localStorage and set in the header
          headers: {"Authorization": localStorage.getItem('token')}
        });
        }

    });
});
