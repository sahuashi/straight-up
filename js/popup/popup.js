var timeIntervals, power;

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded',restoreState);
} else {
    restoreState;
}

var pow = document.getElementById("power");
if(pow){
    addEventListener('click', disableEnable);
}

var sub = document.getElementById("sub");
if(sub){
    addEventListener('submit', setAlarm);
}

function checkPower(){
    if(document.getElementById("power").checked == true)
        return true;
    else
        return false;
}

function disableEnable() {
    var box = document.getElementById("power");
    if(box.checked == true){
        document.getElementById("reminders").disabled=false;
    }
    else{
        document.getElementById("reminders").disabled=true;
    }
}

function setAlarm(e){
    e.preventDefault();
    let power = checkPower();
    if(power == true){
        chrome.browserAction.setBadgeText({text: 'ON'});
        chrome.browserAction.setBadgeBackgroundColor({color: '#fbbf9e'});
        let interval = parseInt(document.getElementById("reminders").value);
        chrome.alarms.create({delayInMinutes: interval, periodInMinutes: interval});
        saveState();
    }
    else{
        chrome.browserAction.setBadgeText({text: ''});
        chrome.alarms.clearAll();
        saveState();
    }
}

function restoreState(){
    chrome.storage.local.get("P",function(data){
        document.getElementById('power').checked = data.P;
    });
    chrome.storage.local.get("TI",function(res){
        document.getElementById('reminders').value = res.TI;
        disableEnable();
    });
}

function saveState(){
    power = document.getElementById('power').checked;
    chrome.storage.local.set({"P": power});
    timeIntervals = document.getElementById('reminders').value;
    chrome.storage.local.set({"TI": timeIntervals});
}
