const phone = document.getElementById('phone');
const pass = document.querySelector('input[name="user_password"]')
const conPass = document.querySelector('input[name="confirm_password"]')

phone.addEventListener('keydown', e => {
    if(e.key =='Backspace' || e.key == 'Delete') return;
    if(e.target.value.length == 3 || e.target.value.length == 7){
        e.target.value = e.target.value + "-" ;
    }

})


pass.addEventListener('invalid', e => {
    console.log(e.target.validity.patternMismatch);
    if (e.target.validity.patternMismatch) {
        e.target.setCustomValidity('Password requires at least one : UpperCase, LowerCase and a Number');
    }

})

pass.addEventListener('change', function (event) {
    event.target.setCustomValidity('');
})

conPass.addEventListener('invalid', e => {
    console.log(e.target.validity.patternMismatch);
    if (e.target.validity.patternMismatch) {
        e.target.setCustomValidity('Password requires at least one : UpperCase, LowerCase and a Number');
    }

})

conPass.addEventListener('change', function (event) {
    event.target.setCustomValidity('');
})