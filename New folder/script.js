const calBtn = document.getElementById('calculate');

function calculateIncreaseIncome() {
    var numberOfPatients = document.getElementById('patientnum').value;
    var increasedIncome = document.getElementById('increasedincome').value;

    console.log(numberOfPatients);
    console.log(increasedIncome);

    // Perform your calculation here
}

// Add an event listener to the button
calBtn.addEventListener('click', calculateIncreaseIncome);

