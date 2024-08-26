// Mock data for demonstration
const data = [
    {
        image: "https://www.w3schools.com/w3images/mountains.jpg",
        title: "Saint Antonien",
        description: "Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months."
    },
    {
        image: "https://www.w3schools.com/w3images/lights.jpg",
        title: "Another Place",
        description: "Description for another place."
    }
];

const demo = document.getElementById('demo');
const detailsEven = document.getElementById('details-even');
const detailsOdd = document.getElementById('details-odd');
const slideNumbers = document.getElementById('slide-numbers');
const progressSubForeground = document.querySelector('.progress-sub-foreground');
const paginationLeft = document.querySelector('.arrow-left');
const paginationRight = document.querySelector('.arrow-right');

let currentIndex = 0;

function updateContent() {
    const { title, description } = data[currentIndex];
    detailsEven.querySelector('.text').textContent = title;
    detailsEven.querySelector('.desc').textContent = description;
    detailsOdd.querySelector('.text').textContent = title;
    detailsOdd.querySelector('.desc').textContent = description;
    slideNumbers.textContent = `${currentIndex + 1} / ${data.length}`;
    progressSubForeground.style.width = `${((currentIndex + 1) / data.length) * 100}%`;
}

function showSlide(index) {
    currentIndex = (index + data.length) % data.length;
    updateContent();
}

paginationLeft.addEventListener('click', () => showSlide(currentIndex - 1));
paginationRight.addEventListener('click', () => showSlide(currentIndex + 1));

updateContent();
