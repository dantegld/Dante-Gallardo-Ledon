let messages = document.querySelector('.messages');
let messageHeight = messages.scrollHeight;

messages.innerHTML += messages.innerHTML;

let startScroll = setInterval(() => {
    messages.style.transform = `translateY(-50%)`;
    setTimeout(() => {
        messages.style.transition = 'none';
        messages.style.transform = 'none';
        setTimeout(() => {
            messages.style.transition = 'transform 20s linear';
        }, 50);
    }, 15000);
}, 15000);


var index = 0;
var slides = document.getElementsByClassName("slides");