const snippets = [
    { text: "Hola, ¿cómo estás? ¿Puedes adivinarme? No es tan difícil.", language: "Spanish" },
    { text: "Bonjour, comment ça va? Pouvez-vous me deviner? Ce n'est pas si difficile.", language: "French" },
    { text: "Hallo, wie geht's? Kannst du mich erraten? Es ist nicht so schwer.", language: "German" },
    { text: "Ciao, come stai? Puoi indovinarmi? Non è così difficile.", language: "Italian" },
    { text: "こんにちは、お元気ですか？ 私を当てることができますか？ それほど難しくありません。", language: "Japanese" },
    { text: "안녕하세요, 어떻게 지내세요? 저를 맞출 수 있나요? 그렇게 어렵지 않아요.", language: "Korean" },
    { text: "你好，你好吗？ 你能猜到我吗？ 这不太难。", language: "Chinese" },
    { text: "Привет, как дела? Ты можешь меня угадать? Это не так сложно.", language: "Russian" },
    { text: "مرحبا، كيف حالك؟ هل تستطيع تخمين من أنا؟ ليس من الصعب جدا.", language: "Arabic" },
    { text: "Hej, hur mår du? Kan du gissa mig? Det är inte så svårt.", language: "Swedish" },
    { text: "Olá, como você está? Você consegue me adivinhar? Não é tão difícil.", language: "Portuguese" },
    { text: "Γειά, πώς είσαι; Μπορείς να με μαντέψεις; Δεν είναι τόσο δύσκολο.", language: "Greek" },
    { text: "Hej, hvordan har du det? Kan du gætte mig? Det er ikke så svært.", language: "Danish" },
    { text: "Hallo, hoe gaat het? Kun je me raden? Het is niet zo moeilijk.", language: "Dutch" },
    { text: "Hei, hvordan går det? Kan du gjette meg? Det er ikke så vanskelig.", language: "Norwegian" },
    { text: "Halo, apa kabar? Bisakah Anda menebak saya? Ini tidak terlalu sulit.", language: "Indonesian" },
    { text: "Salut, ce faci? Poți să mă ghicești? Nu e atât de greu.", language: "Romanian" },
    { text: "สวัสดีคุณเป็นอย่างไรบ้าง? คุณสามารถทายฉันได้ไหม? มันไม่ยากขนาดนั้น.", language: "Thai" },
    { text: "नमस्ते, आप कैसे हैं? क्या आप मुझे पहचान सकते हैं? यह इतना मुश्किल नहीं है।", language: "Hindi" },
    { text: "Merhaba, nasılsın? Beni tahmin edebilir misin? Çok zor değil.", language: "Turkish" },
    { text: "Բարև, ինչպե՞ս ես: Կարո՞ղ ես ինձ գուշակել: Դա այնքան էլ դժվար չէ:", language: "Armenian" },
    { text: "Здраво, како си? Можеш ли да ме погодиш? Не е толку тешко.", language: "Serbian" },
    { text: "Здравей, как си? Можеш ли да ме познаеш? Не е толкова трудно.", language: "Bulgarian" },
    { text: "გამარჯობა, როგორ ხარ? შეგიძლია გამიცნო? ასე რთული არ არის.", language: "Georgian" },
    { text: "Ahoj, jak se máš? Můžeš mě uhodnout? Není to tak těžké.", language: "Czech" },
    { text: "Szia, hogy vagy? Meg tudsz engem találni? Nem olyan nehéz.", language: "Hungarian" },
    { text: "Sveiki, kā jums klājas? Vai jūs varat mani uzminēt? Tas nav tik grūti.", language: "Latvian" },
    { text: "Sveiki, kaip sekasi? Ar galite mane atspėti? Tai nėra taip sunku.", language: "Lithuanian" },
    { text: "Siema, jak tam? Uda ci się mnie odgadnąć? To nie takie trudne, serio.", language: "Polish" },
    { text: "Привіт, як справи? Ти можеш мене відгадати? Це не так складно.", language: "Ukrainian" },
    { text: "שלום, מה שלומך? אתה יכול לנחש אותי? זה לא כל כך קשה.", language: "Hebrew" },
    { text: "Apa khabar, bagaimana? Bolehkah anda meneka saya? Ia tidak begitu sukar.", language: "Malay" },
    { text: "Góðan dag, hvernig hefurðu það? Geturðu giskað á mig? Það er ekki svo erfitt.", language: "Icelandic" },
    { text: "Сәлем, қалайсың? Мені таба аласың ба? Бұл соншалықты қиын емес.", language: "Kazakh" },
    { text: "Zdravo, kako si? Možeš li da me pogodiš? Nije tako teško.", language: "Bosnian" },
    { text: "Sveiki, kā jums klājas? Vai jūs varat mani uzminēt? Tas nav tik grūti.", language: "Latvian" },
    { text: "Tere, kuidas sul läheb? Kas sa saad mind ära arvata? See ei ole nii raske.", language: "Estonian" },
    { text: "Hei, miten voit? Voitko arvata minut? Se ei ole niin vaikeaa.", language: "Finnish" },
    { text: "Romanes, kova si? Poți să mă ghicești? Nu e atât de greu.", language: "Romansh" },
    { text: "Ahoj ako sa máš? Uhádneš ma? Je to ľahké kokot.", language: "Slovak" },
    { text: "Živjo, kako si? Ali me lahko uganeš? Ni tako težko.", language: "Slovenian" },
    { text: "Kumusta, paano ka? Mahulaan mo ba ako? Hindi naman ganun kahirap.", language: "Tagalog" },
    { text: "Salom, qandaysiz? Meni topa olasizmi? Bu qadar qiyin emas.", language: "Uzbek" },
    { text: "Përshëndetje, si jeni? Mund të më gjesh? Nuk është aq e vështirë.", language: "Albanian" },
    { text: "Salute cumu stai? Pudete indovinà mi ? Ùn hè micca cusì difficiule.", language: "Corsican" },
    { text: "Kaixo, nola zaude? Niri asmatu dezakezu? Ez da hain zaila.", language: "Basque" },
    { text: "Прывітанне, як справы? Ці можаш ты мяне адгадаць? Гэта не так складана.", language: "Belarusian" },
    { text: "Sannu, yaya? Za ka iya tantance ni? Ba mai wahala ba.", language: "Hausa" },
    { text: "Habari, hujambo? Unaweza kunikisia? Sio ngumu sana.", language: "Swahili" },
    { text: "Dia duit, conas atá tú? An féidir leat mé a thomhas? Níl sé chomh deacair sin.", language: "Irish" },
    { text: "Hola, com estàs? Pots endevinar-me? No és tan difícil.", language: "Catalan" },
    { text: "Ẹ n lẹ, bawo ni? Ṣe o le sọ mi? Kò nira tó.", language: "Yoruba" },
    { text: "Salve, quid agis? Potesne me coniectare? Non est ita difficile.", language: "Latin" },
    { text: "नमस्कार, तपाईंलाई कस्तो छ? तपाईं मलाई अन्दाज गर्न सक्नुहुन्छ? यो त्यति कठिन छैन।", language: "Nepali" },
    { text: "Romanes, kova si? Poți să mă ghicești? Nu e atât de greu.", language: "Romani" },
    { text: "Xin chào, bạn thế nào? Bạn có đoán được tôi không? Không khó lắm.", language: "Vietnamese" },
    { text: "Sawubona, unjani? Ungakwazi yini ukusibona? Akuyona into enzima.", language: "Zulu" },
    { text: "Dobry dziyń jak sie? Możesz mi przigadnōńć? Niyma to tak ciynżke.", language: "Silesian" },
    { text: "བཀྲ་ཤིས་འདི་ག་ངེས་འདི་ག་ནང་འདུག? ཁྱེད་རང་ངེས་པ་རེད་པས། འདི་འགྲོད་མི་རུལ་པར་འདུག", language: "Tibetan" },
    { text: "Сайн байна уу, сайн уу? Та намайг тааж чадах уу? Энэ тийм ч хэцүү биш.", language: "Mongolian" },
    { text: "Salam necəsən? Məni təxmin edə bilərsən? Bu asandır.", language: "Azeri" },
    { text: "Hello how are you? Can you guess me? It is not so difficult.", language: "English" },
    { text: "Helo sut wyt ti? Allwch chi ddyfalu fi? Nid yw mor anodd.", language: "Welsh" },
    { text: "Allinllachu, imaynallam? ¿Adivinawankimanchu? Manam chayna sasachu, confiaway.", language: "Quechua" },
    { text: "হ্যালো, আপনি কেমন আছেন? আপনি কি আমাকে অনুমান করতে পারেন? এটা এত কঠিন নয়, বিশ্বাস করুন.", language: "Bengali" },
    { text: "Halo, ciamar a tha thu? An urrainn dhut mo bheachdachadh? Chan eil e cho duilich, creid mi.", language: "Scotish" },
    { text: "Witôj, jaczi sã masz? Mòżesz mie zgadnąc? To nie je tak trudné.", language: "Kashubian" },
    { text: "Hallo, Hvussu hevur tú tað? Kanst tú gita meg? Tað er ikki so torført.", language: "Faroese" },
    { text: "សួស្តី, អ្នកសុខសប្បាយជាទេ? អ្នកអាចទាយបានទេ? វាមិនពិបាកទេ.", language: "Khmer" },
    { text: "Салам кандайсың? Мени болжолдой аласызбы? Бул анчалык деле кыйын эмес.", language: "Kyrgyz" },
    { text: "Hûn çawa ne? Hûn dikarin min texmîn bikin? Ew qas ne dijwar e.", language: "Kurdish" },
    { text: "Hello kif int? Tista radenni? Mhuwiex daqshekk diffiċli.", language: "Maltese" },
    { text: "އައްސަލާމް ޢަލައިކުމް ތިބާގެ ޙާލު ކިހިނެތް؟ އަހަރެން ލަފާކޮށްދެވިދާނެތަ؟ އެއާ އުނދަގޫ ކަމެް ނޫނެވެ.", language: "Maldivian" }
];

let currentSnippet = {};
let currentStreak = 0;
let bestStreak = localStorage.getItem('bestStreak') || 0;
let lastLanguage = '';

// Ładowanie dźwięków
const correctSound = new Audio('correct.mp3');
const incorrectSound = new Audio('incorrect.mp3');

// Muzyka w tle (można dodać funkcjonalność do pauzowania lub regulacji głośności w kodzie)
const backgroundMusic = document.getElementById('background-music');

function getRandomSnippet() {
    let randomIndex;
    let newSnippet;
    
    do {
        randomIndex = Math.floor(Math.random() * snippets.length);
        newSnippet = snippets[randomIndex];
    } while (newSnippet.language === lastLanguage);
    
    lastLanguage = newSnippet.language;
    currentSnippet = newSnippet;
    document.getElementById('text-snippet').innerText = currentSnippet.text;
}

function checkGuess() {
    const userGuess = document.getElementById('guess').value.trim().toLowerCase();
    const correctAnswer = currentSnippet.language.toLowerCase();

    if (userGuess === correctAnswer) {
        currentStreak++;
        document.getElementById('result').innerText = "Correct!";
        document.getElementById('result').style.color = "green";
        correctSound.play();
    } else {
        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
            localStorage.setItem('bestStreak', bestStreak); // Zapisz najlepszy streak w pamięci lokalnej
        }
        currentStreak = 0;
        document.getElementById('result').innerHTML = `Incorrect! The correct answer was <strong>${currentSnippet.language}</strong>.`;
        document.getElementById('result').style.color = "red";
        incorrectSound.play();
    }

    updateStreakDisplay();
    document.getElementById('guess').value = '';
    getRandomSnippet();
}

function updateStreakDisplay() {
    document.getElementById('streak').innerHTML = `Current Streak: <strong>${currentStreak}</strong><br>Best Streak: <strong>${bestStreak}</strong>`;
}

// Funkcja do obsługi zdarzenia naciśnięcia klawisza
function handleKeyPress(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
}

// Funkcja do odczytu tekstu
function readText() {
    const utterance = new SpeechSynthesisUtterance(currentSnippet.text);
    utterance.lang = 'en'; // Możesz ustawić język zgodnie z potrzebami
    window.speechSynthesis.speak(utterance);
}

// Ustawienie nasłuchiwacza zdarzeń na pole tekstowe
document.getElementById('guess').addEventListener('keypress', handleKeyPress);

// Ustawienie nasłuchiwacza zdarzeń na przycisk "Read Text"
document.querySelector('button[onclick="readText()"]').addEventListener('click', readText);

// Inicjalizacja
window.onload = () => {
    getRandomSnippet();
    updateStreakDisplay();
};
