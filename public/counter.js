/*
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("clicks").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "https://civar6j4p0.execute-api.us-east-1.amazonaws.com/serverless_lambda_stage");
xhttp.send();

xhttp.onload = function() {
    console.log(xhttp.response);
};


fetch('https://civar6j4p0.execute-api.us-east-1.amazonaws.com/serverless_lambda_stage'
    , {
        method: "GET",
        
})
    .then(response => console.log(response))
    .then(data => {
        console.log(data)
        number = data.visitor
        document.getElementById("clicks").innerHTML = (number)
    });
*/
/*
let xhr = new XMLHttpRequest();
xhr.open('get', 'https://civar6j4p0.execute-api.us-east-1.amazonaws.com/serverless_lambda_stage');
xhr.send();

xhr.onload = function() {
    console.log(xhr.response);
};
*/