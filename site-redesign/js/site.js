// my greet function
function thank(){
    let greetParagraph = document.getElementById("thank");

    // get values from the form
    email = document.getElementById("email").value;

    // show the result!
    greetParagraph.innerHTML = "Thank you for subscribing! Any emails will be sent to " + email
 }