// задание 1

function calculatePoints(cardType, liters) {
    if (cardType === "silver") {
        return 0.5 * liters
    } else if (cardType === "gold") {
        return 0.75 * liters
    } else if (cardType === "platinum") {
        return 1 * liters
    } else {
        return 0
    }
}

function calculateLoyaltyPoints() {
    console.log("Добро пожаловать в программу лояльности Газпрома!")

    var cardType = prompt("Введите тип карты (SILVER, GOLD, PLATINUM): ")
    var liters = parseFloat(prompt("Введите количество литров бензина: "))
    cardType = cardType.toLowerCase()

    if (["silver", "gold", "platinum"].indexOf(cardType) === -1) {
        console.log("Некорректный тип карты. Пожалуйста, введите silver, gold или platinum.")
        return
    }

    var points = calculatePoints(cardType, liters)
    console.log("Вы заработали " + points + " баллов по системе лояльности Газпрома")
}

calculateLoyaltyPoints()

// задание 2    

function countVisaCards(cardNumbers) {
    var visaCount = 0

    for (var i = 0; i < cardNumbers.length; i++) {
        if (cardNumbers[i][0] === "4") {
            visaCount++;
        }
    }

    return "Карт VISA " + visaCount + " из " + cardNumbers.length;
}

var cardNumbersArray = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"]
var result = countVisaCards(cardNumbersArray)

console.log(result);

// задание 3

function maskCard(cardNumber, maskSymbol) {
    if (!cardNumber || typeof cardNumber !== 'string') {
        return "Некорректный номер карты"
    }

    if (!maskSymbol || typeof maskSymbol !== 'string' || maskSymbol.length !== 1) {
        return "Некорректный символ для маскировки";
    }

    var cardLength = cardNumber.length;

    if (cardLength <= 10) {
        return "Некорректный номер карты"
    }

    var visiblePart = cardNumber.substring(0, 6);
    var maskedPart = cardNumber.substring(6, cardLength - 4).replace(/[0-9]/g, maskSymbol);
    var lastPart = cardNumber.substring(cardLength - 4, cardLength);

    var maskedCardNumber = visiblePart + maskedPart + lastPart;

    return maskedCardNumber;
}

var maskedCard = maskCard("4815154823541789", "X")
console.log(maskedCard);

var maskedCardWithAsterisk = maskCard("4815154823541789", "*")
console.log(maskedCardWithAsterisk)