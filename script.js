
const userEmail = document.querySelector('input')
const subButton = document.querySelector('.btn')
const ThankyouMsg = document.querySelector('.thankyou-Msg')


function validateForm() {
    //check if the email is in a valid format
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(userEmail.value)) {
        alert('Please enter a valid email address');
    } else {
        userEmail.style.display = 'none';
        subButton.style.display = 'none'
        ThankyouMsg.textContent = 'Thanks for signing up';

    }
    
}
 subButton.addEventListener('click', validateForm);