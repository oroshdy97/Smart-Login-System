let userList = JSON.parse(localStorage.getItem('data'))
let emailInput = document.getElementById ('email');
let passwordInput = document.getElementById ('password');
let btn = document.getElementById ('button');
let alertMessage = document.querySelector ('.alertMessage');

btn.addEventListener("click" , function() {
    userValidation()
})


function userValidation() {
    for (let i = 0; i < userList.length; i++) {
        if (emailInput.value == userList[i].email && passwordInput.value == userList[i].password){
            sessionStorage.setItem('name', JSON.stringify(userList[i].name))
            window.location = 'welcome.html'
        } else {
            alertMessage.innerHTML = 'User Not Found'
        }
    }
}


