var phrases = [
    "Fix your back!",
    "Remember to straighten that spine!",
    "Sit up straight, please.",
    "No hunching!",
    "Don't forget to fix your posture!",
    "Reminder to sit up straight :)",
    "Posture check!",
    "This would be a great time to stretch a little.",
    "Make your spine happy by sitting up straight.",
    "Friendly reminder to check your posture!",
    "Time to relax your shoulders.",
    "If you're reading this, sit up straight."
];


chrome.alarms.onAlarm.addListener((alarm) => {
    var phrase = phrases[Math.floor(Math.random() * phrases.length)];
    chrome.notifications.create('', {
        title: 'Straight Up: Posture Reminder',
        message: phrase,
        iconUrl: '../../media/spine128.png',
        requireInteraction: true,
        type: 'basic'
    });
});
