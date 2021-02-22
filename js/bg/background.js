var phrases = [
    "Fix your back, buddy.",
    "Remember to straighten that spine!",
    "Sit up straight, please.",
    "No hunching!",
    "Don't forget to fix your posture!",
    "Reminder to sit up straight :)"
];


chrome.alarms.onAlarm.addListener((alarm) => {
    var phrase = phrases[Math.floor(Math.random() * phrases.length)];
    alert(phrase);
});
