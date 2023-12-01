// Define the RGB Value that is going to be Incrememnted
let rgbValue = 0;

// Put a hook in the Body Element To Eventually Darken
const body = document.getElementsByTagName('body')[0];

// Define the Brighten Function
const brighten = function() {
    // Increment the RGB Value
    rgbValue++;
    if (rgbValue < 256){
        body.style.backgroundColor = `rgb(${rgbValue},${rgbValue},${rgbValue})`;
        requestAnimationFrame(brighten);
    }
}
requestAnimationFrame(brighten);