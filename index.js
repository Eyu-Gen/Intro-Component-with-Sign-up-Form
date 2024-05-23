let button = document.getElementById("submitBtn");
let input = document.getElementsByClassName("inputValue");
let errorImg = document.getElementsByClassName("errorImgSection");
let error = document.getElementsByClassName("error");

button.addEventListener("click", function() {
    let inputValue = [];
    for(let i = 0; i < input.length; i++) {
        inputValue[i] = input[i].value;
        
        if(inputValue[i].length == '0') {
            errorImg[i].style.display = "block";
        }
    };

});