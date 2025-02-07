function openPopup(popupId) {
    let popup = document.getElementById(popupId);
    popup.style.display = 'block'; // Show the popup
}

function closePopup(popupId) {
    let popup = document.getElementById(popupId);
    popup.style.display = 'none'; // Hide the popup
}


function chooseCharacter(character) {
    console.log("You have selected the " + character + " character!");
    
    // You can highlight the selected image or show a confirmation message
    const allButtons = document.querySelectorAll('.character-btn');
    allButtons.forEach(button => {
        button.style.border = 'none'; // Remove any previous border
    });

    // Add a border or highlight the selected image
    const selectedButton = [...allButtons].find(button => button.querySelector('img').alt === character);
    selectedButton.style.border = '5px solid green'; // Highlight the selected character

    // Optionally, update the popup or page with the selected character
    // For example, you can display a message or start the game.
    alert("You chose the " + character + " character!");
}