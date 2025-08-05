const restaurants = [
    {name: "Pizza Palace", image: "https://source.unsplash.com/400x300/?pizza", cuisine: "Italian"},
    {name: "Sushi World", image: "https://source.unsplash.com/400x300/?sushi", cuisine: "Japanese"},
    {name: "Burger Hub", image: "https://source.unsplash.com/400x300/?burger", cuisine: "American"},
    {name: "Curry House", image: "https://source.unsplash.com/400x300/?curry", cuisine: "Indian"},
    {name: "Pasta Point", image: "https://source.unsplash.com/400x300/?pasta", cuisine: "Italian"},
    {name: "Vegan Delight", image: "https://source.unsplash.com/400x300/?vegan", cuisine: "Healthy"}
];

function displayRestaurants(list) {
    const container = document.getElementById("restaurant-list");
    container.innerHTML = "";
    list.forEach(rest => {
        container.innerHTML += `
        <div class="card">
            <img src="${rest.image}" alt="${rest.name}">
            <div class="card-content">
                <h3>${rest.name}</h3>
                <p>${rest.cuisine}</p>
            </div>
        </div>`;
    });
}

document.getElementById("search").addEventListener("input", function() {
    const searchText = this.value.toLowerCase();
    const filtered = restaurants.filter(r => r.name.toLowerCase().includes(searchText) || r.cuisine.toLowerCase().includes(searchText));
    displayRestaurants(filtered);
});

displayRestaurants(restaurants);
