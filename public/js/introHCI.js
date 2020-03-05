'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
})

// Function that is called when the document is ready.
function initializePage() {
    $.get('/lab/today', onServerResponse);
}




// Function that is called when the server responds to the AJAX call
function onServerResponse(data) {
    var labElementId = getLabElementId(data.id);
    console.log(data.id);
    console.log(labElementId);
    var labElement = $(labElementId);
    console.log(labElement);
    labElement.css({ 'background': 'yellow' });
}

function getLabElementId(id) {
    var labElementId = '#lab_' + id;
    return labElementId;

}



// Function to format the CSS selector