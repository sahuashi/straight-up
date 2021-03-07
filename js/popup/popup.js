if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded',restoreState);
} else {
    restoreState;
}

var reminders = document.getElementById("reminders");
var power = document.getElementById("power");
var submit = document.getElementById("submit");

if(power){
    addEventListener('click', disableEnable);
}

if(submit){
    addEventListener('submit', setAlarm);
}

function disableEnable() {
    if(power.checked){
        reminders.disabled=false;
        if(!reminders.value){
            reminders.value = 10;
        }
    }
    else{
        reminders.disabled=true;
    }
}

function setAlarm(e){
    e.preventDefault();
    if(power.checked){
        chrome.alarms.clearAll();
        let interval = parseInt(reminders.value);
        chrome.alarms.create({periodInMinutes: interval});
        chrome.browserAction.setBadgeText({text: 'ON'});
        chrome.browserAction.setBadgeBackgroundColor({color: '#fbbf9e'});
        saveState();
    }
    else{
        chrome.alarms.clearAll();
        chrome.browserAction.setBadgeText({text: ''});
        saveState();
    }
}

function restoreState(){
    chrome.storage.local.get("P",function(res){
        power.checked = res.P;
    });
    chrome.storage.local.get("TI",function(res){
        reminders.value = res.TI;
        disableEnable();
    });
}

function saveState(){
    chrome.storage.local.set({"P": power.checked});
    chrome.storage.local.set({"TI": reminders.value});
}
