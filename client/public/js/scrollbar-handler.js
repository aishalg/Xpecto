const scrollbar = document.getElementById('scrollbar');
const container = document.getElementById('scrollbar-container');

const height = document.body.scrollHeight - window.innerHeight;

scrollbar.height = window.innerHeight / height * container.clientHeight;
scrollbar.style.aspectRatio = 4 / scrollbar.height;

scrollbar.style.marginTop = `${window.scrollY/height*(container.clientHeight-scrollbar.clientHeight)}px`

window.onresize = () => {
    scrollbar.height = window.innerHeight / height * container.clientHeight;
}

window.onscroll = () => {
    scrollbar.style.marginTop = `${window.scrollY/height*(container.clientHeight-scrollbar.clientHeight)}px`
}