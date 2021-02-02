module.exports = function toReadable (number) {
    const   numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
            dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
            numberStr = number.toString(),
            lengthStr = numberStr.length;

    if (number === 0) {
        return 'zero';
    }

    if (lengthStr === 1) {
        return numbers[number - 1];
    }

    if (lengthStr === 2 && number < 20) {
        return numbers[number - 1];
    } else if (lengthStr === 2 && number % 10 === 0) {
        return dozens[numberStr[0] - 1];
    } else if (lengthStr === 2) {
        return `${dozens[+numberStr[0] - 1]} ${numbers[+numberStr[1] - 1]}`;
    }

    if (lengthStr  === 3 && +(numberStr.slice(1)) === 0) {
        return `${numbers[+numberStr[0] - 1]} hundred`;
    } else {
        return `${numbers[+numberStr[0] - 1]} hundred ${toReadable(+(numberStr.slice(1)))}`;
    }
}
