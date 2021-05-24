var cookie = {
    count: 0,
    logMessage: "Default Message",
    cookieName: "",
    upgradeCosts: [5,10,15,20]
};



//when the page loads
document.getElementById("ClickCount").innerHTML = 
"Cookies clicks: " + cookie.count;
document.getElementById("statClickCount").innerHTML = 
"Cookies clicks: " + cookie.count;

var seconds =0;
var gamecount = document.getElementById("secondsCount");
//Count and display the game seconds
function increaseSeconds() {
    seconds +=1;
    gamecount.innerHTML = "Game duration (seconds): " + seconds;   
}

setInterval(increaseSeconds,1000); //Runs the function every 1000 milisenconds

// Count number of clicks
function increaseCount() {
    cookie.count +=1;
    document.getElementById("ClickCount").innerHTML = 
    "Cookies clicks: " + cookie.count;
    document.getElementById("statClickCount").innerHTML = 
    "Cookies clicks: " + cookie.count;
}

// Add log message when purchasing upgrades
function addLogText() {
    var li = document.createElement("li");
    var t = document.createTextNode(cookie.logMessage);

    li.appendChild(t);
    document.getElementById("LogUL").appendChild(li);
    document.getElementById("LogText").value = ""
    var span = document.createElement("SPAN");
    li.appendChild(span);
}

// Upgrades
function purchaseCursor() {

    if(cookie.count >= cookie.upgradeCosts[0]) {


        cookie.cookieName = "Cursor";
        cookie.logMessage = "New Upgrade: " + cookie.cookieName;
        addLogText();
    } else {
        alert("You must have " + cookie.upgradeCosts[0] + " clicks!");
    }
    
}

function purchaseGrandma() {
    if(cookie.count >= cookie.upgradeCosts[1]) {


        cookie.cookieName = "Grandma";
        cookie.logMessage = "New Upgrade: " + cookie.cookieName;
        addLogText();
    } else {
        alert("You must have " + cookie.upgradeCosts[1] + " clicks!");
    }

}
function purchaseFarm() {
    if(cookie.count >= cookie.upgradeCosts[2]) {


        cookie.cookieName = "Farm";
        cookie.logMessage = "New Upgrade: " + cookie.cookieName;
        addLogText();
    } else {
        alert("You must have " + cookie.upgradeCosts[2] + " clicks!");
    }
}
function purchaseMine() {
    if(cookie.count >= cookie.upgradeCosts[3]) {


        cookie.cookieName = "Mine";
        cookie.logMessage = "New Upgrade: " + cookie.cookieName;
        addLogText();
    } else {
        alert("You must have " + cookie.upgradeCosts[3] + " clicks!");
    }
}