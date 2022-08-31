let label = document.querySelectorAll('label');
let myemail = document.querySelector('#email')
let fname = document.querySelector('#fname')
let lname = document.querySelector('#lname')
let password = document.querySelector('#password')
let cpassword = document.querySelector('#cpassword')
let pnumber = document.querySelector('#pnumber')

Array.from(label).forEach((lbl) =>{
    lbl.addEventListener('click',()=>{
        lbl.classList.toggle('lbl');
    })
})



const email = new RegExp('(?=.[a-zA-Z0-9+!@#$%^&*()+-=_]+@gmail\.com$)');


function validateName1(){
    if (fname.value.length >=3) {
        document.querySelector('.fname').classList.add('valid');
        document.querySelector('.fname').classList.remove('invalid');
        fname.classList.remove('error');
    }else{
        fname.classList.add('error');
        document.querySelector('.fname').classList.remove('valid');
        document.querySelector('.fname').classList.add('invalid');
    }

}


function validateName2(){
    if (lname.value.length >= 3) {
        lname.classList.remove('error');
        document.querySelector('.lname').classList.add('valid');
        document.querySelector('.lname').classList.remove('invalid');
        
    }else{
        lname.classList.add('error');
        document.querySelector('.lname').classList.remove('valid');
        document.querySelector('.lname').classList.add('invalid');
       
    }

}



function validateEmail(data){
    if (email.test(data)) {
        document.querySelector('.email').classList.add('valid');
        document.querySelector('.email').classList.remove('invalid');
        myemail.classList.remove('error');
    }else{
        myemail.classList.add('error');
        document.querySelector('.email').classList.remove('valid');
        document.querySelector('.email').classList.add('invalid');
    }

}


function validatePhone(data){
    const phoneN = new RegExp('^09+[0-9]{8}$');
    if (phoneN.test(data)) {
        pnumber.classList.remove('error');
        document.querySelector('.phone').classList.add('valid');
        document.querySelector('.phone').classList.remove('invalid');
    }else{
        pnumber.classList.add('error');
        document.querySelector('.phone').classList.remove('valid');
        document.querySelector('.phone').classList.add('invalid');
    }

}

function validatePass(){
   
    if (password.value.length >= 8 ) {
            cpassword.classList.remove('error');
            password.classList.remove('error');
            document.querySelector('.password').classList.add('valid');
            document.querySelector('.password').classList.remove('invalid');
        if (password.value === cpassword.value) {
            cpassword.classList.remove('error');
            password.classList.remove('error');
            document.querySelector('.cpassword').classList.add('valid');
            document.querySelector('.cpassword').classList.remove('invalid');
        }else{
            cpassword.classList.add('error');
            password.classList.add('error');

            document.querySelector('.cpassword').classList.remove('valid');
            document.querySelector('.cpassword').classList.add('invalid');
        }
    }else{
        cpassword.classList.add('error');
        password.classList.add('error');
        document.querySelector('.password').classList.remove('valid');
        document.querySelector('.password').classList.add('invalid');
        document.querySelector('.cpassword').classList.remove('valid');
        document.querySelector('.cpassword').classList.add('invalid');
    }

}
