document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('number').addEventListener('blur', validateNumber);


function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;
    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateZip() {
    const zip = document.getElementById('zip');
    const re = /^[0-9]{5}(-[0-9]{4})?$/;
    if (!re.test(zip.value)) {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validateNumber() {
    const number = document.getElementById('number');
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
    if (!re.test(number.value)) {
        number.classList.add('is-invalid');
    } else {
        number.classList.remove('is-invalid');
    }
}