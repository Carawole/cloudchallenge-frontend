const pageBox = document.querySelector('.page-box');
const btnNext = document.querySelector('.btn-next');
const btnBack = document.querySelector('.btn-back');
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

// For projects page

function pageLoad() {
    dropDownCRC();
    dropDownCU();
    dropDownMB();
}

function dropDownCRC() {
    var x = document.getElementById("CRC");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function dropDownCU() {
    var x = document.getElementById("CU");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function dropDownMB() {
    var x = document.getElementById("MB");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// For projects page 
