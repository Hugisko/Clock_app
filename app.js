setInterval(updateTime, 1000);

const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

function updateTime() {
    const date = new Date();
    const sec = (date.getSeconds() / 60) * 360;
    const min = (date.getMinutes() / 60) * 360;
    const hour = (date.getHours() / 12) * 360;

    seconds.style.transform = `rotate(${sec}deg)`;
    minutes.style.transform = `rotate(${min}deg)`;
    hours.style.transform = `rotate(${hour}deg)`;
}

updateTime();