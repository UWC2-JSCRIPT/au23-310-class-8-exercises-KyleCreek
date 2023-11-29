// Define the RGB Value that is going to be Incrememnted
let rgbValue = 255;

// Put a hook in the Body Element To Eventually Darken
const body = document.getElementsByTagName('body')[0];


let helloDarkness = setInterval(function(){
    // If the Value is > 0 Change the Background Color.
    if (rgbValue > 0){
        body.style.backgroundColor = `rgb(${rgbValue},${rgbValue},${rgbValue})`;
        rgbValue--;
    }else {
        clearInterval(helloDarkness);
    }
}, 50);