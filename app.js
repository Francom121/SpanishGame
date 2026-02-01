const GAME_DATA = {
    animals: [
        { name: "Perro", english: "Dog", emoji: "🐶", article: "el" },
        { name: "Gato", english: "Cat", emoji: "🐱", article: "el" },
        { name: "León", english: "Lion", emoji: "🦁", article: "el" },
        { name: "Elefante", english: "Elephant", emoji: "🐘", article: "el" },
        { name: "Mono", english: "Monkey", emoji: "🐒", article: "el" },
        { name: "Tigre", english: "Tiger", emoji: "🐯", article: "el" },
        { name: "Oso", english: "Bear", emoji: "🐻", article: "el" },
        { name: "Pájaro", english: "Bird", emoji: "🐦", article: "el" },
        { name: "Pez", english: "Fish", emoji: "🐟", article: "el" },
        { name: "Rana", english: "Frog", emoji: "🐸", article: "la" },
        { name: "Cebra", english: "Zebra", emoji: "🦓", article: "la" },
        { name: "Jirafa", english: "Giraffe", emoji: "🦒", article: "la" },
        { name: "Hipopótamo", english: "Hippo", emoji: "🦛", article: "el" },
        { name: "Cerdo", english: "Pig", emoji: "🐷", article: "el" },
        { name: "Vaca", english: "Cow", emoji: "🐮", article: "la" },
        { name: "Caballo", english: "Horse", emoji: "🐴", article: "el" },
        { name: "Oveja", english: "Sheep", emoji: "🐑", article: "la" },
        { name: "Conejo", english: "Rabbit", emoji: "🐰", article: "el" },
        { name: "Ratón", english: "Mouse", emoji: "🐭", article: "el" },
        { name: "Pato", english: "Duck", emoji: "🦆", article: "el" },
        { name: "Pollo", english: "Chicken", emoji: "🐔", article: "el" },
        { name: "Tortuga", english: "Turtle", emoji: "🐢", article: "la" },
        { name: "Mariposa", english: "Butterfly", emoji: "🦋", article: "la" },
        { name: "Abeja", english: "Bee", emoji: "🐝", article: "la" },
        { name: "Araña", english: "Spider", emoji: "🕷️", article: "la" },
        { name: "Serpiente", english: "Snake", emoji: "🐍", article: "la" },
        { name: "Cocodrilo", english: "Crocodile", emoji: "🐊", article: "el" },
        { name: "Pingüino", english: "Penguin", emoji: "🐧", article: "el" },
        { name: "Delfín", english: "Dolphin", emoji: "🐬", article: "el" },
        { name: "Pulpo", english: "Octopus", emoji: "🐙", article: "el" }
    ],
    colors: [
        { name: "Rojo", english: "Red", emoji: "🟥", article: "el" },
        { name: "Azul", english: "Blue", emoji: "🟦", article: "el" },
        { name: "Verde", english: "Green", emoji: "🟩", article: "el" },
        { name: "Amarillo", english: "Yellow", emoji: "🟨", article: "el" },
        { name: "Naranja", english: "Orange", emoji: "🟧", article: "el" },
        { name: "Morado", english: "Purple", emoji: "🟪", article: "el" },
        { name: "Blanco", english: "White", emoji: "⬜", article: "el" },
        { name: "Negro", english: "Black", emoji: "⬛", article: "el" },
        { name: "Rosa", english: "Pink", emoji: "🌸", article: "el" },
        { name: "Marrón", english: "Brown", emoji: "🟫", article: "el" },
        { name: "Gris", english: "Gray", emoji: "🔘", article: "el" },
        { name: "Oro", english: "Gold", emoji: "🟡", article: "el" },
        { name: "Plata", english: "Silver", emoji: "⚪", article: "el" },
        { name: "Cian", english: "Cyan", emoji: "💠", article: "el" },
        { name: "Violeta", english: "Violet", emoji: "🟣", article: "el" },
        { name: "Turquesa", english: "Turquoise", emoji: "💎", article: "el" }
    ],
    fruits: [
        { name: "Manzana", english: "Apple", emoji: "🍎", article: "la" },
        { name: "Plátano", english: "Banana", emoji: "🍌", article: "el" },
        { name: "Uva", english: "Grapes", emoji: "🍇", article: "la" },
        { name: "Fresa", english: "Strawberry", emoji: "🍓", article: "la" },
        { name: "Naranja", english: "Orange", emoji: "🍊", article: "la" },
        { name: "Piña", english: "Pineapple", emoji: "🍍", article: "la" },
        { name: "Sandía", english: "Watermelon", emoji: "🍉", article: "la" },
        { name: "Pera", english: "Pear", emoji: "🍐", article: "la" },
        { name: "Cereza", english: "Cherry", emoji: "🍒", article: "la" },
        { name: "Mango", english: "Mango", emoji: "🥭", article: "el" },
        { name: "Limón", english: "Lemon", emoji: "🍋", article: "el" },
        { name: "Coco", english: "Coconut", emoji: "🥥", article: "el" },
        { name: "Kiwi", english: "Kiwi", emoji: "🥝", article: "el" },
        { name: "Aguacate", english: "Avocado", emoji: "🥑", article: "el" },
        { name: "Durazno", english: "Peach", emoji: "🍑", article: "el" },
        { name: "Melón", english: "Melon", emoji: "🍈", article: "el" },
        { name: "Arándano", english: "Blueberry", emoji: "🫐", article: "el" },
        { name: "Frambuesa", english: "Raspberry", emoji: "🍒", article: "la" }
    ],
    numbers: [
        { name: "Uno", english: "One", emoji: "1️⃣", article: "el" },
        { name: "Dos", english: "Two", emoji: "2️⃣", article: "el" },
        { name: "Tres", english: "Three", emoji: "3️⃣", article: "el" },
        { name: "Cuatro", english: "Four", emoji: "4️⃣", article: "el" },
        { name: "Cinco", english: "Five", emoji: "5️⃣", article: "el" },
        { name: "Seis", english: "Six", emoji: "6️⃣", article: "el" },
        { name: "Siete", english: "Seven", emoji: "7️⃣", article: "el" },
        { name: "Ocho", english: "Eight", emoji: "8️⃣", article: "el" },
        { name: "Nueve", english: "Nine", emoji: "9️⃣", article: "el" },
        { name: "Diez", english: "Ten", emoji: "🔟", article: "el" },
        { name: "Once", english: "Eleven", emoji: "1️⃣1️⃣", article: "el" },
        { name: "Doce", english: "Twelve", emoji: "1️⃣2️⃣", article: "el" },
        { name: "Trece", english: "Thirteen", emoji: "1️⃣3️⃣", article: "el" },
        { name: "Catorce", english: "Fourteen", emoji: "1️⃣4️⃣", article: "el" },
        { name: "Quince", english: "Fifteen", emoji: "1️⃣5️⃣", article: "el" },
        { name: "Veinte", english: "Twenty", emoji: "2️⃣0️⃣", article: "el" }
    ],
    vehicles: [
        { name: "Coche", english: "Car", emoji: "🚗", article: "el" },
        { name: "Avión", english: "Plane", emoji: "✈️", article: "el" },
        { name: "Tren", english: "Train", emoji: "🚂", article: "el" },
        { name: "Barco", english: "Boat", emoji: "🚢", article: "el" },
        { name: "Bicicleta", english: "Bike", emoji: "🚲", article: "la" },
        { name: "Autobús", english: "Bus", emoji: "🚌", article: "el" },
        { name: "Helicóptero", english: "Helicopter", emoji: "🚁", article: "el" },
        { name: "Cohete", english: "Rocket", emoji: "🚀", article: "el" },
        { name: "Moto", english: "Motorcycle", emoji: "🏍️", article: "la" },
        { name: "Taxi", english: "Taxi", emoji: "🚕", article: "el" },
        { name: "Camión", english: "Truck", emoji: "🚚", article: "el" },
        { name: "Ambulancia", english: "Ambulance", emoji: "🚑", article: "la" },
        { name: "Submarino", english: "Submarine", emoji: "🚢", article: "el" },
        { name: "Globo", english: "Hot Air Balloon", emoji: "🎈", article: "el" }
    ],
    nature: [
        { name: "Sol", english: "Sun", emoji: "☀️", article: "el" },
        { name: "Luna", english: "Moon", emoji: "🌙", article: "la" },
        { name: "Estrella", english: "Star", emoji: "⭐", article: "la" },
        { name: "Nube", english: "Cloud", emoji: "☁️", article: "la" },
        { name: "Árbol", english: "Tree", emoji: "🌳", article: "el" },
        { name: "Flor", english: "Flower", emoji: "🌸", article: "la" },
        { name: "Montaña", english: "Mountain", emoji: "⛰️", article: "la" },
        { name: "Mar", english: "Sea", emoji: "🌊", article: "el" },
        { name: "Río", english: "River", emoji: "🌊", article: "el" },
        { name: "Lago", english: "Lake", emoji: "💧", article: "el" },
        { name: "Bosque", english: "Forest", emoji: "🌲", article: "el" },
        { name: "Piedra", english: "Rock", emoji: "🪨", article: "la" },
        { name: "Arena", english: "Sand", emoji: "🏖️", article: "la" },
        { name: "Hierba", english: "Grass", emoji: "🌱", article: "la" },
        { name: "Hoja", english: "Leaf", emoji: "🍃", article: "la" },
        { name: "Arcoíris", english: "Rainbow", emoji: "🌈", article: "el" }
    ],
    cosas_casa: [
        { name: "Cama", english: "Bed", emoji: "🛏️", article: "la" },
        { name: "Mesa", english: "Table", emoji: "🍽️", article: "la" },
        { name: "Silla", english: "Chair", emoji: "🪑", article: "la" },
        { name: "Ventana", english: "Window", emoji: "🪟", article: "la" },
        { name: "Puerta", english: "Door", emoji: "🚪", article: "la" },
        { name: "Sofá", english: "Sofa", emoji: "🛋️", article: "el" },
        { name: "Luz", english: "Lamp", emoji: "💡", article: "la" },
        { name: "Televisión", english: "TV", emoji: "📺", article: "la" },
        { name: "Reloj", english: "Clock", emoji: "⏰", article: "el" },
        { name: "Espejo", english: "Mirror", emoji: "🪞", article: "el" },
        { name: "Alfombra", english: "Rug", emoji: "🧵", article: "la" },
        { name: "Almohada", english: "Pillow", emoji: "😴", article: "la" },
        { name: "Manta", english: "Blanket", emoji: "🧣", article: "la" },
        { name: "Refrigerador", english: "Refrigerator", emoji: "❄️", article: "el" },
        { name: "Estufa", english: "Stove", emoji: "🍳", article: "la" }
    ],
    body: [
        { name: "Cabeza", english: "Head", emoji: "👤", article: "la" },
        { name: "Ojos", english: "Eyes", emoji: "👀", article: "los" },
        { name: "Nariz", english: "Nose", emoji: "👃", article: "la" },
        { name: "Boca", english: "Mouth", emoji: "👄", article: "la" },
        { name: "Orejas", english: "Ears", emoji: "👂", article: "las" },
        { name: "Manos", english: "Hands", emoji: "👐", article: "las" },
        { name: "Pies", english: "Feet", emoji: "🦶", article: "los" },
        { name: "Brazos", english: "Arms", emoji: "💪", article: "los" },
        { name: "Piernas", english: "Legs", emoji: "🦵", article: "las" },
        { name: "Pelo", english: "Hair", emoji: "💇", article: "el" },
        { name: "Dedos", english: "Fingers", emoji: "🖐️", article: "los" },
        { name: "Corazón", english: "Heart", emoji: "❤️", article: "el" },
        { name: "Estómago", english: "Stomach", emoji: "🫃", article: "el" },
        { name: "Dientes", english: "Teeth", emoji: "🦷", article: "los" }
    ],
    family: [
        { name: "Mamá", english: "Mom", emoji: "👩", article: "la" },
        { name: "Papá", english: "Dad", emoji: "👨", article: "el" },
        { name: "Hermana", english: "Sister", emoji: "👧", article: "la" },
        { name: "Hermano", english: "Brother", emoji: "👦", article: "el" },
        { name: "Abuela", english: "Grandma", emoji: "👵", article: "la" },
        { name: "Abuelo", english: "Grandpa", emoji: "👴", article: "el" },
        { name: "Tía", english: "Aunt", emoji: "👩", article: "la" },
        { name: "Tío", english: "Uncle", emoji: "👨", article: "el" },
        { name: "Prima", english: "Cousin (f)", emoji: "👧", article: "la" },
        { name: "Primo", english: "Cousin (m)", emoji: "👦", article: "el" },
        { name: "Bebé", english: "Baby", emoji: "👶", article: "el" },
        { name: "Familia", english: "Family", emoji: "👨‍👩‍👧‍👦", article: "la" }
    ],
    food: [
        { name: "Pan", english: "Bread", emoji: "🍞", article: "el" },
        { name: "Queso", english: "Cheese", emoji: "🧀", article: "el" },
        { name: "Leche", english: "Milk", emoji: "🥛", article: "la" },
        { name: "Agua", english: "Water", emoji: "💧", article: "el" },
        { name: "Huevo", english: "Egg", emoji: "🥚", article: "el" },
        { name: "Arroz", english: "Rice", emoji: "🍚", article: "el" },
        { name: "Pasta", english: "Pasta", emoji: "🍝", article: "la" },
        { name: "Pizza", english: "Pizza", emoji: "🍕", article: "la" },
        { name: "Hamburguesa", english: "Hamburger", emoji: "🍔", article: "la" },
        { name: "Sopa", english: "Soup", emoji: "🍲", article: "la" },
        { name: "Ensalada", english: "Salad", emoji: "🥗", article: "la" },
        { name: "Pollo", english: "Chicken", emoji: "🍗", article: "el" },
        { name: "Pescado", english: "Fish", emoji: "🐟", article: "el" },
        { name: "Carne", english: "Meat", emoji: "🥩", article: "la" },
        { name: "Galletas", english: "Cookies", emoji: "🍪", article: "las" },
        { name: "Pastel", english: "Cake", emoji: "🍰", article: "el" },
        { name: "Helado", english: "Ice Cream", emoji: "🍦", article: "el" },
        { name: "Chocolate", english: "Chocolate", emoji: "🍫", article: "el" },
        { name: "Jugo", english: "Juice", emoji: "🧃", article: "el" }
    ],
    actions: [
        { name: "Correr", english: "Run", emoji: "🏃", article: "" },
        { name: "Saltar", english: "Jump", emoji: "🤸", article: "" },
        { name: "Bailar", english: "Dance", emoji: "💃", article: "" },
        { name: "Cantar", english: "Sing", emoji: "🎤", article: "" },
        { name: "Dormir", english: "Sleep", emoji: "😴", article: "" },
        { name: "Comer", english: "Eat", emoji: "🍴", article: "" },
        { name: "Beber", english: "Drink", emoji: "🥤", article: "" },
        { name: "Leer", english: "Read", emoji: "📖", article: "" },
        { name: "Escribir", english: "Write", emoji: "✍️", article: "" },
        { name: "Jugar", english: "Play", emoji: "🎮", article: "" },
        { name: "Nadar", english: "Swim", emoji: "🏊", article: "" },
        { name: "Caminar", english: "Walk", emoji: "🚶", article: "" },
        { name: "Ver", english: "Watch/See", emoji: "👁️", article: "" },
        { name: "Escuchar", english: "Listen", emoji: "👂", article: "" }
    ],
    weather: [
        { name: "Lluvia", english: "Rain", emoji: "🌧️", article: "la" },
        { name: "Nieve", english: "Snow", emoji: "❄️", article: "la" },
        { name: "Viento", english: "Wind", emoji: "💨", article: "el" },
        { name: "Tormenta", english: "Storm", emoji: "⛈️", article: "la" },
        { name: "Trueno", english: "Thunder", emoji: "⚡", article: "el" },
        { name: "Relámpago", english: "Lightning", emoji: "🌩️", article: "el" },
        { name: "Niebla", english: "Fog", emoji: "🌫️", article: "la" },
        { name: "Calor", english: "Heat", emoji: "🔥", article: "el" },
        { name: "Frío", english: "Cold", emoji: "🧊", article: "el" }
    ]
};

const CATEGORY_ICONS = {
    animals: "🐒",
    colors: "🎨",
    fruits: "🍎",
    numbers: "🔢",
    vehicles: "🚀",
    nature: "🌈",
    cosas_casa: "🏠",
    body: "👤",
    family: "👨‍👩‍👧‍👦",
    food: "🍕",
    actions: "⚡",
    weather: "☀️"
};

// Achievement system
const ACHIEVEMENTS = [
    { id: "first_star", name: "Primera Estrella", desc: "Gana tu primera estrella", emoji: "⭐", requirement: 1 },
    { id: "five_stars", name: "Cinco Estrellas", desc: "Gana 5 estrellas", emoji: "🌟", requirement: 5 },
    { id: "perfect_round", name: "Perfecto", desc: "Completa un juego sin errores", emoji: "💯", requirement: 1 },
    { id: "streak_5", name: "Racha de 5", desc: "5 respuestas correctas seguidas", emoji: "🔥", requirement: 5 },
    { id: "complete_category", name: "Maestro", desc: "Completa todas las categorías", emoji: "🏆", requirement: 1 },
    { id: "speed_demon", name: "Rápido", desc: "Completa un juego en menos de 30 segundos", emoji: "⚡", requirement: 1 }
];

// Game State
let gameState = {
    currentCategory: '',
    currentMode: 'quiz', // quiz, memory, truefalse, sentence, puzzle, story
    currentRound: 0,
    totalRounds: 10,
    score: 0,
    streak: 0,
    bestStreak: 0,
    errors: 0,
    correctItem: null,
    difficulty: 'easy',
    timerEnabled: false,
    startTime: null,
    missedWords: [],
    currentQuestionText: '', // Store the current question for repeat button
    encouragements: ["¡Muy bien!", "¡Excelente!", "¡Genial!", "¡Lo lograste!", "¡Qué inteligente!", "¡Perfecto!", "¡Bravo!", "¡Increíble!", "¡Fantástico!", "¡Maravilloso!"],
    phrases: [
        { intro: "Yo veo", englishIntro: "I see" },
        { intro: "Quiero", englishIntro: "I want" },
        { intro: "Me gusta", englishIntro: "I like" },
        { intro: "Encuentra", englishIntro: "Find" },
        { intro: "Dónde está", englishIntro: "Where is" },
        { intro: "Tengo", englishIntro: "I have" },
        { intro: "Necesito", englishIntro: "I need" }
    ]
};

// Memory game state
let memoryState = {
    cards: [],
    flippedCards: [],
    matchedPairs: 0,
    moves: 0
};

// Progress tracking
let playerProgress = {
    totalStars: 0,
    achievements: [],
    categoriesCompleted: [],
    highScores: {},
    totalGamesPlayed: 0
};

// Voice settings
let availableVoices = [];
let selectedVoice = null;
let voiceSettings = {
    selectedVoiceName: null,
    rate: 0.85,
    pitch: 1.0
};

// Image API settings
const GOOGLE_API_KEY = 'AIzaSyDMmgUh6dXRK2Miw8ULzx_j_QOSCbgKvTc';
const SEARCH_ENGINE_ID = '521c96b2ce40b4b06'; // Google Custom Search Engine ID
let imageCache = {};
let useImages = true; // Toggle for images vs emojis

// Load voices
function loadVoices() {
    availableVoices = window.speechSynthesis.getVoices();

    // Filter for Spanish voices
    const spanishVoices = availableVoices.filter(voice =>
        voice.lang.startsWith('es') || voice.lang.startsWith('ES')
    );

    // Try to find the best Spanish voice
    // Priority: Google español, Microsoft, other Spanish voices
    const preferredVoices = [
        'Google español',
        'Google español de Estados Unidos',
        'Microsoft Helena - Spanish (Spain)',
        'Microsoft Sabina - Spanish (Mexico)',
        'Mónica',
        'Paulina',
        'Jorge',
        'Juan'
    ];

    // Load saved voice preference
    const savedSettings = localStorage.getItem('spanishGameVoiceSettings');
    if (savedSettings) {
        voiceSettings = JSON.parse(savedSettings);
    }

    // Set selected voice
    if (voiceSettings.selectedVoiceName) {
        selectedVoice = availableVoices.find(v => v.name === voiceSettings.selectedVoiceName);
    }

    // If no saved voice or saved voice not found, pick the best available
    if (!selectedVoice && spanishVoices.length > 0) {
        for (let preferred of preferredVoices) {
            selectedVoice = spanishVoices.find(v => v.name.includes(preferred));
            if (selectedVoice) break;
        }

        // If still no voice, just use the first Spanish voice
        if (!selectedVoice) {
            selectedVoice = spanishVoices[0];
        }
    }

    // Update voice selector UI if it exists
    updateVoiceSelector();
}

function updateVoiceSelector() {
    const voiceSelect = document.getElementById('voice-select');
    if (!voiceSelect) return;

    const spanishVoices = availableVoices.filter(voice =>
        voice.lang.startsWith('es') || voice.lang.startsWith('ES')
    );

    voiceSelect.innerHTML = '';

    spanishVoices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.textContent = `${voice.name} (${voice.lang})`;
        if (selectedVoice && voice.name === selectedVoice.name) {
            option.selected = true;
        }
        voiceSelect.appendChild(option);
    });
}

function saveVoiceSettings() {
    localStorage.setItem('spanishGameVoiceSettings', JSON.stringify(voiceSettings));
}

// Image loading functions
function loadImageCache() {
    const cached = localStorage.getItem('spanishGameImageCache');
    if (cached) {
        imageCache = JSON.parse(cached);
    }
}

function saveImageCache() {
    localStorage.setItem('spanishGameImageCache', JSON.stringify(imageCache));
}

async function getImageForWord(word, englishWord, preferLarger = false) {
    // If images are disabled, return null to use emoji
    if (!useImages) {
        return null;
    }

    // Check cache first
    const cacheKey = word.toLowerCase() + (preferLarger ? '_large' : '');
    if (imageCache[cacheKey]) {
        return imageCache[cacheKey];
    }

    try {
        // Try Google Custom Search API first if available
        if (GOOGLE_API_KEY && SEARCH_ENGINE_ID) {
            const imgSize = preferLarger ? 'large' : 'medium';
            const searchUrl = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(englishWord)}&searchType=image&imgSize=${imgSize}&num=1`;

            const response = await fetch(searchUrl);
            if (response.ok) {
                const data = await response.json();
                if (data.items && data.items.length > 0) {
                    const imageUrl = data.items[0].link;
                    imageCache[cacheKey] = imageUrl;
                    saveImageCache();
                    return imageUrl;
                }
            }
        }

        // Fallback to Unsplash API (free, no auth needed for basic use)
        const size = preferLarger ? '400x400' : '200x200';
        const response = await fetch(
            `https://source.unsplash.com/${size}/?${encodeURIComponent(englishWord)},simple,clean`
        );

        if (response.ok) {
            const imageUrl = response.url;
            imageCache[cacheKey] = imageUrl;
            saveImageCache();
            return imageUrl;
        }
    } catch (error) {
        console.log('Image fetch failed, using emoji fallback');
    }

    return null; // Fallback to emoji
}

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('spanishGameProgress');
    if (saved) {
        playerProgress = JSON.parse(saved);
    }
}

function saveProgress() {
    localStorage.setItem('spanishGameProgress', JSON.stringify(playerProgress));
}

// DOM Elements
const screens = {
    main: document.getElementById('main-menu'),
    categories: document.getElementById('category-screen'),
    gameModes: document.getElementById('game-mode-screen'),
    game: document.getElementById('game-screen'),
    memory: document.getElementById('memory-game-screen'),
    truefalse: document.getElementById('truefalse-game-screen'),
    sentence: document.getElementById('sentence-game-screen'),
    puzzle: document.getElementById('puzzle-game-screen'),
    story: document.getElementById('story-game-screen'),
    matching: document.getElementById('matching-game-screen'),
    result: document.getElementById('result-screen'),
    settings: document.getElementById('settings-screen')
};

// Navigation
function showScreen(screenId) {
    Object.values(screens).forEach(screen => {
        if (screen) screen.classList.remove('active');
    });
    if (screens[screenId]) {
        screens[screenId].classList.add('active');
    }
}

// Event Listeners
document.getElementById('start-btn').addEventListener('click', () => {
    loadProgress();
    updateStatsDisplay();
    showScreen('categories');
});

document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        gameState.currentCategory = card.dataset.category;
        showScreen('gameModes');
    });
});

document.querySelectorAll('.mode-card').forEach(card => {
    card.addEventListener('click', () => {
        const mode = card.dataset.mode;
        gameState.currentMode = mode;
        startGameMode(mode);
    });
});

document.querySelectorAll('.back-to-game-modes').forEach(btn => {
    btn.addEventListener('click', () => {
        showScreen('gameModes');
    });
});

document.querySelectorAll('.back-to-categories').forEach(btn => {
    btn.addEventListener('click', () => {
        showScreen('categories');
    });
});

document.querySelectorAll('.back-to-menu').forEach(btn => {
    btn.addEventListener('click', () => {
        resetGame();
        showScreen('main');
    });
});

document.getElementById('play-again-btn').addEventListener('click', () => {
    startNewGame(gameState.currentCategory);
});

// Settings event listeners
const settingsBtn = document.getElementById('settings-btn');
if (settingsBtn) {
    settingsBtn.addEventListener('click', () => showScreen('settings'));
}

const difficultyBtns = document.querySelectorAll('.difficulty-btn');
difficultyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        difficultyBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        gameState.difficulty = btn.dataset.difficulty;
    });
});

const timerToggle = document.getElementById('timer-toggle');
if (timerToggle) {
    timerToggle.addEventListener('change', (e) => {
        gameState.timerEnabled = e.target.checked;
    });
}

const imagesToggle = document.getElementById('images-toggle');
if (imagesToggle) {
    imagesToggle.addEventListener('change', (e) => {
        useImages = e.target.checked;
        localStorage.setItem('spanishGameUseImages', JSON.stringify(useImages));
    });

    // Load saved preference
    const savedImagePref = localStorage.getItem('spanishGameUseImages');
    if (savedImagePref !== null) {
        useImages = JSON.parse(savedImagePref);
        imagesToggle.checked = useImages;
    }
}

// Voice selection
const voiceSelect = document.getElementById('voice-select');
if (voiceSelect) {
    voiceSelect.addEventListener('change', (e) => {
        const voiceName = e.target.value;
        selectedVoice = availableVoices.find(v => v.name === voiceName);
        voiceSettings.selectedVoiceName = voiceName;
        saveVoiceSettings();
    });
}

// Voice speed control
const speedSlider = document.getElementById('voice-speed');
if (speedSlider) {
    speedSlider.addEventListener('input', (e) => {
        voiceSettings.rate = parseFloat(e.target.value);
        document.getElementById('speed-value').textContent = e.target.value;
        saveVoiceSettings();
    });
}

// Test voice button
const testVoiceBtn = document.getElementById('test-voice-btn');
if (testVoiceBtn) {
    testVoiceBtn.addEventListener('click', testVoice);
}

// Repeat question button
const repeatBtn = document.getElementById('repeat-btn');
if (repeatBtn) {
    repeatBtn.addEventListener('click', () => {
        if (gameState.currentQuestionText) {
            speak(gameState.currentQuestionText, "es-ES");
        }
    });
}

// Update stats display
function updateStatsDisplay() {
    const statsEl = document.getElementById('total-stars-display');
    if (statsEl) {
        statsEl.textContent = playerProgress.totalStars;
    }
}

// Game Mode Router
function startGameMode(mode) {
    switch(mode) {
        case 'quiz':
            startNewGame();
            break;
        case 'memory':
            startMemoryGame();
            break;
        case 'truefalse':
            startTrueFalseGame();
            break;
        case 'sentence':
            startSentenceGame();
            break;
        case 'puzzle':
            startPuzzleGame();
            break;
        case 'story':
            startStoryGame();
            break;
        case 'matching':
            startMatchingGame();
            break;
        default:
            startNewGame();
    }
}

// Game Logic
function startNewGame() {
    gameState.score = 0;
    gameState.currentRound = 0;
    gameState.streak = 0;
    gameState.bestStreak = 0;
    gameState.errors = 0;
    gameState.missedWords = [];
    gameState.startTime = Date.now();

    // Update marker icon
    document.getElementById('character-marker').textContent = CATEGORY_ICONS[gameState.currentCategory];

    updateScore();
    updateStreak();
    updateProgress();
    showScreen('game');
    nextRound();
}

function updateProgress() {
    const percentage = (gameState.currentRound / gameState.totalRounds) * 100;
    document.getElementById('progress-fill').style.width = `${percentage}%`;
    document.getElementById('character-marker').style.left = `${percentage}%`;
}

function updateStreak() {
    const streakEl = document.getElementById('streak-display');
    if (streakEl) {
        streakEl.textContent = gameState.streak;
        if (gameState.streak >= 3) {
            streakEl.classList.add('fire');
        } else {
            streakEl.classList.remove('fire');
        }
    }
}

function nextRound() {
    if (gameState.currentRound >= gameState.totalRounds) {
        endGame();
        return;
    }

    const items = GAME_DATA[gameState.currentCategory];
    gameState.correctItem = items[Math.floor(Math.random() * items.length)];

    // Pick a phrase intro
    const phrase = gameState.phrases[Math.floor(Math.random() * gameState.phrases.length)];

    // Challenge Mode (Randomly hide text for some rounds)
    const isListenOnly = Math.random() > 0.7; // 30% chance

    // Set bilingual target
    const targetEl = document.getElementById('word-target');
    if (isListenOnly) {
        targetEl.innerHTML = `
            <div class="english-guide">Listen Challenge!</div>
            <div class="spanish-word">👂 ?</div>
        `;
    } else {
        const articleText = gameState.correctItem.article ? `${gameState.correctItem.article} ` : '';
        targetEl.innerHTML = `
            <div class="english-guide">${phrase.englishIntro} the ${gameState.correctItem.english}</div>
            <div class="spanish-word">${phrase.intro} ${articleText}${gameState.correctItem.name}</div>
        `;
    }

    // Voice prompt
    const prefix = isListenOnly ? "¡Desafío de escucha! " : "";
    const articleText = gameState.correctItem.article ? `${gameState.correctItem.article} ` : '';
    const fullText = `${prefix}${phrase.intro} ${articleText}${gameState.correctItem.name}`;

    // Store the question for repeat button
    gameState.currentQuestionText = fullText;

    speak(fullText, "es-ES");

    // Determine number of options based on difficulty
    let numOptions = 4;
    if (gameState.difficulty === 'medium') numOptions = 6;
    if (gameState.difficulty === 'hard') numOptions = 8;

    const options = [gameState.correctItem];
    while (options.length < Math.min(numOptions, items.length)) {
        const randomItem = items[Math.floor(Math.random() * items.length)];
        if (!options.find(opt => opt.name === randomItem.name)) {
            options.push(randomItem);
        }
    }

    options.sort(() => Math.random() - 0.5);

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    // Adjust grid based on difficulty - keep max 2 columns to prevent horizontal scroll
    // Easy: 2 columns, 2 rows (4 items)
    // Medium: 2 columns, 3 rows (6 items)
    // Hard: 2 columns, 4 rows (8 items)
    container.style.gridTemplateColumns = 'repeat(2, 1fr)';

    // Adjust card height for harder difficulties
    if (numOptions === 6) {
        container.classList.add('medium-difficulty');
        container.classList.remove('hard-difficulty');
    } else if (numOptions === 8) {
        container.classList.add('hard-difficulty');
        container.classList.remove('medium-difficulty');
    } else {
        container.classList.remove('medium-difficulty', 'hard-difficulty');
    }

    options.forEach(async (item) => {
        const card = document.createElement('div');
        card.className = 'option-card';

        // Start with emoji, will replace with image if available
        card.innerHTML = `
            <div class="card-image-container">
                <span class="emoji">${item.emoji}</span>
            </div>
            <span class="word-hint">${item.name}</span>
        `;

        card.addEventListener('click', () => handleChoice(card, item));
        container.appendChild(card);

        // Try to load image asynchronously
        const imageUrl = await getImageForWord(item.name, item.english);
        if (imageUrl) {
            const imageContainer = card.querySelector('.card-image-container');
            imageContainer.innerHTML = `<img src="${imageUrl}" alt="${item.name}" class="word-image">`;
        }
    });
}

function speak(text, lang = "es-ES", onComplete = null) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = voiceSettings.rate;
    utterance.pitch = voiceSettings.pitch;

    // Use selected voice if available
    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }

    // Call the callback when speech finishes
    if (onComplete) {
        utterance.onend = onComplete;
    }

    window.speechSynthesis.speak(utterance);
}

function testVoice() {
    speak("Hola, soy tu maestra de español. ¡Vamos a aprender juntos!");
}

function handleChoice(element, chosenItem) {
    if (element.classList.contains('correct') || element.classList.contains('wrong')) return;

    if (chosenItem.name === gameState.correctItem.name) {
        element.classList.add('correct');
        gameState.score += 1;
        gameState.currentRound += 1;
        gameState.streak += 1;
        gameState.bestStreak = Math.max(gameState.bestStreak, gameState.streak);

        updateScore();
        updateStreak();
        updateProgress();
        playSuccessSound();

        const encouragement = gameState.encouragements[Math.floor(Math.random() * gameState.encouragements.length)];

        // Wait for speech to finish before moving to next round
        speak(`${chosenItem.name}. ${encouragement}`, "es-ES", () => {
            setTimeout(() => {
                nextRound();
            }, 500); // Small delay after speech finishes for better UX
        });
    } else {
        element.classList.add('wrong');
        gameState.streak = 0;
        gameState.errors += 1;

        // Track missed word
        if (!gameState.missedWords.find(w => w.name === gameState.correctItem.name)) {
            gameState.missedWords.push(gameState.correctItem);
        }

        updateStreak();
        speak("Inténtalo de nuevo", "es-ES");
        playErrorSound();

        setTimeout(() => {
            element.classList.remove('wrong');
        }, 800);
    }
}

function updateScore() {
    document.getElementById('score-display').textContent = gameState.score;
}

function playSuccessSound() {
    const sound = document.getElementById('success-sound');
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(e => console.log("Sound could not play", e));
    }
}

function playErrorSound() {
    const sound = document.getElementById('error-sound');
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(e => console.log("Sound could not play", e));
    }
}

function endGame() {
    const elapsedTime = (Date.now() - gameState.startTime) / 1000;
    const isPerfect = gameState.errors === 0;

    // Update progress
    playerProgress.totalStars += gameState.score;
    playerProgress.totalGamesPlayed += 1;

    // Track high score for category
    if (!playerProgress.highScores[gameState.currentCategory] ||
        gameState.score > playerProgress.highScores[gameState.currentCategory]) {
        playerProgress.highScores[gameState.currentCategory] = gameState.score;
    }

    // Check for new achievements
    const newAchievements = checkAchievements(isPerfect, elapsedTime);

    // Save progress
    saveProgress();

    // Display results
    document.getElementById('final-score-val').textContent = gameState.score;
    document.getElementById('final-streak-val').textContent = gameState.bestStreak;

    // Show badges
    const badgesContainer = document.getElementById('badges-container');
    badgesContainer.innerHTML = '';

    if (isPerfect) {
        badgesContainer.innerHTML += '<div class="badge">💯 Perfecto</div>';
    }
    if (gameState.bestStreak >= 5) {
        badgesContainer.innerHTML += `<div class="badge">🔥 Racha de ${gameState.bestStreak}</div>`;
    }
    if (elapsedTime < 30 && gameState.timerEnabled) {
        badgesContainer.innerHTML += '<div class="badge">⚡ Rápido</div>';
    }

    newAchievements.forEach(achievement => {
        badgesContainer.innerHTML += `<div class="badge new-achievement">${achievement.emoji} ${achievement.name}</div>`;
    });

    // Show review button if there are missed words
    const reviewBtn = document.getElementById('review-btn');
    if (reviewBtn) {
        if (gameState.missedWords.length > 0) {
            reviewBtn.style.display = 'block';
            reviewBtn.onclick = () => startReviewMode();
        } else {
            reviewBtn.style.display = 'none';
        }
    }

    speak(`¡Felicidades! Ganaste ${gameState.score} estrellas.`, "es-ES");
    showScreen('result');
}

function checkAchievements(isPerfect, elapsedTime) {
    const newAchievements = [];

    ACHIEVEMENTS.forEach(achievement => {
        if (playerProgress.achievements.includes(achievement.id)) return;

        let unlocked = false;

        switch(achievement.id) {
            case 'first_star':
                unlocked = playerProgress.totalStars >= 1;
                break;
            case 'five_stars':
                unlocked = playerProgress.totalStars >= 5;
                break;
            case 'perfect_round':
                unlocked = isPerfect;
                break;
            case 'streak_5':
                unlocked = gameState.bestStreak >= 5;
                break;
            case 'speed_demon':
                unlocked = elapsedTime < 30 && gameState.timerEnabled;
                break;
            case 'complete_category':
                const categories = Object.keys(GAME_DATA);
                const completedAll = categories.every(cat =>
                    playerProgress.highScores[cat] !== undefined
                );
                unlocked = completedAll;
                break;
        }

        if (unlocked) {
            playerProgress.achievements.push(achievement.id);
            newAchievements.push(achievement);
        }
    });

    return newAchievements;
}

function startReviewMode() {
    if (gameState.missedWords.length === 0) return;

    // Create a temporary category with only missed words
    GAME_DATA['review'] = gameState.missedWords;
    CATEGORY_ICONS['review'] = '📚';

    gameState.currentCategory = 'review';
    gameState.totalRounds = Math.min(gameState.missedWords.length, 5);
    gameState.score = 0;
    gameState.currentRound = 0;
    gameState.streak = 0;
    gameState.errors = 0;
    gameState.startTime = Date.now();

    speak("Vamos a practicar las palabras difíciles", "es-ES");

    updateScore();
    updateStreak();
    updateProgress();
    showScreen('game');
    nextRound();
}

// ======== MEMORY MATCH GAME ========
function startMemoryGame() {
    const items = GAME_DATA[gameState.currentCategory];
    const numPairs = gameState.difficulty === 'easy' ? 6 : gameState.difficulty === 'medium' ? 8 : 10;

    // Select random items for pairs
    const selectedItems = [];
    while (selectedItems.length < numPairs) {
        const randomItem = items[Math.floor(Math.random() * items.length)];
        if (!selectedItems.find(item => item.name === randomItem.name)) {
            selectedItems.push(randomItem);
        }
    }

    // Create pairs
    memoryState.cards = [];
    selectedItems.forEach((item, index) => {
        memoryState.cards.push({ id: index * 2, item, type: 'word' });
        memoryState.cards.push({ id: index * 2 + 1, item, type: 'image' });
    });

    // Shuffle
    memoryState.cards.sort(() => Math.random() - 0.5);
    memoryState.flippedCards = [];
    memoryState.matchedPairs = 0;
    memoryState.moves = 0;

    showScreen('memory');
    renderMemoryBoard();
}

async function renderMemoryBoard() {
    const board = document.getElementById('memory-board');
    board.innerHTML = '';
    board.className = 'memory-board';

    // Adjust grid based on number of cards
    const numCards = memoryState.cards.length;
    if (numCards <= 12) {
        board.style.gridTemplateColumns = 'repeat(3, 1fr)';
    } else if (numCards <= 16) {
        board.style.gridTemplateColumns = 'repeat(4, 1fr)';
    } else {
        board.style.gridTemplateColumns = 'repeat(4, 1fr)';
    }

    for (const card of memoryState.cards) {
        const cardEl = document.createElement('div');
        cardEl.className = 'memory-card';
        cardEl.dataset.id = card.id;

        const cardInner = document.createElement('div');
        cardInner.className = 'memory-card-inner';

        const cardFront = document.createElement('div');
        cardFront.className = 'memory-card-front';
        cardFront.textContent = '?';

        const cardBack = document.createElement('div');
        cardBack.className = 'memory-card-back';

        if (card.type === 'word') {
            cardBack.textContent = card.item.name;
        } else {
            const imageUrl = await getImageForWord(card.item.name, card.item.english);
            if (imageUrl) {
                cardBack.innerHTML = `<img src="${imageUrl}" alt="${card.item.name}">`;
            } else {
                cardBack.innerHTML = `<span class="emoji">${card.item.emoji}</span>`;
            }
        }

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardEl.appendChild(cardInner);

        cardEl.addEventListener('click', () => handleMemoryCardClick(cardEl, card));

        board.appendChild(cardEl);
    }

    document.getElementById('memory-score-display').textContent = '0';
    document.getElementById('memory-pairs-display').textContent = `0/${memoryState.cards.length / 2}`;
}

function handleMemoryCardClick(cardEl, card) {
    // Can't flip if already flipped or matched
    if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;

    // Can't flip if already 2 cards flipped
    if (memoryState.flippedCards.length >= 2) return;

    cardEl.classList.add('flipped');
    memoryState.flippedCards.push({ cardEl, card });

    // Speak the word
    speak(card.item.name, "es-ES");

    // Check for match when 2 cards are flipped
    if (memoryState.flippedCards.length === 2) {
        memoryState.moves++;
        const [first, second] = memoryState.flippedCards;

        if (first.card.item.name === second.card.item.name) {
            // Match!
            setTimeout(() => {
                first.cardEl.classList.add('matched');
                second.cardEl.classList.add('matched');
                memoryState.matchedPairs++;
                memoryState.flippedCards = [];

                playSuccessSound();
                speak(`¡Correcto! ${first.card.item.name}`, "es-ES");

                document.getElementById('memory-pairs-display').textContent =
                    `${memoryState.matchedPairs}/${memoryState.cards.length / 2}`;

                // Check if game complete
                if (memoryState.matchedPairs === memoryState.cards.length / 2) {
                    setTimeout(() => endMemoryGame(), 1000);
                }
            }, 600);
        } else {
            // No match
            setTimeout(() => {
                first.cardEl.classList.remove('flipped');
                second.cardEl.classList.remove('flipped');
                memoryState.flippedCards = [];
                playErrorSound();
            }, 1000);
        }
    }
}

function endMemoryGame() {
    const score = Math.max(0, 100 - (memoryState.moves * 5));
    gameState.score = score;
    playerProgress.totalStars += Math.floor(score / 10);
    saveProgress();

    speak(`¡Felicidades! Completaste el juego en ${memoryState.moves} movimientos.`, "es-ES");

    document.getElementById('final-score-val').textContent = score;
    document.getElementById('final-streak-val').textContent = memoryState.moves;
    showScreen('result');
}

// ======== TRUE/FALSE GAME ========
function startTrueFalseGame() {
    gameState.score = 0;
    gameState.currentRound = 0;
    gameState.streak = 0;
    gameState.totalRounds = 10;

    updateTFDisplay();
    showScreen('truefalse');
    nextTrueFalseRound();
}

function nextTrueFalseRound() {
    if (gameState.currentRound >= gameState.totalRounds) {
        endTrueFalseGame();
        return;
    }

    const items = GAME_DATA[gameState.currentCategory];
    const correctItem = items[Math.floor(Math.random() * items.length)];

    // 50% chance to show correct or incorrect
    const isCorrect = Math.random() > 0.5;
    const displayItem = isCorrect ? correctItem : items[Math.floor(Math.random() * items.length)];

    gameState.correctItem = { correct: correctItem, display: displayItem, isCorrect };

    const questionEl = document.getElementById('tf-question');
    questionEl.innerHTML = `
        <div class="tf-image-container">
            <div class="emoji">${displayItem.emoji}</div>
        </div>
        <div class="tf-text">
            <p class="tf-label">¿Es esto...</p>
            <h2>${correctItem.article} ${correctItem.name}?</h2>
            <p class="tf-english">Is this ${correctItem.english}?</p>
        </div>
    `;

    // Load image
    getImageForWord(displayItem.name, displayItem.english).then(imageUrl => {
        if (imageUrl) {
            questionEl.querySelector('.tf-image-container').innerHTML =
                `<img src="${imageUrl}" alt="${displayItem.name}" class="tf-image">`;
        }
    });

    // Speak the question
    speak(`¿Es esto ${correctItem.article} ${correctItem.name}?`, "es-ES");

    // Update progress
    const percentage = (gameState.currentRound / gameState.totalRounds) * 100;
    document.getElementById('tf-progress-fill').style.width = `${percentage}%`;
}

// True button
document.getElementById('true-btn').addEventListener('click', () => handleTFAnswer(true));

// False button
document.getElementById('false-btn').addEventListener('click', () => handleTFAnswer(false));

function handleTFAnswer(userAnswer) {
    const isCorrect = gameState.correctItem.isCorrect === userAnswer;

    if (isCorrect) {
        gameState.score++;
        gameState.streak++;
        gameState.currentRound++;
        playSuccessSound();
        speak("¡Correcto!", "es-ES");

        setTimeout(() => {
            nextTrueFalseRound();
        }, 1000);
    } else {
        gameState.streak = 0;
        gameState.currentRound++;
        playErrorSound();
        speak("Incorrecto", "es-ES");

        setTimeout(() => {
            nextTrueFalseRound();
        }, 1000);
    }

    updateTFDisplay();
}

function updateTFDisplay() {
    document.getElementById('tf-score-display').textContent = gameState.score;
    document.getElementById('tf-streak-display').textContent = gameState.streak;
}

function endTrueFalseGame() {
    playerProgress.totalStars += gameState.score;
    saveProgress();

    document.getElementById('final-score-val').textContent = gameState.score;
    document.getElementById('final-streak-val').textContent = gameState.streak;

    speak(`¡Felicidades! Ganaste ${gameState.score} estrellas.`, "es-ES");
    showScreen('result');
}

// ======== SENTENCE BUILDER GAME ========
// Sentence data for each category
const SENTENCE_DATA = {
    animals: [
        { spanish: ["El", "perro", "es", "grande"], english: "The dog is big" },
        { spanish: ["El", "gato", "come", "pescado"], english: "The cat eats fish" },
        { spanish: ["El", "león", "está", "en", "el", "bosque"], english: "The lion is in the forest" },
        { spanish: ["Los", "pájaros", "vuelan", "alto"], english: "The birds fly high" },
        { spanish: ["El", "elefante", "bebe", "agua"], english: "The elephant drinks water" }
    ],
    colors: [
        { spanish: ["El", "cielo", "es", "azul"], english: "The sky is blue" },
        { spanish: ["La", "manzana", "es", "roja"], english: "The apple is red" },
        { spanish: ["Me", "gusta", "el", "color", "verde"], english: "I like the color green" },
        { spanish: ["El", "sol", "es", "amarillo"], english: "The sun is yellow" }
    ],
    fruits: [
        { spanish: ["Me", "gusta", "la", "manzana"], english: "I like the apple" },
        { spanish: ["El", "plátano", "es", "dulce"], english: "The banana is sweet" },
        { spanish: ["Como", "fresas", "todos", "los", "días"], english: "I eat strawberries every day" },
        { spanish: ["La", "sandía", "es", "grande"], english: "The watermelon is big" }
    ],
    numbers: [
        { spanish: ["Tengo", "cinco", "años"], english: "I am five years old" },
        { spanish: ["Cuento", "hasta", "diez"], english: "I count to ten" },
        { spanish: ["Hay", "tres", "perros"], english: "There are three dogs" },
        { spanish: ["Quiero", "dos", "galletas"], english: "I want two cookies" }
    ],
    vehicles: [
        { spanish: ["El", "coche", "es", "rápido"], english: "The car is fast" },
        { spanish: ["Voy", "en", "autobús"], english: "I go by bus" },
        { spanish: ["El", "avión", "vuela", "alto"], english: "The plane flies high" },
        { spanish: ["Me", "gusta", "mi", "bicicleta"], english: "I like my bicycle" }
    ],
    nature: [
        { spanish: ["El", "sol", "brilla", "hoy"], english: "The sun shines today" },
        { spanish: ["Las", "flores", "son", "bonitas"], english: "The flowers are pretty" },
        { spanish: ["Veo", "una", "estrella"], english: "I see a star" },
        { spanish: ["El", "árbol", "es", "grande"], english: "The tree is big" }
    ],
    cosas_casa: [
        { spanish: ["La", "cama", "es", "cómoda"], english: "The bed is comfortable" },
        { spanish: ["Me", "siento", "en", "la", "silla"], english: "I sit on the chair" },
        { spanish: ["La", "mesa", "está", "aquí"], english: "The table is here" },
        { spanish: ["Abro", "la", "puerta"], english: "I open the door" }
    ],
    body: [
        { spanish: ["Tengo", "dos", "ojos"], english: "I have two eyes" },
        { spanish: ["Mis", "manos", "son", "pequeñas"], english: "My hands are small" },
        { spanish: ["La", "cabeza", "me", "duele"], english: "My head hurts" },
        { spanish: ["Corro", "con", "mis", "piernas"], english: "I run with my legs" }
    ],
    family: [
        { spanish: ["Mi", "mamá", "es", "bonita"], english: "My mom is pretty" },
        { spanish: ["Amo", "a", "mi", "familia"], english: "I love my family" },
        { spanish: ["Mi", "hermano", "juega", "conmigo"], english: "My brother plays with me" },
        { spanish: ["La", "abuela", "cocina", "bien"], english: "Grandma cooks well" }
    ],
    food: [
        { spanish: ["Como", "pan", "con", "queso"], english: "I eat bread with cheese" },
        { spanish: ["Me", "gusta", "la", "pizza"], english: "I like pizza" },
        { spanish: ["Bebo", "leche", "todos", "los", "días"], english: "I drink milk every day" },
        { spanish: ["El", "helado", "es", "delicioso"], english: "Ice cream is delicious" }
    ],
    actions: [
        { spanish: ["Me", "gusta", "correr"], english: "I like to run" },
        { spanish: ["Puedo", "saltar", "alto"], english: "I can jump high" },
        { spanish: ["Leo", "un", "libro"], english: "I read a book" },
        { spanish: ["Ella", "canta", "bien"], english: "She sings well" }
    ],
    weather: [
        { spanish: ["Hoy", "hace", "sol"], english: "It's sunny today" },
        { spanish: ["Está", "lloviendo", "mucho"], english: "It's raining a lot" },
        { spanish: ["Hace", "frío", "hoy"], english: "It's cold today" },
        { spanish: ["Me", "gusta", "la", "nieve"], english: "I like the snow" }
    ]
};

// Sentence builder state
let sentenceState = {
    currentSentence: null,
    userSentence: [],
    score: 0,
    round: 0,
    totalRounds: 5
};

function startSentenceGame() {
    sentenceState.score = 0;
    sentenceState.round = 0;
    sentenceState.totalRounds = 5;
    sentenceState.userSentence = [];

    updateSentenceScore();
    showScreen('sentence');
    nextSentenceRound();
}

function nextSentenceRound() {
    if (sentenceState.round >= sentenceState.totalRounds) {
        endSentenceGame();
        return;
    }

    const sentences = SENTENCE_DATA[gameState.currentCategory] || SENTENCE_DATA.animals;
    sentenceState.currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
    sentenceState.userSentence = [];

    // Display target sentence in English
    const targetEl = document.getElementById('sentence-target');
    targetEl.innerHTML = `
        <div class="english-guide">Build this sentence in Spanish:</div>
        <h2>${sentenceState.currentSentence.english}</h2>
    `;

    // Clear drop zone
    const dropZone = document.getElementById('sentence-drop-zone');
    dropZone.innerHTML = '<p class="drop-zone-hint">Tap words below to build the sentence</p>';

    // Create shuffled word bank
    const wordBank = document.getElementById('sentence-word-bank');
    wordBank.innerHTML = '';

    const words = [...sentenceState.currentSentence.spanish];
    words.sort(() => Math.random() - 0.5);

    words.forEach((word, index) => {
        const wordBtn = document.createElement('button');
        wordBtn.className = 'word-tile';
        wordBtn.textContent = word;
        wordBtn.dataset.word = word;
        wordBtn.dataset.index = index;
        wordBtn.addEventListener('click', () => addWordToSentence(word, wordBtn));
        wordBank.appendChild(wordBtn);
    });

    // Speak the English sentence
    speak(sentenceState.currentSentence.english, "en-US");
}

function addWordToSentence(word, buttonEl) {
    if (buttonEl.classList.contains('used')) return;

    buttonEl.classList.add('used');
    sentenceState.userSentence.push(word);

    // Update drop zone
    const dropZone = document.getElementById('sentence-drop-zone');
    dropZone.innerHTML = '';

    sentenceState.userSentence.forEach((w, idx) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'dropped-word';
        wordSpan.textContent = w;
        wordSpan.addEventListener('click', () => removeWordFromSentence(idx));
        dropZone.appendChild(wordSpan);
    });

    // Speak the word
    speak(word, "es-ES");
}

function removeWordFromSentence(index) {
    const removedWord = sentenceState.userSentence[index];
    sentenceState.userSentence.splice(index, 1);

    // Update drop zone
    const dropZone = document.getElementById('sentence-drop-zone');
    dropZone.innerHTML = '';

    if (sentenceState.userSentence.length === 0) {
        dropZone.innerHTML = '<p class="drop-zone-hint">Tap words below to build the sentence</p>';
    } else {
        sentenceState.userSentence.forEach((w, idx) => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'dropped-word';
            wordSpan.textContent = w;
            wordSpan.addEventListener('click', () => removeWordFromSentence(idx));
            dropZone.appendChild(wordSpan);
        });
    }

    // Re-enable the button in word bank
    const wordBank = document.getElementById('sentence-word-bank');
    const buttons = wordBank.querySelectorAll('.word-tile');
    buttons.forEach(btn => {
        if (btn.textContent === removedWord && btn.classList.contains('used')) {
            btn.classList.remove('used');
            return;
        }
    });
}

// Check sentence button
document.getElementById('sentence-check-btn').addEventListener('click', checkSentence);

function checkSentence() {
    const correctSentence = sentenceState.currentSentence.spanish.join(' ');
    const userSentence = sentenceState.userSentence.join(' ');

    if (userSentence === correctSentence) {
        // Correct!
        sentenceState.score++;
        sentenceState.round++;
        playSuccessSound();

        const dropZone = document.getElementById('sentence-drop-zone');
        dropZone.classList.add('correct');

        speak(`¡Perfecto! ${correctSentence}`, "es-ES", () => {
            setTimeout(() => {
                dropZone.classList.remove('correct');
                nextSentenceRound();
            }, 1000);
        });
    } else {
        // Incorrect
        playErrorSound();

        const dropZone = document.getElementById('sentence-drop-zone');
        dropZone.classList.add('wrong');

        speak("Inténtalo de nuevo", "es-ES");

        setTimeout(() => {
            dropZone.classList.remove('wrong');
        }, 800);
    }

    updateSentenceScore();
}

function updateSentenceScore() {
    document.getElementById('sentence-score-display').textContent = sentenceState.score;
}

function endSentenceGame() {
    playerProgress.totalStars += sentenceState.score * 2; // Award 2 stars per correct sentence
    saveProgress();

    document.getElementById('final-score-val').textContent = sentenceState.score * 2;
    document.getElementById('final-streak-val').textContent = sentenceState.score;

    speak(`¡Excelente! Completaste ${sentenceState.score} oraciones correctamente.`, "es-ES");
    showScreen('result');
}

// ======== PICTURE PUZZLE GAME ========
// Puzzle game state
let puzzleState = {
    targetWord: null,
    revealedPieces: [],
    totalPieces: 9,
    score: 0,
    questionsAsked: 0,
    imageUrl: null
};

function startPuzzleGame() {
    puzzleState.revealedPieces = [];
    puzzleState.score = 0;
    puzzleState.questionsAsked = 0;
    puzzleState.totalPieces = 9;

    const items = GAME_DATA[gameState.currentCategory];
    puzzleState.targetWord = items[Math.floor(Math.random() * items.length)];

    updatePuzzleScore();
    showScreen('puzzle');

    // Load the target image first, then start the game
    loadPuzzleImage();
}

async function loadPuzzleImage() {
    // Request larger image for puzzle (400x400)
    const imageUrl = await getImageForWord(puzzleState.targetWord.name, puzzleState.targetWord.english, true);
    puzzleState.imageUrl = imageUrl || null;

    renderPuzzleBoard();
    nextPuzzleQuestion();
}

function renderPuzzleBoard() {
    const container = document.getElementById('puzzle-image-container');
    container.innerHTML = '';
    container.style.position = 'relative';
    container.style.width = '300px';
    container.style.height = '300px';
    container.style.margin = '0 auto';

    // Create the hidden image
    const img = document.createElement('div');
    img.className = 'puzzle-hidden-image';

    if (puzzleState.imageUrl) {
        img.style.backgroundImage = `url(${puzzleState.imageUrl})`;
        img.style.backgroundSize = 'cover';
        img.style.backgroundPosition = 'center';
    } else {
        img.innerHTML = `<span class="puzzle-emoji">${puzzleState.targetWord.emoji}</span>`;
        img.style.display = 'flex';
        img.style.alignItems = 'center';
        img.style.justifyContent = 'center';
        img.style.fontSize = '120px';
    }

    container.appendChild(img);

    // Position classes for jigsaw shapes
    const positionClasses = [
        'top-left', 'top-center', 'top-right',
        'middle-left', 'middle-center', 'middle-right',
        'bottom-left', 'bottom-center', 'bottom-right'
    ];

    // Create 9 puzzle pieces (3x3 grid) as covers over the background image
    for (let i = 0; i < puzzleState.totalPieces; i++) {
        const piece = document.createElement('div');
        piece.className = `puzzle-piece ${positionClasses[i]}`;
        piece.dataset.index = i;

        const row = Math.floor(i / 3);
        const col = i % 3;
        piece.style.top = `${row * 33.33}%`;
        piece.style.left = `${col * 33.33}%`;

        // Mark if we have an image (for styling purposes)
        if (puzzleState.imageUrl) {
            piece.setAttribute('data-has-image', 'true');
        } else {
            piece.setAttribute('data-has-image', 'false');
        }

        if (puzzleState.revealedPieces.includes(i)) {
            piece.classList.add('revealed');
        }

        container.appendChild(piece);
    }
}

function nextPuzzleQuestion() {
    if (puzzleState.revealedPieces.length >= puzzleState.totalPieces) {
        endPuzzleGame();
        return;
    }

    const items = GAME_DATA[gameState.currentCategory];
    const correctItem = items[Math.floor(Math.random() * items.length)];

    // Create question
    const questionEl = document.getElementById('puzzle-question');
    questionEl.innerHTML = `
        <div class="english-guide">Which one is...</div>
        <h2>${correctItem.article} ${correctItem.name}</h2>
        <p class="english-hint">${correctItem.english}</p>
    `;

    // Create options
    const options = [correctItem];
    while (options.length < 4) {
        const randomItem = items[Math.floor(Math.random() * items.length)];
        if (!options.find(opt => opt.name === randomItem.name)) {
            options.push(randomItem);
        }
    }
    options.sort(() => Math.random() - 0.5);

    const optionsContainer = document.getElementById('puzzle-options');
    optionsContainer.innerHTML = '';

    options.forEach(async (item) => {
        const btn = document.createElement('button');
        btn.className = 'puzzle-option-btn';
        btn.innerHTML = `<span class="emoji">${item.emoji}</span><span>${item.name}</span>`;
        btn.addEventListener('click', () => handlePuzzleAnswer(item, correctItem, btn));
        optionsContainer.appendChild(btn);

        // Try to load image
        const imageUrl = await getImageForWord(item.name, item.english);
        if (imageUrl) {
            btn.innerHTML = `<img src="${imageUrl}" alt="${item.name}" class="option-img"><span>${item.name}</span>`;
        }
    });

    // Speak the question
    speak(`${correctItem.article} ${correctItem.name}`, "es-ES");
}

function handlePuzzleAnswer(chosenItem, correctItem, btnEl) {
    if (btnEl.classList.contains('correct') || btnEl.classList.contains('wrong')) return;

    if (chosenItem.name === correctItem.name) {
        btnEl.classList.add('correct');
        puzzleState.score++;
        puzzleState.questionsAsked++;

        // Reveal a random unrevealed piece
        const unrevealedPieces = [];
        for (let i = 0; i < puzzleState.totalPieces; i++) {
            if (!puzzleState.revealedPieces.includes(i)) {
                unrevealedPieces.push(i);
            }
        }

        if (unrevealedPieces.length > 0) {
            const randomIndex = unrevealedPieces[Math.floor(Math.random() * unrevealedPieces.length)];
            puzzleState.revealedPieces.push(randomIndex);

            // Animate the reveal
            const piece = document.querySelector(`.puzzle-piece[data-index="${randomIndex}"]`);
            if (piece) {
                piece.classList.add('revealed');
            }
        }

        updatePuzzleScore();
        playSuccessSound();
        speak("¡Correcto!", "es-ES", () => {
            setTimeout(() => {
                nextPuzzleQuestion();
            }, 800);
        });
    } else {
        btnEl.classList.add('wrong');
        puzzleState.questionsAsked++;
        playErrorSound();
        speak("Inténtalo de nuevo", "es-ES");

        setTimeout(() => {
            btnEl.classList.remove('wrong');
        }, 800);
    }
}

function updatePuzzleScore() {
    document.getElementById('puzzle-score-display').textContent = puzzleState.score;
    document.getElementById('puzzle-pieces-display').textContent =
        `${puzzleState.revealedPieces.length}/${puzzleState.totalPieces}`;
}

function endPuzzleGame() {
    playerProgress.totalStars += puzzleState.score;
    saveProgress();

    // Show the complete image briefly
    const pieces = document.querySelectorAll('.puzzle-piece');
    pieces.forEach(piece => piece.classList.add('revealed'));

    speak(`¡Felicidades! Completaste el rompecabezas. Era ${puzzleState.targetWord.article} ${puzzleState.targetWord.name}.`, "es-ES", () => {
        setTimeout(() => {
            document.getElementById('final-score-val').textContent = puzzleState.score;
            document.getElementById('final-streak-val').textContent = puzzleState.questionsAsked;
            showScreen('result');
        }, 2000);
    });
}

// ======== STORY MODE GAME ========
// Story data for each category
const STORY_DATA = {
    animals: {
        title: "Aventura en el Zoológico",
        emoji: "🦁",
        nodes: {
            start: {
                text: "Estás en el zoológico. Ves dos caminos.",
                english: "You're at the zoo. You see two paths.",
                choices: [
                    { text: "Ir a ver los leones", english: "Go see the lions", next: "lions", word: "león" },
                    { text: "Ir a ver los monos", english: "Go see the monkeys", next: "monkeys", word: "mono" }
                ]
            },
            lions: {
                text: "¡El león es grande y fuerte! ¿Qué haces?",
                english: "The lion is big and strong! What do you do?",
                choices: [
                    { text: "Saludar al león", english: "Wave at the lion", next: "lion_wave", word: "león" },
                    { text: "Ver otros animales", english: "See other animals", next: "elephants", word: "elefante" }
                ]
            },
            monkeys: {
                text: "Los monos saltan y juegan. ¡Qué divertido!",
                english: "The monkeys jump and play. How fun!",
                choices: [
                    { text: "Ver las aves", english: "See the birds", next: "birds", word: "pájaro" },
                    { text: "Buscar más monos", english: "Look for more monkeys", next: "end_happy", word: "mono" }
                ]
            },
            elephants: {
                text: "El elefante bebe agua. Es muy grande.",
                english: "The elephant drinks water. It's very big.",
                choices: [
                    { text: "Ver la jirafa", english: "See the giraffe", next: "end_happy", word: "jirafa" },
                    { text: "Regresar", english: "Go back", next: "start", word: "volver" }
                ]
            },
            birds: {
                text: "Los pájaros cantan bonitas canciones.",
                english: "The birds sing beautiful songs.",
                choices: [
                    { text: "Terminar el paseo", english: "End the walk", next: "end_happy", word: "fin" }
                ]
            },
            lion_wave: {
                text: "El león te mira y ruge. ¡Qué emocionante!",
                english: "The lion looks at you and roars. How exciting!",
                choices: [
                    { text: "Continuar explorando", english: "Continue exploring", next: "end_happy", word: "continuar" }
                ]
            },
            end_happy: {
                text: "¡Tuviste un día maravilloso en el zoológico! 🎉",
                english: "You had a wonderful day at the zoo! 🎉",
                choices: []
            }
        }
    },
    colors: {
        title: "El Mundo de Colores",
        emoji: "🎨",
        nodes: {
            start: {
                text: "Encuentras una caja mágica de pinturas. ¿Qué color eliges?",
                english: "You find a magic paint box. Which color do you choose?",
                choices: [
                    { text: "Rojo", english: "Red", next: "red", word: "rojo" },
                    { text: "Azul", english: "Blue", next: "blue", word: "azul" }
                ]
            },
            red: {
                text: "El rojo pinta un hermoso corazón.",
                english: "Red paints a beautiful heart.",
                choices: [
                    { text: "Añadir amarillo", english: "Add yellow", next: "orange", word: "amarillo" },
                    { text: "Continuar con rojo", english: "Continue with red", next: "end_happy", word: "rojo" }
                ]
            },
            blue: {
                text: "El azul pinta el cielo y el mar.",
                english: "Blue paints the sky and sea.",
                choices: [
                    { text: "Añadir verde", english: "Add green", next: "end_happy", word: "verde" },
                    { text: "Añadir amarillo", english: "Add yellow", next: "green", word: "amarillo" }
                ]
            },
            orange: {
                text: "¡Rojo y amarillo hacen naranja! Como el sol.",
                english: "Red and yellow make orange! Like the sun.",
                choices: [
                    { text: "Terminar la pintura", english: "Finish painting", next: "end_happy", word: "fin" }
                ]
            },
            green: {
                text: "¡Azul y amarillo hacen verde! Como los árboles.",
                english: "Blue and yellow make green! Like trees.",
                choices: [
                    { text: "Crear más colores", english: "Create more colors", next: "end_happy", word: "más" }
                ]
            },
            end_happy: {
                text: "¡Creaste una obra de arte hermosa! 🎨",
                english: "You created a beautiful work of art! 🎨",
                choices: []
            }
        }
    },
    fruits: {
        title: "El Mercado de Frutas",
        emoji: "🍎",
        nodes: {
            start: {
                text: "Estás en el mercado de frutas. ¿Qué compras?",
                english: "You're at the fruit market. What do you buy?",
                choices: [
                    { text: "Una manzana roja", english: "A red apple", next: "apple", word: "manzana" },
                    { text: "Un plátano amarillo", english: "A yellow banana", next: "banana", word: "plátano" }
                ]
            },
            apple: {
                text: "La manzana es deliciosa y crujiente.",
                english: "The apple is delicious and crunchy.",
                choices: [
                    { text: "Comprar fresas", english: "Buy strawberries", next: "strawberry", word: "fresa" },
                    { text: "Ir a casa", english: "Go home", next: "end_happy", word: "casa" }
                ]
            },
            banana: {
                text: "El plátano es dulce y amarillo.",
                english: "The banana is sweet and yellow.",
                choices: [
                    { text: "Comprar uvas", english: "Buy grapes", next: "grapes", word: "uva" },
                    { text: "Comprar naranja", english: "Buy orange", next: "end_happy", word: "naranja" }
                ]
            },
            strawberry: {
                text: "Las fresas son pequeñas y rojas. ¡Deliciosas!",
                english: "The strawberries are small and red. Delicious!",
                choices: [
                    { text: "Hacer jugo", english: "Make juice", next: "end_happy", word: "jugo" }
                ]
            },
            grapes: {
                text: "Las uvas son verdes y dulces.",
                english: "The grapes are green and sweet.",
                choices: [
                    { text: "Llevarlas a casa", english: "Take them home", next: "end_happy", word: "llevar" }
                ]
            },
            end_happy: {
                text: "¡Disfrutaste un día delicioso con frutas! 🍓",
                english: "You enjoyed a delicious day with fruits! 🍓",
                choices: []
            }
        }
    }
};

// Story state
let storyState = {
    currentNode: 'start',
    score: 0,
    nodesVisited: [],
    currentStory: null
};

function startStoryGame() {
    storyState.currentNode = 'start';
    storyState.score = 0;
    storyState.nodesVisited = [];

    // Get story for category, fallback to animals if not available
    storyState.currentStory = STORY_DATA[gameState.currentCategory] || STORY_DATA.animals;

    updateStoryScore();
    showScreen('story');
    renderStoryNode();
}

function renderStoryNode() {
    const node = storyState.currentStory.nodes[storyState.currentNode];

    // Update story image
    const imageEl = document.getElementById('story-image');
    imageEl.innerHTML = `<div class="story-emoji">${storyState.currentStory.emoji}</div>`;

    // Update story text
    const textEl = document.getElementById('story-text');
    textEl.innerHTML = `
        <div class="story-spanish">${node.text}</div>
        <div class="story-english">${node.english}</div>
    `;

    // Speak the Spanish text
    speak(node.text, "es-ES");

    // Update choices
    const choicesEl = document.getElementById('story-choices');
    choicesEl.innerHTML = '';

    if (node.choices.length === 0) {
        // End of story
        setTimeout(() => {
            endStoryGame();
        }, 2000);
        return;
    }

    node.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'story-choice-btn';
        btn.innerHTML = `
            <div class="choice-spanish">${choice.text}</div>
            <div class="choice-english">${choice.english}</div>
        `;
        btn.addEventListener('click', () => handleStoryChoice(choice));
        choicesEl.appendChild(btn);
    });
}

function handleStoryChoice(choice) {
    storyState.score++;
    storyState.nodesVisited.push(storyState.currentNode);
    storyState.currentNode = choice.next;

    updateStoryScore();

    // Speak the choice
    speak(choice.text, "es-ES", () => {
        setTimeout(() => {
            renderStoryNode();
        }, 300);
    });
}

function updateStoryScore() {
    document.getElementById('story-score-display').textContent = storyState.score;
}

function endStoryGame() {
    playerProgress.totalStars += storyState.score * 2;
    saveProgress();

    document.getElementById('final-score-val').textContent = storyState.score * 2;
    document.getElementById('final-streak-val').textContent = storyState.nodesVisited.length;

    speak("¡Felicidades! Completaste la aventura.", "es-ES");
    showScreen('result');
}

// ======== MATCHING GAME (CONNECT LINES) ========
// Matching game state
let matchingState = {
    items: [],
    connections: [],
    selectedLeft: null,
    selectedRight: null,
    matchedPairs: 0,
    score: 0,
    canvas: null,
    ctx: null
};

function startMatchingGame() {
    matchingState.connections = [];
    matchingState.selectedLeft = null;
    matchingState.selectedRight = null;
    matchingState.matchedPairs = 0;
    matchingState.score = 0;

    const categoryItems = GAME_DATA[gameState.currentCategory];
    // Select 6 random items for matching
    const shuffled = [...categoryItems].sort(() => Math.random() - 0.5);
    matchingState.items = shuffled.slice(0, 6);

    updateMatchingScore();
    showScreen('matching');

    // Setup canvas
    const canvas = document.getElementById('matching-canvas');
    matchingState.canvas = canvas;
    matchingState.ctx = canvas.getContext('2d');

    renderMatchingBoard();

    // Add resize listener to redraw connections
    window.addEventListener('resize', () => {
        if (matchingState.canvas) {
            setupCanvas();
            drawConnections();
        }
    });

    // Introduce the game
    speak("Une las imágenes con las palabras correctas", "es-ES");
}

async function renderMatchingBoard() {
    const leftColumn = document.getElementById('matching-left-column');
    const rightColumn = document.getElementById('matching-right-column');

    leftColumn.innerHTML = '';
    rightColumn.innerHTML = '';

    // Create shuffled arrays for left (images) and right (words)
    const leftItems = [...matchingState.items];
    const rightItems = [...matchingState.items].sort(() => Math.random() - 0.5);

    // Render left column (images)
    for (let i = 0; i < leftItems.length; i++) {
        const item = leftItems[i];
        const div = document.createElement('div');
        div.className = 'matching-item';
        div.dataset.side = 'left';
        div.dataset.index = i;
        div.dataset.itemId = item.name;

        const imageUrl = await getImageForWord(item.name, item.english);
        if (imageUrl) {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.className = 'matching-item-image';
            img.alt = item.name;
            div.appendChild(img);
        } else {
            const emoji = document.createElement('span');
            emoji.className = 'emoji';
            emoji.textContent = item.emoji;
            div.appendChild(emoji);
        }

        div.addEventListener('click', () => handleMatchingClick('left', i, item.name));
        leftColumn.appendChild(div);
    }

    // Render right column (words)
    for (let i = 0; i < rightItems.length; i++) {
        const item = rightItems[i];
        const div = document.createElement('div');
        div.className = 'matching-item';
        div.dataset.side = 'right';
        div.dataset.index = i;
        div.dataset.itemId = item.name;

        const word = document.createElement('span');
        word.className = 'matching-item-word';
        word.textContent = item.name;
        div.appendChild(word);

        div.addEventListener('click', () => handleMatchingClick('right', i, item.name));
        rightColumn.appendChild(div);
    }

    // Setup canvas size after a short delay to ensure DOM is ready
    setTimeout(() => {
        setupCanvas();
        drawConnections();
    }, 100);
}

function setupCanvas() {
    const container = document.querySelector('.matching-container');
    const canvas = matchingState.canvas;

    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    canvas.style.width = container.offsetWidth + 'px';
    canvas.style.height = container.offsetHeight + 'px';
}

function handleMatchingClick(side, index, itemId) {
    const element = document.querySelector(`.matching-item[data-side="${side}"][data-index="${index}"]`);

    // Don't allow clicking already matched items
    if (element.classList.contains('matched')) return;

    if (side === 'left') {
        // Clear previous left selection
        document.querySelectorAll('.matching-item[data-side="left"]').forEach(el => {
            el.classList.remove('selected');
        });

        matchingState.selectedLeft = { index, itemId, element };
        element.classList.add('selected');

        // Speak the Spanish word when image is clicked
        speak(itemId, "es-ES");
    } else {
        // Clear previous right selection
        document.querySelectorAll('.matching-item[data-side="right"]').forEach(el => {
            el.classList.remove('selected');
        });

        matchingState.selectedRight = { index, itemId, element };
        element.classList.add('selected');

        // Speak the Spanish word when word is clicked
        speak(itemId, "es-ES");
    }

    // If both sides selected, create connection
    if (matchingState.selectedLeft && matchingState.selectedRight) {
        createConnection();
    }
}

function createConnection() {
    const left = matchingState.selectedLeft;
    const right = matchingState.selectedRight;

    // Check if already connected
    const existingConnection = matchingState.connections.find(
        conn => conn.leftIndex === left.index && conn.rightIndex === right.index
    );

    if (!existingConnection) {
        matchingState.connections.push({
            leftIndex: left.index,
            rightIndex: right.index,
            leftItemId: left.itemId,
            rightItemId: right.itemId,
            isCorrect: left.itemId === right.itemId
        });

        // Mark items as connected
        left.element.classList.add('connected');
        right.element.classList.add('connected');

        drawConnections();
    }

    // Clear selections
    document.querySelectorAll('.matching-item').forEach(el => {
        el.classList.remove('selected');
    });
    matchingState.selectedLeft = null;
    matchingState.selectedRight = null;
}

function drawConnections() {
    const ctx = matchingState.ctx;
    const canvas = matchingState.canvas;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    matchingState.connections.forEach(conn => {
        const leftEl = document.querySelector(`.matching-item[data-side="left"][data-index="${conn.leftIndex}"]`);
        const rightEl = document.querySelector(`.matching-item[data-side="right"][data-index="${conn.rightIndex}"]`);

        if (!leftEl || !rightEl) return;

        const leftRect = leftEl.getBoundingClientRect();
        const rightRect = rightEl.getBoundingClientRect();
        const containerRect = canvas.getBoundingClientRect();

        const x1 = leftRect.right - containerRect.left;
        const y1 = leftRect.top + leftRect.height / 2 - containerRect.top;
        const x2 = rightRect.left - containerRect.left;
        const y2 = rightRect.top + rightRect.height / 2 - containerRect.top;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = 4;
        ctx.strokeStyle = conn.isCorrect ? '#6BCF7F' : '#FF6B6B';
        ctx.lineCap = 'round';
        ctx.stroke();
    });
}

// Check and clear buttons
document.getElementById('matching-check-btn').addEventListener('click', checkMatchingAnswers);
document.getElementById('matching-clear-btn').addEventListener('click', clearMatchingConnections);
document.getElementById('matching-undo-btn').addEventListener('click', undoLastConnection);

function undoLastConnection() {
    if (matchingState.connections.length === 0) {
        speak("No hay líneas para borrar", "es-ES");
        return;
    }

    const lastConnection = matchingState.connections.pop();

    const leftEl = document.querySelector(`.matching-item[data-side="left"][data-index="${lastConnection.leftIndex}"]`);
    const rightEl = document.querySelector(`.matching-item[data-side="right"][data-index="${lastConnection.rightIndex}"]`);

    if (leftEl) leftEl.classList.remove('connected');
    if (rightEl) rightEl.classList.remove('connected');

    drawConnections();
    speak("Última línea borrada", "es-ES");
}

function clearMatchingConnections() {
    // Clear all connections
    matchingState.connections = [];
    matchingState.selectedLeft = null;
    matchingState.selectedRight = null;

    // Remove all state classes
    document.querySelectorAll('.matching-item').forEach(el => {
        el.classList.remove('selected', 'matched', 'wrong', 'connected');
    });

    // Clear canvas
    if (matchingState.ctx && matchingState.canvas) {
        matchingState.ctx.clearRect(0, 0, matchingState.canvas.width, matchingState.canvas.height);
    }

    speak("Líneas borradas", "es-ES");
}

function checkMatchingAnswers() {
    if (matchingState.connections.length !== matchingState.items.length) {
        speak("Conecta todas las parejas", "es-ES");
        return;
    }

    let correctCount = 0;
    matchingState.connections.forEach(conn => {
        const leftEl = document.querySelector(`.matching-item[data-side="left"][data-index="${conn.leftIndex}"]`);
        const rightEl = document.querySelector(`.matching-item[data-side="right"][data-index="${conn.rightIndex}"]`);

        if (conn.isCorrect) {
            correctCount++;
            leftEl.classList.remove('connected');
            leftEl.classList.add('matched');
            rightEl.classList.remove('connected');
            rightEl.classList.add('matched');
        } else {
            leftEl.classList.add('wrong');
            rightEl.classList.add('wrong');

            setTimeout(() => {
                leftEl.classList.remove('wrong', 'connected');
                rightEl.classList.remove('wrong', 'connected');
            }, 800);
        }
    });

    matchingState.score = correctCount;
    matchingState.matchedPairs = correctCount;
    updateMatchingScore();

    if (correctCount === matchingState.items.length) {
        playSuccessSound();
        speak("¡Perfecto! Todas las conexiones son correctas.", "es-ES", () => {
            setTimeout(() => {
                endMatchingGame();
            }, 1500);
        });
    } else {
        playErrorSound();
        speak(`Tienes ${correctCount} correctas. Intenta de nuevo.`, "es-ES");

        // Remove incorrect connections
        matchingState.connections = matchingState.connections.filter(conn => conn.isCorrect);
        drawConnections();
    }
}

function updateMatchingScore() {
    document.getElementById('matching-score-display').textContent = matchingState.score;
    document.getElementById('matching-pairs-display').textContent =
        `${matchingState.matchedPairs}/${matchingState.items.length}`;
}

function endMatchingGame() {
    playerProgress.totalStars += matchingState.score * 2;
    saveProgress();

    document.getElementById('final-score-val').textContent = matchingState.score * 2;
    document.getElementById('final-streak-val').textContent = matchingState.matchedPairs;

    speak("¡Felicidades! Completaste el juego de conexiones.", "es-ES");
    showScreen('result');
}

function resetGame() {
    gameState.score = 0;
    gameState.currentRound = 0;
    gameState.streak = 0;
    gameState.errors = 0;
    gameState.missedWords = [];
    memoryState = {
        cards: [],
        flippedCards: [],
        matchedPairs: 0,
        moves: 0
    };
    sentenceState = {
        currentSentence: null,
        userSentence: [],
        score: 0,
        round: 0,
        totalRounds: 5
    };
    puzzleState = {
        targetWord: null,
        revealedPieces: [],
        totalPieces: 9,
        score: 0,
        questionsAsked: 0,
        imageUrl: null
    };
    storyState = {
        currentNode: 'start',
        score: 0,
        nodesVisited: [],
        currentStory: null
    };
    matchingState = {
        items: [],
        connections: [],
        selectedLeft: null,
        selectedRight: null,
        matchedPairs: 0,
        score: 0,
        canvas: null,
        ctx: null
    };
}

// Initialize voices
if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
}
// Also try loading immediately (some browsers need this)
loadVoices();

// Initialize
loadProgress();
loadImageCache();
