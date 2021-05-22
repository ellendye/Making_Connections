//Function to accept or deny requests. Adds to "Your Connections" & removes from "Connection Requests"
var friendCounter = 500;
var friendCount = document.querySelector("#friendCount");
var requestCounter = 2;
var requestCount = document.querySelector("#requestCount");
var person = [document.querySelector("#first"),document.querySelector("#second")];


function changeCount(element){
    if(element.classList == ("accept")){
        friendCounter++;
        friendCount.innerText = friendCounter;
        //adds the users number of friends by one everytime the accept button is clicked
    }
    //removes requestCounter by one request anytime a button is clicked (accept or deny)
    requestCounter--;
    requestCount.innerText = requestCounter;

    //removes a person depending on their element ID
    if (element.id == "firstPerson"){
        person[0].remove();
    }
    if (element.id == "secondPerson"){
        person[1].remove();
    }
}


//Add a function that can edit the User name anytime the button is clicked

var userName = document.querySelector("#profileName");
function changeName (){
    var inputUserName = prompt("Please enter your name:", "");
    userName.innerText = inputUserName;
}