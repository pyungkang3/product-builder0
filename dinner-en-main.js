const generateBtn = document.getElementById('generate-btn');
const resultContainer = document.getElementById('result-container');
const themeBtn = document.getElementById('theme-btn');

const menus = [
    { name: 'Kimchi Stew', emoji: '🍲', category: 'Korean', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Korean_stew-Kimchi_jjigae-01.jpg/1280px-Korean_stew-Kimchi_jjigae-01.jpg' },
    { name: 'Soybean Paste Stew', emoji: '🥘', category: 'Korean', image: 'https://mykoreankitchen.com/wp-content/uploads/2020/02/200226_Doenjang-Jjigae_10-500x500.jpg' },
    { name: 'Grilled Pork Belly', emoji: '🥓', category: 'Korean', image: 'https://via.placeholder.com/150' }, // Placeholder
    { name: 'Bibimbap', emoji: '🍚', category: 'Korean', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Bibimbap_%288111593238%29.jpg/1280px-Bibimbap_%288111593238%29.jpg' },
    { name: 'Bulgogi', emoji: '🥩', category: 'Korean', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Korean.food-Bulgogi-01.jpg' },
    { name: 'Tteokbokki', emoji: '🌶️', category: 'Korean', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Tteokbokki.JPG/1280px-Tteokbokki.JPG' },
    { name: 'Fried Chicken', emoji: '🍗', category: 'Korean', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Fried-Chicken-Set.jpg' },
    { name: 'Japchae', emoji: '🍜', category: 'Korean', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Korean_cuisine_japchae.jpg' },
    { name: 'Spicy Pork Stir-fry', emoji: '🍖', category: 'Korean', image: 'https://via.placeholder.com/150' }, // Placeholder
    { name: 'Sushi', emoji: '🍣', category: 'Japanese', image: 'https://images.unsplash.com/photo-1579871127000-211411526272?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Ramen', emoji: '🍜', category: 'Japanese', image: 'https://png.pngitem.com/png/full/2-20090_ramen-png-ramen.png' },
    { name: 'Tonkatsu', emoji: '🥩', category: 'Japanese', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Original_Tonkatsu.jpg' },
    { name: 'Udon', emoji: '🍲', category: 'Japanese', image: 'https://via.placeholder.com/150' }, // Placeholder
    { name: 'Jajangmyeon', emoji: '🍝', category: 'Chinese', image: 'https://images.unsplash.com/photo-1622543925800-aa658667672d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80' },
    { name: 'Jjamppong', emoji: '🥡', category: 'Chinese', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Jjamppong_%28Korean_Chines_seafood_noodle_soup%29.jpg' },
    { name: 'Sweet & Sour Pork', emoji: '🍖', category: 'Chinese', image: 'https://www.photo-ac.com/assets/img/ai/28430023_2160x1442.jpeg' },
    { name: 'Malatang', emoji: '🌶️', category: 'Chinese', image: 'https://via.placeholder.com/150' }, // Placeholder
    { name: 'Pizza', emoji: '🍕', category: 'Western', image: 'http://www.public-domain-image.com/public-domain-images-pictures-free-stock-photos/food-and-drink-public-domain-images-pictures/pizza-public-domain-images-pictures/pizza.jpg' },
    { name: 'Pasta', emoji: '🍝', category: 'Western', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Pasta_%281%29.jpg' },
    { name: 'Hamburger', emoji: '🍔', category: 'Western', image: 'https://images.unsplash.com/photo-1571091718767-897e792f20d7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Steak', emoji: '🥩', category: 'Western', image: 'https://via.placeholder.com/150' }, // Placeholder
    { name: 'Pho', emoji: '🍜', category: 'Asian', image: 'https://via.placeholder.com/150' }, // Placeholder
    { name: 'Pad Thai', emoji: '🥘', category: 'Asian', image: 'https://via.placeholder.com/150' }, // Placeholder
    { name: 'Curry', emoji: '🍛', category: 'Asian', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Chickpea_Curry_%2857189%29.jpg' },
];

generateBtn.addEventListener('click', () => {
    resultContainer.innerHTML = '';
    const pick = menus[Math.floor(Math.random() * menus.length)];

    const card = document.createElement('div');
    card.classList.add('menu-card');
    card.innerHTML = `
        <img src="${pick.image}" alt="${pick.name}" class="menu-image">
        <div class="menu-emoji">${pick.emoji}</div>
        <div class="menu-name">${pick.name}</div>
        <div class="menu-category">${pick.category}</div>
    `;
    resultContainer.appendChild(card);
});

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        themeBtn.textContent = 'Light Mode';
    } else {
        themeBtn.textContent = 'Dark Mode';
    }
});