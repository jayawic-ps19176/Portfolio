// JavaScript can be added here for interactivity
console.log("JavaScript loaded!");


    document.addEventListener('DOMContentLoaded', () => {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const workItems = document.querySelectorAll('.work-item');

       filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                workItems.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'block';
                   } else {
                        item.style.display = 'none';
                    }
                });
                filterBtns.forEach(btn => btn.classList.remove('text-yellow-500'));
             btn.classList.add('text-yellow-500');
          });
      });
 });

 


const workCategories = document.querySelectorAll(".work-category");
const workGrid = document.querySelector(".work-grid");
const loadMoreButton = document.querySelector(".load-more-button");

const workItems = [
            { category: "Branding", image: "images/game.png", description: "event posters" }, 
            { category: "Branding", image: "images/headphone.png", description: "promotional posters" },       
            { category: "Branding", image: "images/orange.png", description: "promotional posters" },         
            
            { category: "artworks", image: "images/edu.png", description: "book cover" }, 
            { category: "Branding", image: "images/mask.png", description: "informational posters" },
            { category: "Branding", image: "images/Burger.jpg", description: "promotional posters" },

            { category: "artworks", image: "images/Graphic Art-02.png", description: "Special mention - EuroLens findingeuropeinsrilanka Visual media competition | Graphic art 2024" },
            { category: "artworks", image: "images/Graphic Art-01.png",description: "1st Place - EuroLens findingeuropeinsrilanka Visual media competition | Graphic art 2024"},
            { category: "Branding", image: "images/flayer.png", description: "event posters" },
            
            { category: "Branding", image: "images/pizza.png", description: "promotional posters" }, 
            { category: "Branding", image: "images/dogfood-01.jpg", description: "promotional posters" },
            { category: "Branding", image: "images/chair.png", description: "promotional posters" },         

            { category: "Branding", image: "images/brio.jpg", description: "Brio Tote Bags" },
            { category: "Branding", image: "images/orange dog.png", description: "Orange dog Pet Brand: Pet Food, Toys & More" },
            { category: "Branding", image: "images/elegant.png", description: "Elegant corner clothing brand" },      
            
            //{ category: "Branding", image: "images/bag1.png", description: " " },
            // { category: "artworks", image: "images/hanuman.png", description: " " },
            //{ category: "Branding", image: "images/box1.jpg", description: " " }, 
           
            
            
            //{ category: "Branding", image: "images/hue.png", description: " " },
           
            { category: "Logo", image: "images/Lo1.png", description: " " },
            //{ category: "artworks", image: "images/thank you card-2.jpg", description: " " },
            //{ category: "artworks", image: "images/thank you card-3.jpg", description: " " },  
            //{ category: "artworks", image: "images/Birthday Card.jpg", description: " " },
            { category: "Logo", image: "images/Lo3.jpg", description: " " },
            { category: "Logo", image: "images/Lo4.jpg", description: " " },
            { category: "Logo", image: "images/Lo2.jpg", description: " " },  
            { category: "Logo", image: "images/Lo6.jpg", description: " " }, 
            { category: "Logo", image: "images/Lo5.jpg", description: " " },
            //{ category: "artworks", image: "images/Strawberry.jpg", description: " " },
            //{ category: "artworks", image: "images/lemon.jpg", description: " " },
            //{ category: "artworks", image: "images/elephant.jpg", description: " " },
            //{ category: "artworks", image: "images/duck-duck.gif", description: " " },
            //{ category: "artworks", image: "images/star.gif", description: " " }, 
            { category: "artworks", image: "images/Flamenco.jpg", description: " " },
            { category: "Branding", image: "images/Untitled4.png", description: " " },
            { category: "artworks", image: "images/pearl.png", description: " " },
            //{ category: "artworks", image: "images/book cover.jpg", description: " " },
            //{ category: "Branding", image: "images/t1.png", description: " " },
            //{ category: "Branding", image: "images/mask.png", description: " " },
            //{ category: "Branding", image: "images/s1.png", description: " " }, 
            //{ category: "artworks", image: "images/cat.gif", description: " " },
            //{ category: "artworks", image: "images/elephant.gif", description: " " },
            //{ category: "artworks", image: "images/rabbit.gif", description: " " },
            //{ category: "artworks", image: "images/teddy1.jpg", description: " " },
            //{ category: "Branding", image: "images/juice.png", description: " " },
            
];

let visibleItems = 12; // Number of items initially visible

function displayWorkItems(category, numToShow) {
    workGrid.innerHTML = ""; // Clear existing work items

    workItems.forEach(item => {
        if ((category === "all" || item.category === category) && numToShow > 0) {
            const workItem = document.createElement("div");
            workItem.classList.add("work-item");
            workItem.innerHTML = `
                <img src="${item.image}" alt="${item.description}">
                <div class="work-overlay">
                    <p class="work-description">${item.description}</p>
                </div>
            `;
            workGrid.appendChild(workItem);
            numToShow--;
        }
    });
}

function showMoreItems(category) {
    displayWorkItems(category, workItems.length);
    loadMoreButton.style.display = "none"; // Hide Load More button
}

function handleLoadMoreClick() {
    visibleItems = workItems.length; // Show all items
    showMoreItems("all"); // Display all items
}

workCategories.forEach(category => {
    category.addEventListener("click", () => {
        workCategories.forEach(c => c.classList.remove("active"));
        category.classList.add("active");
        displayWorkItems(category.dataset.category, visibleItems);

        // Show Load More button only for the "all" category
        if (category.dataset.category.toLowerCase() === "all") {
            loadMoreButton.style.display = "block";
        } else {
            loadMoreButton.style.display = "none"; // Hide Load More button for other categories
        }
    });
});

loadMoreButton.addEventListener("click", handleLoadMoreClick);

displayWorkItems("all", visibleItems);




