let form = document.getElementById("formNameValuePair");
let selectNameValue = document.getElementById("myList");
let inputNameValuePair = document.getElementById("NameValuePair");
let buttonAdd = document.getElementById("buttonAdd");
form.addEventListener("submit",function (ev){
    ev.preventDefault();
    // if (inputNameValuePair.value )
    let optionNameValue = document.createElement("option");
    optionNameValue.innerText = inputNameValuePair.value;
    selectNameValue.append(optionNameValue);

})