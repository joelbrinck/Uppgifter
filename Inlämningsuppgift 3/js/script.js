
var password = document.getElementById("inputPassword")
, confirm_password = document.getElementById("inputPassword2");

function validatePassword(){
if(password.value != confirm_password.value) {
confirm_password.setCustomValidity("Lösenorden stämmer ej överens");
} else {
confirm_password.setCustomValidity('');
}
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
