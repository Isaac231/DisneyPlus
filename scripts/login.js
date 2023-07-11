
function login(){
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    if (user == "user" && password == "user")
    {
       // location.replace("index.html");
       location.href="index.html";
    }
}
var input = document.getElementById("password");
input.addEventListener("keypress", function(login){
    if(login.key ==="Enter"){
        var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    if (user == "user" && password == "user")
    {
       // location.replace("index.html");
       location.href="index.html";
    }
    }
});
