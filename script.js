// База данных блюд с категориями по странам и количествами ингредиентов
const dishes = [
    // Грузинская кухня
    {
        name: "Хачапури по-аджарски",
        country: "Грузия",
        ingredients: [
            {name: "мука", amount: "300 г"},
            {name: "яйцо", amount: "2 шт"},
            {name: "молоко", amount: "150 мл"},
            {name: "масло", amount: "50 г"},
            {name: "сыр сулугуни", amount: "200 г"},
            {name: "дрожжи", amount: "5 г"},
            {name: "соль", amount: "5 г"}
        ],
        recipe: "1. Замесите тесто из муки, молока, дрожжей и соли.\n2. Дайте тесту подойти.\n3. Сформируйте лодочки, заполните натёртым сулугуни.\n4. Выпекайте 15-20 минут при 200°C.\n5. Добавьте яйцо и кусочек масла перед подачей.",
        difficulty: "средне",
        time: "1,5 часа"
    },
    
    // Русская кухня
    {
        name: "Оливье",
        country: "Россия",
        ingredients: [
            {name: "картофель", amount: "3 шт"},
            {name: "морковь", amount: "2 шт"},
            {name: "яйцо", amount: "4 шт"},
            {name: "огурцы", amount: "2 шт"},
            {name: "горошек", amount: "200 г"},
            {name: "колбаса", amount: "300 г"},
            {name: "майонез", amount: "150 г"},
            {name: "соль", amount: "по вкусу"}
        ],
        recipe: "1. Отварите картофель, морковь и яйца.\n2. Нарежьте все ингредиенты кубиками.\n3. Добавьте горошек.\n4. Заправьте майонезом и посолите по вкусу.",
        difficulty: "легко",
        time: "40 минут"
    },
    
    // Японская кухня
    {
        name: "Онигири",
        country: "Япония",
        ingredients: [
            {name: "рис", amount: "200 г"},
            {name: "нори", amount: "2 листа"},
            {name: "лосось", amount: "100 г"},
            {name: "соль", amount: "5 г"},
            {name: "кунжут", amount: "20 г"}
        ],
        recipe: "1. Приготовьте рис.\n2. Сформируйте треугольные колобки.\n3. В середину добавьте лосось.\n4. Оберните нори и посыпьте кунжутом.",
        difficulty: "легко",
        time: "30 минут"
    },
    
    // Итальянская кухня
    {
        name: "Спагетти Карбонара",
        country: "Италия",
        ingredients: [
            {name: "спагетти", amount: "250 г"},
            {name: "яйцо", amount: "2 шт"},
            {name: "бекон", amount: "150 г"},
            {name: "пармезан", amount: "50 г"},
            {name: "чеснок", amount: "2 зубчика"},
            {name: "соль", amount: "по вкусу"},
            {name: "перец", amount: "по вкусу"}
        ],
        recipe: "1. Отварите спагетти.\n2. Обжарьте бекон с чесноком.\n3. Смешайте с яйцами и сыром.\n4. Добавьте спагетти и перемешайте.",
        difficulty: "средне",
        time: "25 минут"
    },
    
    // Мексиканская кухня
    {
        name: "Гуакамоле",
        country: "Мексика",
        ingredients: [
            {name: "авокадо", amount: "2 шт"},
            {name: "помидор", amount: "1 шт"},
            {name: "лук", amount: "1 шт"},
            {name: "лимон", amount: "0.5 шт"},
            {name: "чеснок", amount: "1 зубчик"},
            {name: "соль", amount: "5 г"},
            {name: "перец", amount: "3 г"}
        ],
        recipe: "1. Разомните авокадо.\n2. Добавьте мелко нарезанные помидоры и лук.\n3. Приправьте лимонным соком, чесноком, солью и перцем.",
        difficulty: "легко",
        time: "15 минут"
    },
    
    // Дополнительные рецепты
    {
        name: "Борщ",
        country: "Россия",
        ingredients: [
            {name: "свекла", amount: "2 шт"},
            {name: "картофель", amount: "3 шт"},
            {name: "капуста", amount: "200 г"},
            {name: "морковь", amount: "1 шт"},
            {name: "лук", amount: "1 шт"},
            {name: "мясо", amount: "300 г"},
            {name: "сметана", amount: "по вкусу"},
            {name: "соль", amount: "по вкусу"}
        ],
        recipe: "1. Сварите мясной бульон.\n2. Обжарьте лук, морковь и свеклу.\n3. Добавьте картофель и капусту в бульон.\n4. Добавьте обжаренные овощи.\n5. Варите до готовности. Подавайте со сметаной.",
        difficulty: "средне",
        time: "1,5 часа"
    },
    
    {
        name: "Пельмени",
        country: "Россия",
        ingredients: [
            {name: "мука", amount: "500 г"},
            {name: "яйцо", amount: "1 шт"},
            {name: "вода", amount: "200 мл"},
            {name: "фарш", amount: "500 г"},
            {name: "лук", amount: "1 шт"},
            {name: "соль", amount: "по вкусу"},
            {name: "перец", amount: "по вкусу"}
        ],
        recipe: "1. Замесите тесто из муки, яйца и воды.\n2. Приготовьте фарш с луком и специями.\n3. Раскатайте тесто, вырежьте кружки.\n4. Слепите пельмени.\n5. Варите в кипящей воде 5-7 минут.",
        difficulty: "средне",
        time: "1 час"
    },
    
    {
        name: "Салат Цезарь",
        country: "Италия",
        ingredients: [
            {name: "курица", amount: "300 г"},
            {name: "салат", amount: "1 пучок"},
            {name: "сухарики", amount: "100 г"},
            {name: "пармезан", amount: "50 г"},
            {name: "яйцо", amount: "2 шт"},
            {name: "чеснок", amount: "2 зубчика"},
            {name: "майонез", amount: "100 г"},
            {name: "горчица", amount: "1 ч.л."}
        ],
        recipe: "1. Обжарьте курицу.\n2. Приготовьте соус из яиц, чеснока, майонеза и горчицы.\n3. Смешайте листья салата с сухариками и курицей.\n4. Заправьте соусом и посыпьте пармезаном.",
        difficulty: "средне",
        time: "40 минут"
    },
    
    {
        name: "Омлет",
        country: "Франция",
        ingredients: [
            {name: "яйцо", amount: "3 шт"},
            {name: "молоко", amount: "50 мл"},
            {name: "соль", amount: "по вкусу"},
            {name: "масло", amount: "20 г"}
        ],
        recipe: "1. Взбейте яйца с молоком и солью.\n2. Разогрейте сковороду с маслом.\n3. Вылейте смесь на сковороду.\n4. Жарьте на среднем огне до готовности.",
        difficulty: "легко",
        time: "10 минут"
    },
    
    {
        name: "Греческий салат",
        country: "Греция",
        ingredients: [
            {name: "помидор", amount: "2 шт"},
            {name: "огурец", amount: "1 шт"},
            {name: "перец", amount: "1 шт"},
            {name: "лук", amount: "0.5 шт"},
            {name: "сыр фета", amount: "100 г"},
            {name: "маслины", amount: "50 г"},
            {name: "оливковое масло", amount: "2 ст.л."},
            {name: "лимон", amount: "0.5 шт"}
        ],
        recipe: "1. Нарежьте овощи крупными кусками.\n2. Добавьте маслины и кубики феты.\n3. Заправьте оливковым маслом и лимонным соком.",
        difficulty: "легко",
        time: "15 минут"
    }
];

// Словарь для нормализации слов (основная форма -> варианты)
const ingredientDictionary = {
    "яйцо": ["яйца", "яиц", "яйцу", "яйцом"],
    "мука": ["муки", "муку"],
    "молоко": ["молока", "молоком"],
    "картофель": ["картошка", "картофеля", "картошку"],
    "помидор": ["помидора", "помидоры", "помидорам"],
    "лук": ["лука", "луку"],
    "морковь": ["морковка", "моркови"],
    "масло": ["масла"],
    "соль": ["соли"],
    "перец": ["перца"],
    "сыр": ["сыра"],
    "мясо": ["мяса", "мясу"],
    "курица": ["курицу", "курицы"],
    "говядина": ["говядину", "говядины"],
    "фарш": ["фарша"],
    "рис": ["риса"],
    "лапша": ["лапши"],
    "тесто": ["теста"],
    "бульон": ["бульона"],
    "сметана": ["сметаны"],
    "майонез": ["майонеза"],
    "уксус": ["уксуса"],
    "сахар": ["сахара"],
    "лимон": ["лимона"],
    "чеснок": ["чеснока"],
    "зелень": ["зелени"],
    "специи": ["специй"],
    "творог": ["творога"],
    "кефир": ["кефира"],
    "сода": ["соды"],
    "дрожжи": ["дрожжей"],
    "орех": ["орехи", "орехов"],
    "изюм": ["изюма"],
    "мед": ["меда"],
    "варенье": ["варенья"],
    "шоколад": ["шоколада"],
    "какао": ["какао"],
    "кофе": ["кофе"],
    "чай": ["чая"],
    "вино": ["вина"],
    "пиво": ["пива"],
    "водка": ["водки"],
    "авокадо": ["авокадо"],
    "нори": ["нори"],
    "сулугуни": ["сулугуни"],
    "пармезан": ["пармезана"],
    "фета": ["феты"],
    "маслины": ["маслин"]
};

// Обратный словарь (вариант -> основная форма)
const reverseDictionary = {};
for (const [base, variants] of Object.entries(ingredientDictionary)) {
    reverseDictionary[base] = base;
    variants.forEach(variant => {
        reverseDictionary[variant] = base;
    });
}

let selectedIngredients = [];

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    // Загрузка сохранённых ингредиентов
    const savedIngredients = localStorage.getItem('savedIngredients');
    if (savedIngredients) {
        selectedIngredients = JSON.parse(savedIngredients);
        updateIngredientList();
    }
    
    // Обработчики событий
    document.getElementById('ingredient-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addIngredient();
    });
    
    document.getElementById('add-btn').addEventListener('click', addIngredient);
    document.getElementById('find-btn').addEventListener('click', findRecipes);
    document.getElementById('clear-btn').addEventListener('click', clearIngredients);
});

// Нормализация ингредиента (приведение к основной форме)
function normalizeIngredient(ingredient) {
    // Приводим к нижнему регистру и удаляем лишние пробелы
    const cleaned = ingredient.toLowerCase().trim();
    
    // Проверяем словарь
    if (reverseDictionary[cleaned]) {
        return reverseDictionary[cleaned];
    }
    
    // Если нет в словаре, возвращаем как есть
    return cleaned;
}

// Добавление ингредиента
function addIngredient() {
    const input = document.getElementById('ingredient-input');
    const ingredient = normalizeIngredient(input.value);
    
    if (ingredient && !selectedIngredients.includes(ingredient)) {
        selectedIngredients.push(ingredient);
        updateIngredientList();
        input.value = '';
        input.focus();
        saveIngredients();
    }
}

// Удаление ингредиента
function removeIngredient(ingredient) {
    selectedIngredients = selectedIngredients.filter(item => item !== ingredient);
    updateIngredientList();
    saveIngredients();
}

// Обновление списка ингредиентов
function updateIngredientList() {
    const list = document.getElementById('ingredient-list');
    list.innerHTML = '';
    
    if (selectedIngredients.length === 0) {
        list.innerHTML = '<p class="placeholder-text">Ваши ингредиенты появятся здесь</p>';
        return;
    }
    
    selectedIngredients.forEach(ingredient => {
        const item = document.createElement('span');
        item.className = 'ingredient-item';
        item.innerHTML = `${ingredient} <span class="remove-btn" onclick="removeIngredient('${ingredient}')"><i class="fas fa-times"></i></span>`;
        list.appendChild(item);
    });
}

// Поиск рецептов
function findRecipes() {
    const resultDiv = document.getElementById('result');
    
    if (selectedIngredients.length === 0) {
        showNoResults("Нет ингредиентов", "Пожалуйста, добавьте ингредиенты, которые у вас есть");
        return;
    }
    
    // Получаем настройки
    const showPartial = document.getElementById('partial-match-toggle').checked;
    const showMissing = document.getElementById('show-missing-toggle').checked;
    const selectedCountries = Array.from(document.querySelectorAll('#country-filters input:checked'))
        .map(checkbox => checkbox.value);
    
    // Фильтрация и подсчёт совпадений
    const matchingDishes = dishes
        .filter(dish => selectedCountries.length === 0 || selectedCountries.includes(dish.country))
        .map(dish => {
            const matched = dish.ingredients.map(ing => 
                selectedIngredients.some(userIng => 
                    normalizeIngredient(userIng) === normalizeIngredient(ing.name)
                )
            );
            
            const matchedCount = matched.filter(Boolean).length;
            const totalIngredients = dish.ingredients.length;
            const matchPercentage = Math.round((matchedCount / totalIngredients) * 100);
            const missingIngredients = dish.ingredients.filter((ing, i) => !matched[i]);
            
            return {
                ...dish,
                matchedCount,
                matchPercentage,
                missingIngredients,
                isFullMatch: matchedCount === totalIngredients
            };
        })
        .filter(dish => dish.matchedCount > 0)
        .filter(dish => showPartial || dish.isFullMatch)
        .sort((a, b) => {
            // Сначала полные совпадения, затем по проценту совпадения
            if (a.isFullMatch && !b.isFullMatch) return -1;
            if (!a.isFullMatch && b.isFullMatch) return 1;
            return b.matchPercentage - a.matchPercentage;
        });
    
    if (matchingDishes.length === 0) {
        showNoResults("Рецепты не найдены", "Попробуйте изменить список ингредиентов или настройки поиска");
        return;
    }
    
    // Группировка по странам
    const dishesByCountry = matchingDishes.reduce((acc, dish) => {
        if (!acc[dish.country]) acc[dish.country] = [];
        acc[dish.country].push(dish);
        return acc;
    }, {});
    
    // Сортировка стран по количеству рецептов
    const sortedCountries = Object.keys(dishesByCountry)
        .sort((a, b) => dishesByCountry[b].length - dishesByCountry[a].length);
    
    // Отображение результатов
    let html = `
        <h2 class="section-title">
            <i class="fas fa-utensil-spoon"></i>
            Подходящие рецепты
        </h2>
        <div class="search-info">
            Найдено ${matchingDishes.length} рецептов по ${selectedIngredients.length} ингредиентам
        </div>
    `;
    
    sortedCountries.forEach(country => {
        const countryDishes = dishesByCountry[country];
        
        html += `
            <div class="country-section">
                <h3 class="country-title">
                    <i class="fas fa-flag"></i>
                    ${country} (${countryDishes.length} рецептов)
                </h3>
                <div class="dishes-container">
        `;
        
        countryDishes.forEach(dish => {
            const isFullMatch = dish.isFullMatch;
            
            html += `
                <div class="dish ${isFullMatch ? '' : 'partial-match'}">
                    <div class="dish-name">
                        ${dish.name}
                        ${!isFullMatch ? `<span class="match-percentage">${dish.matchPercentage}%</span>` : ''}
                    </div>
                    <div class="dish-meta">
                        <span><i class="fas fa-clock"></i> ${dish.time}</span>
                        <span><i class="fas fa-signal"></i> ${dish.difficulty}</span>
                    </div>
                    <div class="dish-ingredients">
                        <strong>Ингредиенты:</strong> 
                        ${dish.ingredients.map(ing => {
                            const isMatched = selectedIngredients.some(userIng => 
                                normalizeIngredient(userIng) === normalizeIngredient(ing.name)
                            );
                            return `
                                <span class="ingredient-with-amount ${isMatched ? 'matched' : ''}">
                                    ${isMatched ? `<strong>${ing.name}</strong>` : ing.name}
                                    <span class="ingredient-amount">${ing.amount}</span>
                                </span>
                            `;
                        }).join('')}
                    </div>
                    ${showMissing && dish.missingIngredients.length > 0 ? `
                        <div class="missing-ingredients">
                            <i class="fas fa-info-circle"></i>
                            <strong>Не хватает:</strong> 
                            ${dish.missingIngredients.map(ing => `${ing.name} (${ing.amount})`).join(', ')}
                        </div>
                    ` : ''}
                    <div class="dish-recipe">
                        <strong><i class="fas fa-book-open"></i> Рецепт:</strong> 
                        ${dish.recipe.split('\n').join('<br>')}
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    resultDiv.innerHTML = html;
}

// Показать сообщение об отсутствии результатов
function showNoResults(title, message) {
    document.getElementById('result').innerHTML = `
        <div class="no-results">
            <i class="fas fa-exclamation-circle"></i>
            <h3>${title}</h3>
            <p>${message}</p>
        </div>
    `;
}

// Очистка ингредиентов
function clearIngredients() {
    selectedIngredients = [];
    updateIngredientList();
    saveIngredients();
    document.getElementById('result').innerHTML = '';
    document.getElementById('ingredient-input').focus();
}

// Сохранение ингредиентов
function saveIngredients() {
    localStorage.setItem('savedIngredients', JSON.stringify(selectedIngredients));
}

// Глобальные функции для HTML
window.removeIngredient = removeIngredient;
window.clearIngredients = clearIngredients;