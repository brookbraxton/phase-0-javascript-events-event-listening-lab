function addingEventListener() {
    const input = document.getElementById('button');

    // Check if the element is found
    if (input) {
        input.addEventListener('click', clickAlert);
    }
}

function clickAlert() {
    alert('I was clicked!');
}

// Call the addingEventListener function to activate the listener
addingEventListener();
