const generateBtn = document.getElementById('generate-btn');
const resultContainer = document.getElementById('result-container');
const themeBtn = document.getElementById('theme-btn');

const menus = [
    { name: 'Kimchi Stew', emoji: '🍲', category: 'Korean' },
    { name: 'Soybean Paste Stew', emoji: '🥘', category: 'Korean' },
    { name: 'Grilled Pork Belly', emoji: '🥓', category: 'Korean' },
    { name: 'Bibimbap', emoji: '🍚', category: 'Korean' },
    { name: 'Bulgogi', emoji: '🥩', category: 'Korean' },
    { name: 'Tteokbokki', emoji: '🌶️', category: 'Korean' },
    { name: 'Fried Chicken', emoji: '🍗', category: 'Korean' },
    { name: 'Japchae', emoji: '🍜', category: 'Korean' },
    { name: 'Spicy Pork Stir-fry', emoji: '🍖', category: 'Korean' },
    { name: 'Sushi', emoji: '🍣', category: 'Japanese' },
    { name: 'Ramen', emoji: '🍜', category: 'Japanese' },
    { name: 'Tonkatsu', emoji: '🥩', category: 'Japanese' },
    { name: 'Udon', emoji: '🍲', category: 'Japanese' },
    { name: 'Jajangmyeon', emoji: '🍝', category: 'Chinese' },
    { name: 'Jjamppong', emoji: '🥡', category: 'Chinese' },
    { name: 'Sweet & Sour Pork', emoji: '🍖', category: 'Chinese' },
    { name: 'Malatang', emoji: '🌶️', category: 'Chinese' },
    { name: 'Pizza', emoji: '🍕', category: 'Western' },
    { name: 'Pasta', emoji: '🍝', category: 'Western' },
    { name: 'Hamburger', emoji: '🍔', category: 'Western' },
    { name: 'Steak', emoji: '🥩', category: 'Western' },
    { name: 'Pho', emoji: '🍜', category: 'Asian' },
    { name: 'Pad Thai', emoji: '🥘', category: 'Asian' },
    { name: 'Curry', emoji: '🍛', category: 'Asian' },
];

generateBtn.addEventListener('click', () => {
    resultContainer.innerHTML = '';
    const pick = menus[Math.floor(Math.random() * menus.length)];

    const card = document.createElement('div');
    card.classList.add('menu-card');
    card.innerHTML = `
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
