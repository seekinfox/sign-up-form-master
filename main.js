function verify() {
    "use strict";
    //    for name 
    var nameRegex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/,
        nameValue = document.getElementById("name").value,
        validName = nameRegex.test(nameValue),
        //        last name
        lastNameRegex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/,
        lastNameValue = document.getElementById("last-name").value,
        validLastName = lastNameRegex.test(lastNameValue),
        //    email
        emailRegex = /\S+@\S+\.\S+/,
        emailValue = document.getElementById("email").value,
        validEmail = emailRegex.test(emailValue),
        //        password
        passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$+=!*()@%&]).{8,10}$/g,
        passwordValue = document.getElementById("password").value,
        validPassword = passwordRegex.test(passwordRegex),
        text,
        textOne,
        textTwo,
        textThree,
        opacity,
        name = document.getElementById("name"),
        lastName = document.getElementById("last-name"),
        email = document.getElementById("email"),
        password = document.getElementById("password");

    if (!validName) {
        name.classList.add('placeholder-one');
        document.getElementById("name").style.outline = "1px solid red";
        text = "First name cannot be empty";
        document.getElementById("dot-one").style.opacity = 1;
        
    } else {
        document.getElementById("demo").style.display = "none";
        document.getElementById("dot-one").style.opacity = 0;
        document.getElementById("name").style.outline = " 1px solid var(--Grayish-Blue)";
    }

    if (!validLastName) {
        lastName.classList.add("placeholder-one");
        textOne = "Last name cannot be empty";
        document.getElementById("dot-two").style.opacity = 1;
        document.getElementById("last-name").style.outline = " 1px solid red";
    } else {
        document.getElementById("demo-one").style.display = "none";
        document.getElementById("dot-two").style.opacity = 0;
        document.getElementById("last-name").style.outline = " 1px solid var(--Grayish-Blue)";
    }

    if (!validEmail) {
        email.classList.add("placeholder-one");
        textTwo = "Looks like this is not an email";
        document.getElementById("dot-three").style.opacity = 1;
        document.getElementById("email").style.outline = " 1px solid red";
    } else {
        document.getElementById("demo-two").style.display = "none";
        document.getElementById("dot-three").style.opacity = 0;
        document.getElementById("email").style.outline = " 1px solid var(--Grayish-Blue)";
    }

    if (!validPassword) {
        password.classList.add("placeholder-one");
        textThree = "Password name cannot be empty";
        document.getElementById("dot-four").style.opacity = 1;
        document.getElementById("password").style.outline = " 1px solid red";
    } else {
        document.getElementById("demo-three").style.display = "none";
        document.getElementById("dot-four").style.opacity = 0;
        document.getElementById("password").style.outline = " 1px solid var(--Grayish-Blue)";
    }

    document.getElementById("demo").innerHTML = text;
    document.getElementById("demo-one").innerHTML = textOne;
    document.getElementById("demo-two").innerHTML = textTwo;
    document.getElementById("demo-three").innerHTML = textThree;

}
