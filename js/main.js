const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            document.querySelector('.meteors').innerHTML = generateMeteors(20);
        } else {
            entry.target.classList.remove('show');
            document.querySelector('.meteors').innerHTML = '';
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function generateMeteors(numMeteors) {
    let meteorsHTML = '';
    for (let i = 0; i < numMeteors; i++) {
        const delay = Math.random() * 2; // Random delay for each meteor
        meteorsHTML += `<div class="meteor" style="left: ${Math.random() * 100}%; animation-delay: ${delay}s;"></div>`;
    }
    return meteorsHTML;
}

