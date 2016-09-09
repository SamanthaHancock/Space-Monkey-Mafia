$(document).ready(function(){
  $('#inputDetails').click(function(){
    var inputUsername = $('#username').val();
    var inputpass = $('#password').val();
    if (inputUsername != "" && inputpass != "") {
      //give username and pass to DB for comparison
      window.location.href = "HomePage.html";
    } else {

    }

  });
});
