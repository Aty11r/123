var myImage = document.querySelector('img');

    myImage.onclick = function () {
    if(mySrc === 'image/1.jpg'){
    myImage.setAttribute ('src', 'image/194d899e-ad18-42c7-b2c0-27735fe747f6_1.jpg');
    } else {
    myImage.setAttribute ('src', 'image/1.jpg')
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Введите свое имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Добро пожалвать ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
  var storedName = locaStorage.getItem('name');
  myHeading.textContent = 'Привет' + storedName;
}
myButton.onclick = function() {
    setUserName
}