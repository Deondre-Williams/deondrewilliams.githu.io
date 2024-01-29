const myImage = document.querySelector("img"); //this code assign selectors to html tag img

myImage.onclick = () => { //this code is the image changer (=>)
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/androidvsios2.png"){
        myImage.setAttribute("src", "images/androidvsios4.png");
    }else{
        myImage.setAttribute("src", "images/androidvsios2.png");
    }
};

let myButton =document.querySelector("button"); //this code assign selectors to html tag button
let myHeading =document.querySelector("h1"); //this code assign selectors to html tag h1

/* */
function setUserName() { //function sets the users name to null
    const myName = prompt("Please enter your name.");// the prompt attribute send a pop-up for the user to enter a name and the constant variable assigns the name to the variable myName
    if(!myName) //the logical NOT (!) operator is used here if the user does not enter a name the function is started again
        setUserName();
    localStorage.setItem("name", myName);
    myHeading.textContent = `Tech battle, ${myName}`;
}
if(!localStorage.getItem("name")) { //if the name was already stored upon a previous visit then the getItem attribute retrieves it
    setUserName();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Tech battle. ${storedName}`; // the new username or the stored name is displayed with heading context
}

myButton.onclick =() => {
    setUserName(); // the onclick allows the user to change the username when the button is clicked
};