function validateForm() {
    var un = document.loginform.user.value;
    var pw = document.loginform.pwd.value;
    var username = "username"; 
    var password = "password";
    if ((un == username) && (pw == password)) {
        alert("Login successfully !");
        return true;
    }
    else {
        alert ("Login was unsuccessful, please check your username and password");
        return false;
    }
}