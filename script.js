const card = document.getElementById("card");
const back = document.getElementById("back");
const front = document.getElementById("front");
const create = document.getElementById('create');
const login = document.getElementById('login');
back.addEventListener('click', flipCard);
front.addEventListener('click', flipCard);
create.addEventListener('click', flipCard);
login.addEventListener('click', flipCard);

function flipCard() {
    card.classList.toggle('flipcard');
    UremoveError();
    PremoveError();
    FremoveError();
    LremoveError();
    PassremoveError();
    diffPasswordremover()
}
//Validation functions for front card
const username = document.getElementById('username');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    checkError(); //function to check error in front of card.
    username.value="";
    password.value="";
});

function checkError() {
    const usernameValue = username.value.trim();  //trim is used to remove all the white spaces from start and end.
    if (usernameValue == '') {
        UshowError();     // function to show error in username field.
    }
    const passwordValue = password.value.trim();
    if (passwordValue == '') {
        PshowError();  //function to show error in password field.
    }
}

function UshowError() {
    document.getElementById('Uinput').style.borderColor = "red";  //Uinput is id for username field.
    username.placeholder="User name cannot be empty";
}
function PshowError() {
    document.getElementById('Pinput').style.borderColor = "red";  //Pinput is id for password field.
    password.placeholder="Password cannot be empty";
}

// function to remove error from username field once clicked on it.
function UremoveError() {
    document.getElementById('Uinput').style.borderColor = "rgba(255, 255, 255, 0.705)";
    if(username.placeholder!="Username"){
        username.placeholder="Username";
    }
}

// function to remove error from username field once clicked on it.
function PremoveError() {
    document.getElementById('Pinput').style.borderColor = "rgba(255, 255, 255, 0.705)";
    if(password.placeholder!="Password"){
        password.placeholder="Password";
    }
}
//function to remove red boder from username once clicked on it.
function UinputBorder(){
    document.getElementById('Uinput').style.borderColor = "rgba(255, 255, 255, 0.705)";
    if(username.placeholder!="Username"){
        username.placeholder="Username";
    }
}

//function to remove red border from password once clicked on it.
function PinputBorder(){
    document.getElementById('Pinput').style.borderColor = "rgba(255, 255, 255, 0.705)";
    if(password.placeholder!="Password"){
        password.placeholder="Password";
    }
}

//Validation functions for back card.

const Fname = document.getElementById('firstname'); //firstname is id for firstname field.
const lname = document.getElementById('lastname');  //lastname is id for lastname field.
const crpassword = document.getElementById('Crpassword');  //crpassword is id for password input.
const cnpassword = document.getElementById('Cnpassword'); //cnpassword is id for confirm password input.
const email = document.getElementById('email');   // email is id for email-id.
const register = document.getElementById('sign-up');  // sign-up is id for sign up button.


register.addEventListener('click', (e) => {
    e.preventDefault();
    checkErrorback();    // function to check error on back card.
    Fname.value="";
    lname.value="";
    crpassword.value="";
    cnpassword.value="";
    email.value="";
});

function checkErrorback() {
    const FnameValue = Fname.value.trim();
    const lnameValue = lname.value.trim();
    const crpasswordValue = crpassword.value;
    const cnpasswordValue = cnpassword.value;
    if (FnameValue.length <= 1) {
        FshowError();                          //function to check if first name has more than 1 letter.
    }
    if (lnameValue=='') {
        LshowError();                          //finction to check if the last name is not empty.
    }
    if(crpasswordValue.length<8 || crpasswordValue.length>20){
        PasshowError();                        //function to check length of password.
    }
    if(crpasswordValue!=cnpasswordValue){
        diffPassword();                        //function to check if the password and confirm password is same or not.
    }
}

function FshowError() {
    document.getElementById('Fname').style.borderColor = "red";
    Fname.placeholder="First name should be more than 1 letter";
}

//function to remove error message form first name.
function FremoveError(){
    document.getElementById('Fname').style.borderColor = "rgba(255, 255, 255, 0.705)";
    if(Fname.placeholder!="First name"){
        Fname.placeholder="First name";
    }
}

function LshowError() {
    document.getElementById('lname').style.borderColor = "red";
    lname.placeholder="Last name is required."
}

//function to remove error message from last name.
function LremoveError(){
    document.getElementById('lname').style.borderColor = "rgba(255, 255, 255, 0.705)";
    if(lname.placeholder!="Last name"){
        lname.placeholder="Last name";
    }
}

function PasshowError(){
    document.getElementById('crpassword').style.borderColor="red";
     crpassword.placeholder="Password length should be between 8 to 20";
}

//function to remove error message from password field.
function PassremoveError(){
    document.getElementById('crpassword').style.borderColor = "rgba(255, 255, 255, 0.705)";
    if(crpassword.placeholder!="Password"){
        crpassword.placeholder="Password";
    }
}

function diffPassword(){
    document.getElementById('cnpassword').style.borderColor="red";
    cnpassword.placeholder="Pasword is not same";
}

//function to remove error from confirm password field.
function diffPasswordremover(){
    document.getElementById('cnpassword').style.borderColor="rgba(255, 255, 255, 0.705)";
   if( cnpassword.placeholder!="Confirm Password"){
    cnpassword.placeholder = "Confirm Password";
   }
}

//function to remove red border from first name once clicked on it.
function FnameBorder(){
document.getElementById('Fname').style.borderColor = "rgba(255, 255, 255, 0.705)"
if(Fname.placeholder!="First name"){
    Fname.placeholder="First name";
}
}

//function to remove red border from last name once clicked on it.
function LnameBorder(){
    document.getElementById('lname').style.borderColor = "rgba(255, 255, 255, 0.705)";
    if(lname.placeholder!="Last name"){
        lname.placeholder="Last name";
    }
}

//function to remove red border from password once clicked on it.
function PasswordBorder(){
    document.getElementById('crpassword').style.borderColor = "rgba(255, 255, 255, 0.705)";
    if(crpassword.placeholder!="Password"){
        crpassword.placeholder="Password";
    }
}

//function to remove red border from confirm password once clicked on it.
function CnPasswordBorder(){
    document.getElementById('cnpassword').style.borderColor="rgba(255, 255, 255, 0.705)";
    if( cnpassword.placeholder!="Confirm Password"){
        cnpassword.placeholder = "Confirm Password";
       }
}