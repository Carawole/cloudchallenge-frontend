const pageBox = document.querySelector('.page-box');
const btnNext = document.querySelector('.btn-next');
const btnBack= document.querySelector('.btn-back');
const checkboxPass = document.querySelector('.checkbox-pass');
const passwordInput = document.querySelector('.password');
const loginTitle = document.querySelector('.loginTitle-text');
const userId = document.querySelector('.user-id');
const userInput = document.querySelector('.username');

btnNext.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.add('active-pass');
    setTimeout(() => passwordInput.focus(), 500);
    loginTitle.innerHTML = 'Welcome';
    userId.innerHTML = userInput.value;
};

btnBack.onclick = (e) => {
    e.preventDefault();
    pageBox.classList.remove('active-pass');
    loginTitle.innerHTML = 'Login';
    userId.innerHTML = 'Please login to use the platform';
    userInput.focus();
    
};

checkboxPass.onclick = () => {
    if(checkboxPass.checked) {
        passwordInput.type = 'text';
    }
    else {
        passwordInput.type = 'password';
    }
}
