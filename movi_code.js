const button = document.getElementById('movingButton');

function moveButton() {
    const windowWidth = window.innerWidth - button.clientWidth;
    const windowHeight = window.innerHeight - button.clientHeight;

    const randomX = Math.floor(Math.random() * windowWidth);
    const randomY = Math.floor(Math.random() * windowHeight);

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.transition=0.2;
    button.style.top = randomY + 'px';
}

function moveRandomly() {
    setInterval(moveButton, 900); 
}

moveRandomly();

const paragraphs = document.querySelectorAll('p');

function showParagraphs() {
    let delay = 1000; 

    paragraphs.forEach((paragraph, index) => {
        setTimeout(() => {
            paragraph.style.display = 'block';
        }, delay * (index + 1));
    });
}

showParagraphs();

function change_page(){
    window.location.href = "movie_code.html";
  } 
  const seeMoreBtn = document.querySelector('.secondary__btn');
const hackingMessages = document.getElementById('hackingMessages');

seeMoreBtn.addEventListener('click', () => {
  hackingMessages.classList.remove('hidden');
});