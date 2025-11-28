const cardsData = [
    {
        name: "Mountain",
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        text: "Beautiful mountain landscape."
    },
    {
        name: "Forest",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        text: "A deep green peaceful forest."
    },
    {
        name: "Beach",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        text: "Golden sand and relaxing waves."
    },
    {
        name: "City",
        img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
        text: "A modern city skyline."
    },
    {
        name: "Desert",
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        text: "Endless dry desert dunes."
    },
    {
        name: "Snow",
        img: "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNub3d8ZW58MHx8MHx8fDA%3D",
        text: "White snowy mountains."
    }
];

const container = document.querySelector(".cards-container");

// Insert cards into HTML
cardsData.forEach(item => {
    container.innerHTML += `
        <div class="card" data-name="${item.name.toLowerCase()}">
            <img class="bg-img" src="${item.img}" />

            <div class="blurred-layer" style="background-image: url('${item.img}')"></div>

            <div class="content">
                <h3>${item.name}</h3>
                <p>${item.text}</p>
            </div>
        </div>
    `;
});

// SEARCH FUNCTION
const input = document.getElementById("searchBox");

input.addEventListener("input", () => {
    const value = input.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {
        const name = card.dataset.name;

        if (name.includes(value)) {
            card.style.display = "block"; 
        } else {
            card.style.display = "none";
        }
    });
});
