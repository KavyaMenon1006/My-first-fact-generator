const facts = [
    "I am a gamer who enjoys exploring new virtual worlds and challenges.",
    "Traveling is my passion, and I love discovering new cultures and places.",
    "Art is my creative outlet, and I find inspiration in the diverse experiences I encounter."
];

function showFact() {
    const factElement = document.getElementById('fact');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
}
