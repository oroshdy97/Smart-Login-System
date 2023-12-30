let btn = document.querySelector('.btn-submit');
document.querySelector('p').innerHTML = `Welcome ${JSON.parse(sessionStorage.getItem('name'))}`
btn.addEventListener ('click' , function() {
   window.location = 'index.html'
   sessionStorage.clear()
})
