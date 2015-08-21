var inputName;
var inputValue;
var location;

function formValues() {
    var inputs = document.getElementsByTagName('input');
    for (var i=0; i < inputs.length; i++) {
        if (inputs[i].getAttribute('type') == 'text')
        {
            inputName = inputs[i].getAttribute('name');
            inputValue = inputs[i].value;
            localStorage.setItem(inputName, inputValue);            
        } else if (inputs[i].getAttribute('name') == 'payment-options') {
            if (inputs[i].checked) {
                inputValue = inputs[i].value;
                localStorage.setItem("paymentmethod", inputValue);
            }
        }
    }
}

function retrieveData() {
    document.getElementById("greeting").innerHTML = "Hi, " + localStorage.firstname + " " + localStorage.lastname + ", you chose to pay " + localStorage.paymentmethod + ". Your postcode is " + localStorage.postcode + ".";
}

function nameCheck() {
    if (localStorage.getItem("firstname") !== null) {
        document.getElementById("greeting").innerHTML = "Welcome back " + localStorage.firstname + ", looking for cheaper van insurance?";
    }    
}