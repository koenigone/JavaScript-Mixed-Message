const body = document.querySelector('body')
const lightSwitch = document.querySelector('#lightSwitch');
const darkSwitch = document.querySelector('#darkSwitch');
const submit = document.querySelector('#submit');
const botReply = document.querySelector('#bot');


darkSwitch.addEventListener('click', ()=> {
    body.style.backgroundColor = 'rgb(8, 11, 61)';
    body.style.color = 'rgb(224, 224, 224)';
    lightSwitch.style.display = 'block';
    darkSwitch.style.display = 'none';
});

lightSwitch.addEventListener('click', ()=> {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    lightSwitch.style.display = 'none';
    darkSwitch.style.display = 'block'
});


submit.addEventListener('click', ()=> {
    const messages = ['Good morning!', 'How was your day?', 'Have you had your coffee yet?', 'seems like you are bored', 'So What now', 'Ok', 'lol', 'Get away', 'Nicee', 'GG', 'I dont know', 'keep going', 'any plans today?'];
    const randomizer = Math.floor(Math.random() * messages.length);
    const randomizedMessages = messages[randomizer];

    botReply.innerHTML = randomizedMessages;
});
