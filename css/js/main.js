// window.addEventListener('load', (event) => {
//     console.log('load');
// });

document.addEventListener('readystatechange', (event) => {
    // console.log('readystatechange', event);
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function submitForm(e){
    // console.log(e);
    e.preventDefault();
    e.stopPropagation();

    const inputs = e.target.getElementsByTagName('input');
    let is_form_valid = true;

    [...inputs].map(item  => {
        let type = item.getAttribute('type');
        let value = item.value;
        console.log(value);
        if(type === 'email') {

        }
    })

}

document.addEventListener('DOMContentLoaded', (event) => {
    var form = document.querySelector('#login_form')
    form.addEventListener('submit', submitForm, false);
});