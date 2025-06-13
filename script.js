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
        time: "1,5 часа",
        nutrition: {
            calories: 550,
            protein: "22г",
            fat: "28г",
            carbs: "55г"
        }
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
        time: "40 минут",
        nutrition: {
            calories: 320,
            protein: "15г",
            fat: "22г",
            carbs: "18г"
        }
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
        time: "30 минут",
        nutrition: {
            calories: 280,
            protein: "8г",
            fat: "5г",
            carbs: "50г"
        }
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
        time: "25 минут",
        nutrition: {
            calories: 450,
            protein: "20г",
            fat: "25г",
            carbs: "35г"
        }
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
        time: "15 минут",
        nutrition: {
            calories: 220,
            protein: "3г",
            fat: "20г",
            carbs: "10г"
        }
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
        time: "1,5 часа",
        nutrition: {
            calories: 180,
            protein: "12г",
            fat: "8г",
            carbs: "15г"
        }
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
        time: "1 час",
        nutrition: {
            calories: 300,
            protein: "18г",
            fat: "12г",
            carbs: "30г"
        }
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
        time: "40 минут",
        nutrition: {
            calories: 350,
            protein: "25г",
            fat: "22г",
            carbs: "12г"
        }
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
        time: "10 минут",
        nutrition: {
            calories: 250,
            protein: "18г",
            fat: "18г",
            carbs: "2г"
        }
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
        time: "15 минут",
        nutrition: {
            calories: 200,
            protein: "6г",
            fat: "15г",
            carbs: "10г"
        }
    }
];

// Словарь для нормализации слов (основная форма -> варианты)
const ingredientDictionary = {
    "авокадо": ["авокадо"],
    "агар-агар": ["агар-агара"],
    "айран": ["айрана"],
    "ананас": ["ананаса", "ананасы"],
    "апельсин": ["апельсина", "апельсины"],
    "арахис": ["арахиса"],
    "арбуз": ["арбуза"],
    "баклажан": ["баклажана", "баклажаны"],
    "банан": ["банана", "бананы"],
    "базилик": ["базилика"],
    "баранина": ["баранины"],
    "белок": ["белка", "белки"],
    "бекон": ["бекона"],
    "брокколи": ["брокколи"],
    "брынза": ["брынзы"],
    "булгур": ["булгура"],
    "ваниль": ["ванили"],
    "ванильный сахар": ["ванильного сахара"],
    "вино белое": ["белого вина"],
    "вино красное": ["красного вина"],
    "виноград": ["винограда"],
    "вишня": ["вишни"],
    "водка": ["водки"],
    "галетное печенье": ["галетного печенья"],
    "гвоздика": ["гвоздики"],
    "говядина": ["говядины"],
    "горбуша": ["горбуши"],
    "горчица": ["горчицы"],
    "горох": ["гороха"],
    "горошек зеленый": ["зеленого горошка"],
    "гранат": ["граната"],
    "грейпфрут": ["грейпфрута"],
    "грецкий орех": ["грецкого ореха"],
    "грибы": ["грибов"],
    "грибы белые": ["белых грибов"],
    "грибы шампиньоны": ["шампиньонов"],
    "груша": ["груши"],
    "гуава": ["гуавы"],
    "джем": ["джема"],
    "дрожжи": ["дрожжей"],
    "душица": ["душицы"],
    "желатин": ["желатина"],
    "желток": ["желтка", "желтки"],
    "зелень": ["зелени"],
    "зеленый лук": ["зеленого лука"],
    "зерна граната": ["зерен граната"],
    "зерна горчицы": ["зерен горчицы"],
    "изюм": ["изюма"],
    "имбирь": ["имбиря"],
    "индейка": ["индейки"],
    "йогурт": ["йогурта"],
    "кабачок": ["кабачка"],
    "какао": ["какао"],
    "кальмар": ["кальмара"],
    "каперсы": ["каперсов"],
    "капуста": ["капусты"],
    "капуста белокочанная": ["белокочанной капусты"],
    "капуста брюссельская": ["брюссельской капусты"],
    "капуста цветная": ["цветной капусты"],
    "капуста пекинская": ["пекинской капусты"],
    "кардамон": ["кардамона"],
    "карри": ["карри"],
    "картофель": ["картофеля", "картошка"],
    "каштаны": ["каштанов"],
    "кедровые орехи": ["кедровых орехов"],
    "кефир": ["кефира"],
    "киви": ["киви"],
    "кинза": ["кинзы"],
    "клубника": ["клубники"],
    "клюква": ["клюквы"],
    "кокос": ["кокоса"],
    "кокосовое молоко": ["кокосового молока"],
    "корица": ["корицы"],
    "кориандр": ["кориандра"],
    "кофе": ["кофе"],
    "краб": ["краба"],
    "крабовые палочки": ["крабовых палочек"],
    "крахмал": ["крахмала"],
    "креветки": ["креветок"],
    "кукуруза": ["кукурузы"],
    "кукурузная мука": ["кукурузной муки"],
    "кунжут": ["кунжута"],
    "курага": ["кураги"],
    "курица": ["курицы"],
    "лаваш": ["лаваша"],
    "лаванда": ["лаванды"],
    "лавровый лист": ["лаврового листа"],
    "лимон": ["лимона"],
    "лимонная цедра": ["лимонной цедры"],
    "лимонный сок": ["лимонного сока"],
    "лук": ["лука"],
    "лук красный": ["красного лука"],
    "лук порей": ["лука порея"],
    "майонез": ["майонеза"],
    "макароны": ["макарон"],
    "малина": ["малины"],
    "манго": ["манго"],
    "мандарин": ["мандарина"],
    "манка": ["манки"],
    "масло оливковое": ["оливкового масла"],
    "масло подсолнечное": ["подсолнечного масла"],
    "масло сливочное": ["сливочного масла"],
    "маслины": ["маслин"],
    "мацони": ["мацони"],
    "мед": ["меда"],
    "миндаль": ["миндаля"],
    "минтай": ["минтая"],
    "молоко": ["молока"],
    "молоко сгущенное": ["сгущенного молока"],
    "морковь": ["моркови"],
    "морс": ["морса"],
    "мука": ["муки"],
    "мука пшеничная": ["пшеничной муки"],
    "мука ржаная": ["ржаной муки"],
    "мускатный орех": ["мускатного ореха"],
    "мята": ["мяты"],
    "мясо": ["мяса"],
    "нут": ["нута"],
    "огурцы": ["огурцов"],
    "огурцы маринованные": ["маринованных огурцов"],
    "окорочка": ["окорочков"],
    "оливки": ["оливок"],
    "орехи": ["орехов"],
    "паприка": ["паприки"],
    "паста томатная": ["томатной пасты"],
    "пастернак": ["пастернака"],
    "патиссон": ["патиссона"],
    "перец болгарский": ["болгарского перца"],
    "перец горошком": ["перца горошком"],
    "перец душистый": ["душистого перца"],
    "перец красный": ["красного перца"],
    "перец черный": ["черного перца"],
    "печень": ["печени"],
    "печенье": ["печенья"],
    "петрушка": ["петрушки"],
    "помидор": ["помидора", "помидоры"],
    "помидоры черри": ["помидоров черри"],
    "пшено": ["пшена"],
    "редис": ["редиса"],
    "репа": ["репы"],
    "рис": ["риса"],
    "рис басмати": ["риса басмати"],
    "рис дикий": ["дикого риса"],
    "розмарин": ["розмарина"],
    "руккола": ["рукколы"],
    "рыба": ["рыбы"],
    "салат": ["салата"],
    "салат айсберг": ["салата айсберг"],
    "салат корн": ["салата корн"],
    "салат латук": ["салата латук"],
    "сахар": ["сахара"],
    "сахар ванильный": ["ванильного сахара"],
    "сахар коричневый": ["коричневого сахара"],
    "свекла": ["свеклы"],
    "сельдерей": ["сельдерея"],
    "семга": ["семги"],
    "семена льна": ["семян льна"],
    "семена подсолнечника": ["семян подсолнечника"],
    "семена тыквы": ["семян тыквы"],
    "сироп": ["сиропа"],
    "сливки": ["сливок"],
    "сливы": ["слив"],
    "сметана": ["сметаны"],
    "сода": ["соды"],
    "соевый соус": ["соевого соуса"],
    "соль": ["соли"],
    "спаржа": ["спаржи"],
    "сухари": ["сухарей"],
    "сухофрукты": ["сухофруктов"],
    "сыр": ["сыра"],
    "сыр адыгейский": ["адыгейского сыра"],
    "сыр брынза": ["брынзы"],
    "сыр гауда": ["гауды"],
    "сыр дор блю": ["дор блю"],
    "сыр моцарелла": ["моцареллы"],
    "сыр пармезан": ["пармезана"],
    "сыр плавленый": ["плавленого сыра"],
    "сыр рикотта": ["рикотты"],
    "сыр фета": ["феты"],
    "сыр чеддер": ["чеддера"],
    "творог": ["творога"],
    "телятина": ["телятины"],
    "тимьян": ["тимьяна"],
    "тофу": ["тофу"],
    "треска": ["трески"],
    "тунец": ["тунца"],
    "тыква": ["тыквы"],
    "укроп": ["укропа"],
    "уксус": ["уксуса"],
    "уксус бальзамический": ["бальзамического уксуса"],
    "уксус яблочный": ["яблочного уксуса"],
    "фарш": ["фарша"],
    "фасоль": ["фасоли"],
    "фасоль стручковая": ["стручковой фасоли"],
    "финики": ["фиников"],
    "филе куриное": ["куриного филе"],
    "фундук": ["фундука"],
    "хлеб": ["хлеба"],
    "хрен": ["хрена"],
    "цукини": ["цукини"],
    "чай": ["чая"],
    "чеснок": ["чеснока"],
    "черника": ["черники"],
    "чернослив": ["чернослива"],
    "шоколад": ["шоколада"],
    "шоколад белый": ["белого шоколада"],
    "шоколад горький": ["горького шоколада"],
    "шоколад молочный": ["молочного шоколада"],
    "шпинат": ["шпината"],
    "щавель": ["щавеля"],
    "яблоко": ["яблока", "яблоки"],
    "ягоды": ["ягод"],
    "яйцо": ["яйца", "яиц"],
    "яйцо перепелиное": ["перепелиного яйца"]
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
let currentMode = 'quick';
let isAuthenticated = false;
let userAddedDishes = JSON.parse(localStorage.getItem('userAddedDishes')) || [];
let allDishes = [...dishes, ...userAddedDishes];

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    // Загрузка сохранённых ингредиентов
    const savedIngredients = localStorage.getItem('savedIngredients');
    if (savedIngredients) {
        selectedIngredients = JSON.parse(savedIngredients);
        updateIngredientList();
    }
    
    // Проверка сохранённого режима
    const savedMode = localStorage.getItem('cookingMode');
    if (savedMode) {
        setMode(savedMode);
    } else {
        setMode('quick');
    }
    
    // Показываем модальное окно выбора режима
    setTimeout(() => {
        document.getElementById('mode-modal').style.display = 'flex';
    }, 500);
    
    // Обработчики событий
    document.getElementById('ingredient-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addIngredient();
    });
    
    document.getElementById('add-btn').addEventListener('click', addIngredient);
    document.getElementById('find-btn').addEventListener('click', findRecipes);
    document.getElementById('clear-btn').addEventListener('click', clearIngredients);
    document.getElementById('change-mode-btn').addEventListener('click', function() {
        document.getElementById('mode-modal').style.display = 'flex';
    });
    
    // Обработчики для выбора режима
    document.querySelectorAll('.mode-option').forEach(option => {
        option.addEventListener('click', function() {
            const mode = this.dataset.mode;
            setMode(mode);
            document.getElementById('mode-modal').style.display = 'none';
        });
    });

    // Обработчики для авторизации
    document.getElementById('auth-btn').addEventListener('click', function() {
        document.getElementById('auth-modal').style.display = 'flex';
    });
    
    document.querySelector('#auth-modal .close-modal').addEventListener('click', function() {
        document.getElementById('auth-modal').style.display = 'none';
    });
    
    document.getElementById('login-btn').addEventListener('click', function() {
        const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;
        
        if (login === '1234' && password === '1234') {
            isAuthenticated = true;
            document.getElementById('auth-modal').style.display = 'none';
            document.getElementById('auth-btn').classList.add('auth-success');
            document.getElementById('auth-error').textContent = '';
        } else {
            document.getElementById('auth-error').textContent = 'Неверный логин или пароль';
        }
    });

    // Обработчики для добавления рецептов
    document.getElementById('add-recipe-btn').addEventListener('click', function() {
        document.getElementById('add-recipe-modal').style.display = 'flex';
    });
    
    document.querySelector('#add-recipe-modal .close-modal').addEventListener('click', function() {
        document.getElementById('add-recipe-modal').style.display = 'none';
    });
    
    document.getElementById('submit-recipe-btn').addEventListener('click', function() {
        const name = document.getElementById('recipe-name').value.trim();
        const country = document.getElementById('recipe-country').value.trim();
        const time = document.getElementById('recipe-time').value.trim();
        const difficulty = document.getElementById('recipe-difficulty').value;
        const calories = parseInt(document.getElementById('recipe-calories').value);
        const protein = document.getElementById('recipe-protein').value.trim();
        const fat = document.getElementById('recipe-fat').value.trim();
        const carbs = document.getElementById('recipe-carbs').value.trim();
        const ingredientsText = document.getElementById('recipe-ingredients').value.trim();
        const recipeText = document.getElementById('recipe-steps').value.trim();
        
        // Валидация
        if (!name || !country || !time || !ingredientsText || !recipeText || isNaN(calories)) {
            document.getElementById('recipe-error').textContent = 'Пожалуйста, заполните все обязательные поля';
            return;
        }
        
        // Парсинг ингредиентов
        const ingredients = [];
        const ingredientLines = ingredientsText.split('\n');
        
        for (const line of ingredientLines) {
            const parts = line.split(':');
            if (parts.length >= 2) {
                const ingredientName = parts[0].trim();
                const amount = parts.slice(1).join(':').trim();
                if (ingredientName && amount) {
                    ingredients.push({
                        name: ingredientName,
                        amount: amount
                    });
                }
            }
        }
        
        if (ingredients.length === 0) {
            document.getElementById('recipe-error').textContent = 'Добавьте хотя бы один ингредиент в правильном формате';
            return;
        }
        
        // Создание нового рецепта
        const newRecipe = {
            name: name,
            country: country,
            time: time,
            difficulty: difficulty,
            nutrition: {
                calories: calories,
                protein: protein,
                fat: fat,
                carbs: carbs
            },
            ingredients: ingredients,
            recipe: recipeText.split('\n').join('\n'),
            isUserAdded: true
        };
        
        // Добавление рецепта
        userAddedDishes.push(newRecipe);
        allDishes.push(newRecipe);
        localStorage.setItem('userAddedDishes', JSON.stringify(userAddedDishes));
        
        // Обновление интерфейса
        document.getElementById('add-recipe-modal').style.display = 'none';
        document.getElementById('recipe-error').textContent = '';
        
        // Обновление фильтров
        updateCountryFilters();
        
        // Очистка формы
        document.getElementById('recipe-name').value = '';
        document.getElementById('recipe-country').value = '';
        document.getElementById('recipe-time').value = '';
        document.getElementById('recipe-ingredients').value = '';
        document.getElementById('recipe-steps').value = '';
        
        // Показываем сообщение об успехе
        alert('Рецепт успешно добавлен!');
    });
    
    // Закрытие модальных окон при клике вне их
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('auth-modal')) {
            document.getElementById('auth-modal').style.display = 'none';
        }
        if (event.target === document.getElementById('add-recipe-modal')) {
            document.getElementById('add-recipe-modal').style.display = 'none';
        }
        if (event.target === document.getElementById('mode-modal')) {
            document.getElementById('mode-modal').style.display = 'none';
        }
    });

    // Инициализация помощника
    initSearchHelper();
    updateCountryFilters();
});

// Функция обновления фильтров стран
function updateCountryFilters() {
    const countries = [...new Set(allDishes.map(dish => dish.country))];
    const filtersContainer = document.getElementById('country-filters');
    
    // Сохраняем выбранные страны
    const checkedCountries = Array.from(document.querySelectorAll('#country-filters input:checked'))
        .map(checkbox => checkbox.value);
        
    filtersContainer.innerHTML = '';
    
    // Добавляем стандартные страны
    const defaultCountries = ['Грузия', 'Россия', 'Япония', 'Италия', 'Мексика'];
    defaultCountries.forEach(country => {
        const isChecked = checkedCountries.includes(country) || checkedCountries.length === 0;
        filtersContainer.innerHTML += `
            <label>
                <input type="checkbox" name="country" value="${country}" ${isChecked ? 'checked' : ''}>
                ${country}
            </label>
        `;
    });
    
    // Добавляем пользовательские страны
    const userCountries = [...new Set(userAddedDishes.map(dish => dish.country))];
    userCountries.forEach(country => {
        if (!defaultCountries.includes(country)) {
            const isChecked = checkedCountries.includes(country);
            filtersContainer.innerHTML += `
                <label>
                    <input type="checkbox" name="country" value="${country}" ${isChecked ? 'checked' : ''}>
                    ${country}
                </label>
            `;
        }
    });
}

// Функция установки режима
function setMode(mode) {
    currentMode = mode;
    document.body.className = `${mode}-mode`;
    localStorage.setItem('cookingMode', mode);
    
    // Если уже есть результаты поиска - обновим их
    if (document.getElementById('result').innerHTML) {
        findRecipes();
    }
}

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
    const matchingDishes = allDishes
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
            
            // Затем сортировка по выбранному режиму
            if (currentMode === 'quick') {
                // Сортируем по времени (предполагаем, что время в формате "X минут" или "X часов")
                const aTime = parseInt(a.time) || 0;
                const bTime = parseInt(b.time) || 0;
                return aTime - bTime;
            } else if (currentMode === 'healthy') {
                // Сортируем по калориям (меньше -> полезнее)
                return a.nutrition.calories - b.nutrition.calories;
            } else {
                // Для красивой подачи сортируем по сложности (сложнее -> красивее)
                const difficultyOrder = { "легко": 1, "средне": 2, "сложно": 3 };
                return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
            }
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
            const isUserAdded = dish.isUserAdded;
            
            html += `
                <div class="dish ${isFullMatch ? '' : 'partial-match'} ${isUserAdded ? 'user-added' : ''}">
                    ${isUserAdded ? '<div class="user-added-badge">Добавлено вами</div>' : ''}
                    <div class="dish-name">
                        ${dish.name}
                        ${!isFullMatch ? `<span class="match-percentage">${dish.matchPercentage}%</span>` : ''}
                    </div>
                    <div class="dish-meta">
                        <span><i class="fas fa-clock"></i> ${dish.time}</span>
                        <span><i class="fas fa-signal"></i> ${dish.difficulty}</span>
                    </div>
                    <div class="nutrition-info">
                        <div class="nutrition-item">
                            <div class="nutrition-value">${dish.nutrition.calories} ккал</div>
                            <div class="nutrition-label">Калории</div>
                        </div>
                        <div class="nutrition-item">
                            <div class="nutrition-value">${dish.nutrition.protein}</div>
                            <div class="nutrition-label">Белки</div>
                        </div>
                        <div class="nutrition-item">
                            <div class="nutrition-value">${dish.nutrition.fat}</div>
                            <div class="nutrition-label">Жиры</div>
                        </div>
                        <div class="nutrition-item">
                            <div class="nutrition-value">${dish.nutrition.carbs}</div>
                            <div class="nutrition-label">Углеводы</div>
                        </div>
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

// Инициализация помощника по поиску
function initSearchHelper() {
    const input = document.getElementById('ingredient-input');
    const helper = document.createElement('div');
    helper.id = 'search-helper';
    helper.style.display = 'none';
    helper.style.position = 'absolute';
    helper.style.backgroundColor = 'white';
    helper.style.border = '1px solid #ddd';
    helper.style.borderRadius = 'var(--border-radius)';
    helper.style.boxShadow = 'var(--box-shadow)';
    helper.style.zIndex = '1000';
    helper.style.maxHeight = '300px';
    helper.style.overflowY = 'auto';
    helper.style.width = input.offsetWidth + 'px';
    
    input.parentNode.insertBefore(helper, input.nextSibling);
    
    input.addEventListener('input', function() {
        const value = this.value.toLowerCase().trim();
        if (value.length < 2) {
            helper.style.display = 'none';
            return;
        }
        
        // Ищем совпадения в словаре ингредиентов
        const matches = Object.keys(reverseDictionary)
            .filter(ing => ing.toLowerCase().includes(value))
            .slice(0, 10);
        
        if (matches.length === 0) {
            helper.style.display = 'none';
            return;
        }
        
        helper.innerHTML = matches.map(ing => 
            `<div class="helper-item" onclick="selectHelperItem('${ing}')">${ing}</div>`
        ).join('');
        helper.style.display = 'block';
    });
    
    input.addEventListener('blur', function() {
        setTimeout(() => {
            helper.style.display = 'none';
        }, 200);
    });
}

function selectHelperItem(ingredient) {
    document.getElementById('ingredient-input').value = ingredient;
    document.getElementById('search-helper').style.display = 'none';
    document.getElementById('ingredient-input').focus();
}

// Глобальные функции для HTML
window.removeIngredient = removeIngredient;
window.clearIngredients = clearIngredients;
window.selectHelperItem = selectHelperItem;