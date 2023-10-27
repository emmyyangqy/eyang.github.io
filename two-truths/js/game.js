// this is for my truths and lie game

// global variable
let fname = "";

// my greet function
function greet(){
    let greetParagraph = document.getElementById("greet");

    // get values from the form
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    // show the result!
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname + "!"
 }


 // function for my trivia game
 function trivia(){

    // get handle to the result paragraph
    let triviaAnswer = document.getElementById("trivia-answer");

    // get results of selected trvia answer
    let miloticSelected = document.getElementById("milotic").checked
    let banzelSelected = document.getElementById("banzel").checked
    let xigrisSelected = document.getElementById("xigris").checked

    if (banzelSelected){
        triviaAnswer.innerHTML = fname + ", you are wrong. Banzel is used to treat seizures in patients who have Lennox-Gastaut syndrome (LGS)."
    } else if (xigrisSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Xigris is a recombinant form of human Activated Protein C. It is administered by intravenous infusion."
    } else {
        triviaAnswer.innerHTML = fname + ", you are correct! You should apply to med school."
    }
    

 }

  // function for my two truths and a lie game
  function truthsandalie(){

    // get handle to the result paragraph
    let triviaAnswer = document.getElementById("truthsandalie-answer");

    // get results of selected trvia answer
    let boneSelected = document.getElementById("bone").checked
    let beeSelected = document.getElementById("bee").checked
    let licenseSelected = document.getElementById("license").checked

    if (licenseSelected){
        triviaAnswer.innerHTML = fname + ", you are wrong. I'm waiting until I am 18 to get it so I don't have to take driver's ed."
    } else if (beeSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. I've stepped on a bee once on accident and got stung."
    } else {
        triviaAnswer.innerHTML = fname + ", you are correct! Thankfully so far I haven't broken one."
    }
    

 }