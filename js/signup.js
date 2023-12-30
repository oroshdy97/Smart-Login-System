let nameInput = document.querySelector('#nameInput');
let emailInput = document.querySelector('#emailInput');
let passwordInput = document.querySelector('#passwordInput');
let btn = document.querySelector('#btn');
let userList = [];
let alertMessage = document.querySelector('.alertMessage');

if (localStorage.getItem('data') != null) {
    userList = JSON.parse(localStorage.getItem('data'))
}

btn.addEventListener('click' , function (){
    if (nameInput.value == "" || emailInput.value == "" || passwordInput.value == "") {
        alertMessage.innerHTML = 'all inputs are required'
    } else {
        if(validateEmail() && validateName()){
            if(validateUser()){
                alertMessage.innerHTML = 'User Exist'
                
            }if(!validateUser()){
                alertMessage.innerHTML = 'Congratulations'
                saveData()
                clearForm()
                setTimeout(() => {
                    window.location = 'index.html'
                }, 2000);
            }
        }else{
            alertMessage.innerHTML = 'Invalid Name or Email'
        }

    }
})

function saveData () {
    let userData = {
        name: nameInput.value ,
        email: emailInput.value ,
        password: passwordInput.value ,
    };
    userList.push(userData);
    localStorage.setItem('data', JSON.stringify(userList))
}

function clearForm() {
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
}

function validateUser() {
    let result;

    for (let i = 0; i < userList.length; i++) {
        if(emailInput.value == userList[i].email){
            result = true
            break;
        }
        
    }
    return result
}

function validateName(){
    let nameRegex = /\w{3,}/
    return nameRegex.test(nameInput.value)
}
function validateEmail(){
    let emailRegex = /\w+@\w+.\w+/
    return emailRegex.test(emailInput.value)
}




