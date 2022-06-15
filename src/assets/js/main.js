/*===== FORM LAYOUT =====*/
const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.home__button');

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}
const handleFocusOut = ({ target }) => {
    if (target.value == '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active');
    }
}

const handleChange = () => {
    const [name, email] = inputs;

    if (name.value.length >= 3 && email.value.length >= 13) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }
}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));


/*===== SHEET API PARSER =====*/
const handleSubmit = (event) => {
    event.preventDefault();
    addLoading();

    const name = document.querySelector('input[name=name]').value;
    const email = document.querySelector('input[name=email]').value;


    fetch('https://api.sheetmonkey.io/form/hhjzyEc7kGtEEBNTivH2XM', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    }).then(() => removeLoading());
}

document.querySelector('form').addEventListener('submit', handleSubmit);

/*===== LOADING =====*/
const addLoading = () => {
    button.innerHTML = "<i class='bx bx-loader-alt bx-spin bx-rotate-90' ></i>";
}
const removeLoading = () => {
    button.innerHTML = "<i class='bx bxs-send'></i>";
}
