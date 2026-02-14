const generateBtn = document.getElementById('generate-btn');
const resultContainer = document.getElementById('result-container');
const themeBtn = document.getElementById('theme-btn');

const menus = [
    { name: '김치찌개', emoji: '🍲', category: '한식' },
    { name: '된장찌개', emoji: '🥘', category: '한식' },
    { name: '삼겹살', emoji: '🥓', category: '한식' },
    { name: '비빔밥', emoji: '🍚', category: '한식' },
    { name: '불고기', emoji: '🥩', category: '한식' },
    { name: '떡볶이', emoji: '🌶️', category: '한식' },
    { name: '치킨', emoji: '🍗', category: '한식' },
    { name: '잔치국수', emoji: '🍜', category: '한식' },
    { name: '제육볶음', emoji: '🍖', category: '한식' },
    { name: '초밥', emoji: '🍣', category: '일식' },
    { name: '라멘', emoji: '🍜', category: '일식' },
    { name: '돈카츠', emoji: '🥩', category: '일식' },
    { name: '우동', emoji: '🍲', category: '일식' },
    { name: '짜장면', emoji: '🍝', category: '중식' },
    { name: '짬뽕', emoji: '🥡', category: '중식' },
    { name: '탕수육', emoji: '🍖', category: '중식' },
    { name: '마라탕', emoji: '🌶️', category: '중식' },
    { name: '피자', emoji: '🍕', category: '양식' },
    { name: '파스타', emoji: '🍝', category: '양식' },
    { name: '햄버거', emoji: '🍔', category: '양식' },
    { name: '스테이크', emoji: '🥩', category: '양식' },
    { name: '쌀국수', emoji: '🍜', category: '아시안' },
    { name: '팟타이', emoji: '🥘', category: '아시안' },
    { name: '카레', emoji: '🍛', category: '아시안' },
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
