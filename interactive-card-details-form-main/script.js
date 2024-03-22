function ValidateCardDetails(){
    const cardName = document.getElementById('cardName').value;
    var nameError = document.getElementById('nameError');
    const cardNumber = document.getElementById('cardNumber').value;
    var numberError = document.getElementById('numberError');
    const monthExpire = document.getElementById('month').value;
    var monthError = document.getElementById('monthError');
    const yearExpire = document.getElementById('year').value;
    var yearError = document.getElementById('yearError');

    //reset error messages
    nameError.textContent = '';
    numberError.textContent = '';
    monthError.textContent = '';
    yearError.textContent = '';

    //Form validation
    
    //Name Validation
     if (cardName === ""){
        nameError.textContent = "Name is Required";
        isValid = false;
        console.log(nameError);
     }
    
}
