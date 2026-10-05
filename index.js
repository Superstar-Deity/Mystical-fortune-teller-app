const fortunes = [
    "You go be very useless person for this life!",
    "Your patience will soon be rewarded",
    "God go really punish you for me",
    "Thunder go pieces you today",
    "You no go ever make am",
    "A thunder of blessings will destroy you",
    "Your hard work will soon pay off",
    "You no go ever find love for this life!",
    "Trailer load of favour will crush and destroy you to pieces",
    "A great financial wind blows your way",
    "Your health will improve significantly",
    "You will achieve your dreams if you stay focused",
    "Tinubu go kill you"
];

const pastReadings = [];

const form = document.getElementById("fortune-form");
const nameInput = document.getElementById("name");
const zodiacSelect = document.getElementById("zodiac");
const destinyZone = document.getElementById("destiny-zone");

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const sortButton = document.getElementById("sort-button");
const archiveResults = document.getElementById("archive-results");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    if (nameInput.value === "") {
        alert("Please enter your name");
    } else {
    // continue with the destiny calculation
        const name = nameInput.value;
        const luckScore = Math.floor(Math.random() * 100) + 1;
        const status = luckScore > 50 ? "Blessed" : "Cursed";
        const zodiac = zodiacSelect.value;

        const tarotCards = [];
        
        while (tarotCards.length < 3) {
            const randomIndex = Math.floor(Math.random() * fortunes.length);
            const fortune = fortunes[randomIndex];

            if (!tarotCards.includes(fortune)) {
                tarotCards.push(fortune);
            }
        }

        destinyZone.innerHTML = `
        <h2>${name}, the cosmos has spoken.</h2>
        <p>Zodiac: ${zodiac}</p>
        <p>Cosmic Luck: ${luckScore}</p>
        <p>Status: ${status}</p>`;

         tarotCards.forEach((fortune, index) => {
            destinyZone.innerHTML += `
                <div class="tarot-card">
                    <h3>Card ${index + 1}</h3>
                    <p>${fortune}</p>
                </div>
            `;
        });

        pastReadings.push({
            name: name,
            zodiac: zodiac,
            luckscore: luckScore,
            status: status,
            tarotCards: tarotCards
        })
    }  
});

searchButton.addEventListener("click", function() {
    const keyword = searchInput.value.toLowerCase();
    const result = fortunes.find(function(fortune) {
    return fortune.toLowerCase().includes(keyword);
    });

    if (result) {
    archiveResults.innerHTML = `<p>${result}</p>`;
    } else {
        archiveResults.innerHTML = `<p>No fortune found.</p>`;
    }
});

sortButton.addEventListener("click", function() {
    fortunes.sort();

    archiveResults.innerHTML = "";

    fortunes.forEach(function(fortune) {
        archiveResults.innerHTML += `<p>${fortune}</p>`;
    })
});