const phone = document.getElementById('phone');
const pass = document.getElementById('user_password')
const conPass = document.getElementById('confirm_password')

phone.addEventListener('keydown', e => {
    if(e.key =='Backspace' || e.key == 'Delete') return;
    console.log(e.target.value.length);
    if(e.target.value.length == 3 || e.target.value.length == 7){
        e.target.value = e.target.value + "-" ;
    }

})

