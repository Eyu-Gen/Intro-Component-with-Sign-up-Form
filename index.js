let button = document.getElementById("submitBtn");
let input = document.getElementsByClassName("inputValue");
let errorImg = document.getElementsByClassName("errorImgSection");
let error = document.getElementsByClassName("error");
let reEnter = document.getElementById("reEnter");

button.addEventListener("click", function(e) {
    e.preventDefault();

    let allInputsFilled = true;
    let validEmail = true;
    let inputValue = [];
    
    //Checks whether the inputs are empty or not
    for(let i = 0; i < input.length; i++) {
        inputValue[i] = input[i].value;
        
        if(inputValue[i].length === 0) {
            allInputsFilled = false;
            errorImg[i].style.display = "block";
            error[i].style.display = "block";
        }
    }

    //Checks whether the email ends with "@gmail.com" or not
    if(inputValue[2].length !== 0) {
        let emailChecker = inputValue[2].slice(-10);
        if(emailChecker !== '@gmail.com') {
            validEmail = false;
            errorImg[2].style.display = "block";
            reEnter.style.display = "block";
        }
    }

    // Show alert if all conditions are met
    if(allInputsFilled && validEmail) {
        alert("Done!!");
    }
});

//Removes the error signs while re-entering
for(let j = 0; j < input.length; j++) {
    input[j].addEventListener("click", function() {
        errorImg[j].style.display = "none";
        error[j].style.display = "none";
        if(j == 2) {
            reEnter.style.display = "none";
        }
    });
}
