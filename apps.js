var cookie = {
    count: 0,
    logMessage: "Default Message",
    cookieName: "",
    upgradeCosts: [5,10,15,20],
    upgradePurchased: [],
    numberOfUpgrades: 4
};



// When the page loads
document.getElementById("ClickCount").innerHTML = 
"Cookies clicks: " + cookie.count;
document.getElementById("statClickCount").innerHTML = 
"Cookies clicks: " + cookie.count;

var seconds = 0;
var gamecount = document.getElementById("secondsCount");
// Count and display the game seconds
function increaseSeconds() {
    seconds +=1;
    gamecount.innerHTML = "Game duration (seconds): " + seconds;   
}

// Runs the function every 1000 milisenconds
setInterval(increaseSeconds,1000); 

// Initalize the boolean array for upgrades purchased

for(var i = 0; i < cookie.numberOfUpgrades; i++) {
    cookie.upgradePurchased.push(false);
}

showUpgrades();
// DEBUG

function showUpgrades() {
// Show if we have purchased each of the upgrades
    document.getElementById("UpgradePurchases").innerHTML = 
    "Cursor: " + cookie.upgradePurchased[0] + "<br>" + 
    "Grandma: " + cookie.upgradePurchased[1] + "<br>" +
    "Farm: " + cookie.upgradePurchased[2] + "<br>" +
    "Mine: " + cookie.upgradePurchased[3] + "<br>"
}
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
    if (!cookie.upgradePurchased[0]) {
        if(cookie.count >= cookie.upgradeCosts[0]) {
            cookie.cookieName = "Cursor";
            cookie.logMessage = "New Upgrade: " + cookie.cookieName;
            addLogText();
            cookie.upgradePurchased[0] = true;
            showUpgrades();
        } else {
            alert("You must have " + cookie.upgradeCosts[0] + " clicks!");
        }
    } else {
        alert("You have already purchased this upgrade!")
    }
}

function purchaseGrandma() {
    if(cookie.count >= cookie.upgradeCosts[1]) {


        cookie.cookieName = "Grandma";
        cookie.logMessage = "New Upgrade: " + cookie.cookieName;
        addLogText();
        cookie.upgradePurchased[1](true);
        showUpgrades();
    } else {
        alert("You must have " + cookie.upgradeCosts[1] + " clicks!");
    }

}
function purchaseFarm() {
    if(cookie.count >= cookie.upgradeCosts[2]) {


        cookie.cookieName = "Farm";
        cookie.logMessage = "New Upgrade: " + cookie.cookieName;
        addLogText();
        cookie.upgradePurchased[2](true);
        showUpgrades();
    } else {
        alert("You must have " + cookie.upgradeCosts[2] + " clicks!");
    }
}
function purchaseMine() {
    if(cookie.count >= cookie.upgradeCosts[3]) {


        cookie.cookieName = "Mine";
        cookie.logMessage = "New Upgrade: " + cookie.cookieName;
        addLogText();
        cookie.upgradePurchased[3](true);
        showUpgrades();
    } else {
        alert("You must have " + cookie.upgradeCosts[3] + " clicks!");
    }
}