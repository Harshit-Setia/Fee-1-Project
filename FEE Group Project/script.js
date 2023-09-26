// Sample recipes data (you can replace this with your own data)
const recipes = [
    {
        name: "Spaghetti Carbonara",
        ingredients: "Pasta, Eggs, Cheese, Bacon",
        instructions: "Cook pasta, fry bacon, mix eggs and cheese, combine all",
    },
    {
        name: "Chicken Stir-Fry",
        ingredients: "Chicken, Vegetables, Soy Sauce",
        instructions: "Stir-fry chicken and vegetables, add soy sauce",
    },

    {
        name: "Vegetable Lasagna",
        ingredients: "Lasagna noodles, Ricotta cheese, Mozzarella cheese, Spinach, Marinara sauce",
        instructions: "Layer noodles, ricotta cheese, spinach, marinara sauce, and mozzarella cheese. Bake until bubbly.",
    },
    {
        name: "Grilled Salmon",
        ingredients: "Salmon fillet, Olive oil, Lemon juice, Garlic, Dill",
        instructions: "Marinate salmon in olive oil, lemon juice, garlic, and dill. Grill until cooked through.",
    },
    {
        name: "Caesar Salad",
        ingredients: "Romaine lettuce, Croutons, Parmesan cheese, Caesar dressing",
        instructions: "Toss lettuce with croutons, Parmesan cheese, and Caesar dressing. Serve chilled.",
    },
    {
        name: "Chocolate Chip Cookies",
        ingredients: "Butter, Sugar, Brown sugar, Eggs, Vanilla extract, Flour, Baking soda, Chocolate chips",
        instructions: "Cream together butter, sugars, eggs, and vanilla. Mix in flour and baking soda, then add chocolate chips. Bake until golden brown.",
    },
    {
        name: "Creamy Tomato Basil Soup",
        ingredients: "Tomatoes, Onion, Garlic, Heavy cream, Basil, Salt, Pepper",
        instructions: "Sauté onions and garlic, add tomatoes, basil, salt, and pepper. Simmer, then blend and stir in heavy cream.",
    },
    {
        name: "Hawaiian Pizza",
        ingredients: "Pizza dough, Pizza sauce, Mozzarella cheese, Ham, Pineapple, Red onion",
        instructions: "Roll out pizza dough, spread sauce, add cheese, ham, pineapple, and red onion. Bake until crust is golden.",
    },
    {
        name: "Baked Ziti",
        ingredients: "Ziti pasta, Ricotta cheese, Mozzarella cheese, Marinara sauce, Parmesan cheese",
        instructions: "Layer cooked ziti, ricotta cheese, marinara sauce, and mozzarella cheese. Bake until bubbly, then sprinkle with Parmesan.",
    },
    {
        name: "Beef Tacos",
        ingredients: "Ground beef, Taco seasoning, Taco shells, Lettuce, Tomato, Cheddar cheese, Sour cream, Salsa",
        instructions: "Brown ground beef, add taco seasoning. Fill taco shells with beef, lettuce, tomato, cheese, sour cream, and salsa.",
    },
    {
        name: "Chocolate Brownies",
        ingredients: "Butter, Sugar, Eggs, Cocoa powder, Flour, Vanilla extract, Salt",
        instructions: "Melt butter, stir in sugar, cocoa powder, eggs, flour, vanilla extract, and salt. Bake until a toothpick comes out clean.",
    },

];

// Function to search for recipes
function searchRecipes() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const recipeResults = document.getElementById("recipe-results");

    // Clear previous search results
    recipeResults.innerHTML = "";

    // Filter and display matching recipes
    recipes.forEach((recipe) => {
        if (recipe.name.toLowerCase().includes(searchTerm)) {
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");
            recipeCard.innerHTML = `
                <h2>${recipe.name}</h2>
                <p class="ingredients">Ingredients: ${recipe.ingredients}</p>
                <p class="instructions">Instructions: ${recipe.instructions}</p>
            `;
            recipeResults.appendChild(recipeCard);
        }
    });
}
