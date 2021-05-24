// regExp.test('string')
// test() - метод регулярного выражения, параметром получает строку, возвращает true или false

// Поиск подстроки
let myString = "Hello, World!";
let myRegex = /Hello/; // не соответствует 'hello' или 'HELLO'
// console.log(myRegex.test(myString)); // true

// ИЛИ
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
// console.log(petRegex.test(petString)); // true

// i - флаг, игнорирующий регистр (insensitive)
let myStr = "freeCodeCamp";
let fccRegex = /FrEeCodECamp/i;
// console.log(fccRegex.test(myStr)); // true

// 'string'.match(regExp)
// match() - метод регулярного выражения, интегрирован в строку, параметром получает регулярное выражение, возвращает совпадение:
// - в первый елемент массива или null (если поиск не глобальный);
// - в массив или null (если поиск глобальный )

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
// console.log(extractStr.match(codingRegex)[0]); // coding

// g - флаг глобального поиска (global)
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
// console.log(twinkleStar.match(starRegex)); // [ 'Twinkle', 'twinkle' ]

// . - соответствует одному любому символу
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // соответствие run, sun, fun, pun, nun, bun и т.д.
// console.log(unRegex.test(exampleStr)); // true

// [] - набор символов в квадратных скобках [abc] указывает, что в данном месте в строке может стоять один из перечисленных символов
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
// console.log(bigStr.match(bgRegex)); // big
// console.log(bagStr.match(bgRegex)); // bag
// console.log(bugStr.match(bgRegex)); // bug
// console.log(bogStr.match(bgRegex)); // null

// [a-e] - внутри [] можно определить диапазон символов с помощью символа дефиса
let catStr = "cat";
let batStr = "bat";
let matStr = "zat";
let bRegex = /[a-e]at/;
// console.log(catStr.match(bRegex)); // cat
// console.log(batStr.match(bRegex)); // bat
// console.log(matStr.match(bRegex)); // null

// [a-e0-5] - диапазон символов работает и для чисел
let joStr = "Alex Joe7 Alice3 John";
let myReg = /Jo.[a-z0-9]/gi;
// console.log(joStr.match(myReg)); // [ 'Joe7', 'John' ]

// [^abc] - внутри набора символов, с помощью ^, можно определить диапазон символов, которые нужно исключить из сопоставления
let joeStr = "Joe1 Joe2 Joe3 Joe4 Joe5 JoeA JoeB JoeC JoeD JoeE";
let joeReg = /Joe[^2-4b-d]/gi;
// console.log(joeStr.match(joeReg)); // [ 'Joe1', 'Joe5', 'JoeA', 'JoeE' ]

// Вне набора символов ^ используется для поиска вхождений в начале строк
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
// console.log(firstRegex.test(firstString)); // true
let notFirst = "You can't find Ricky now.";
// console.log(firstRegex.test(notFirst)); // false

// Для поиска вхождений в конце строк - используется $
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
// console.log(storyRegex.test(theEnding)); // true
let noEnding = "Sometimes a story will have to end";
// console.log(storyRegex.test(noEnding)); // false

// abc? - квантификатор ? после символа или группы символов определяет, что предшествующее выражение может встречаться ноль или один раз
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
// console.log(rainbowRegex.test(american)); // true
// console.log(rainbowRegex.test(british)); // true

// abc+ - квантификатор + после символа или группы символов определяет, что предшествующее выражение может встречаться один и более раз
let heyStr = "hey heey heeey";
let heyReg = /he+y/g;
// console.log(heyStr.match(heyReg)); // [ 'hey', 'heey', 'heeey' ]

// abc* - квантификатор * после символа или группы символов определяет, что предшествующее выражение может встречаться ноль и более раз
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
// console.log(soccerWord.match(goRegex)[0]); // goooooooo
// console.log(gPhrase.match(goRegex)[0]); // g
// console.log(oPhrase.match(goRegex)); // null

// * и + - это жадные квантификаторы
let textStr = "<h1>Winter is coming</h1>";
let textReg = /<.*>/;
// console.log(textStr.match(textReg)[0]); // <h1>Winter is coming</h1>

// Ленивый квантификатор включается с помощью знака вопроса ? после жадного квантификатора
let textStr2 = "<h1>Winter is coming</h1>";
let textReg2 = /<.*?>/;
// console.log(textStr2.match(textReg2)[0]); // <h1>

// Некоторые символьные классы можно заменить специальными метасимволами: [A-Za-z0-9_] === \w
let longHand = /[A-Za-z0-9_]/;
let shortHand = /\w/;
let numbers = "42";
let varNames = "important_var";
// console.log(longHand.test(numbers)); // true
// console.log(shortHand.test(numbers)); // true
// console.log(longHand.test(varNames)); // true
// console.log(shortHand.test(varNames)); // true

// Некоторые символьные классы можно заменить специальными метасимволами: [^A-Za-z0-9_] === \W
let shortHand2 = /\W/;
let numbers2 = "42%";
let sentence2 = "Coding!";
// console.log(numbers2.match(shortHand2)[0]); // %
// console.log(sentence2.match(shortHand2)[0]); // !

// Некоторые символьные классы можно заменить специальными метасимволами: [0-9] === \d
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
// console.log(movieName.match(numRegex).length); // 4

// Некоторые символьные классы можно заменить специальными метасимволами: [^0-9] === \D
let movieName2 = "2001: aa bb";
let noNumRegex2 = /\D/g;
// console.log(movieName2.match(noNumRegex2).length); // 7

// Поиск пробелов \s
let whiteSpace = "Whitespace. Whitespace everywhere!";
let spaceRegex = /\s/g;
// console.log(whiteSpace.match(spaceRegex));

// Непробельный символ \S
let whiteSpace2 = "aa bb c";
let nonSpaceRegex2 = /\S/g;
// console.log(whiteSpace2.match(nonSpaceRegex2).length); // 5

// abc{2} после ab следует 2 символа 'c'
// abc{2,} после ab следует 2 или более символов 'c'
// abc{2,5} после ab следует от 2 до 5 символов 'c'
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
// console.log(multipleA.test(A4)); // true
// console.log(multipleA.test(A2)); // false

// Часть шаблона можно заключить в скобки (...) - это называется «скобочная группа»
// | - ИЛИ
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/; // описывает строку 'Penguin' или 'Pumpkin'
// console.log(testRegex.test(testStr)); // true

// Повторное использование ранее найденных подстрок:
// Подстроки, найденные по шаблону внутри «скобочной группы», сохраняются в отдельной области памяти и получают номер, начиная с единицы.
// В пределах регулярного выражения можно использовать обозначения от \1 до \9 для проверки на совпадение с ранее найденной подстрокой.
// Например, регулярное выражение '(та|ту)-\1' найдёт строку 'та-та' или 'ту-ту', но пропустит строку 'та-ту'.
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/; // соответствует любому слову, которое встречается дважды через пробел
// console.log(repeatRegex.test(repeatStr)); // true

// 'string'.replace(regExp, 'substring')
// replace() - метод регулярного выражения, интегрирован в строку, позволяет искать и заменять текст в строке:
// параметр-1 - шаблон регулярного выражения
// параметр-2 - строка для замены совпадения или функция, которая что-то делает
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
// console.log(wrongText.replace(silverRegex, "blue")); // The sky is blue.

// Доступ к «скобочным группам» можно получить с помощью знаков доллара ($)
// console.log("Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1")); // Camp Code
