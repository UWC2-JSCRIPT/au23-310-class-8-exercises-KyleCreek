// Hook into the Document Dom
const notice = document.getElementById("maintenance-notice");

// Set the Timeout
setTimeout(function(){
    // Remove the notice from the DOM to make it disappear
    notice.remove();
}, 
5000);