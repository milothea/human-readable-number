module.exports = function toReadable (number) {
    const numbersToStr = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '15': 'fifteen',
        '18': 'eighteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '80': 'eighty',
    };
    const curNumToStr = number.toString();
    const convertedNumber = numbersToStr[curNumToStr];

    switch (true) {
        case !!convertedNumber:
            return convertedNumber;
        case !convertedNumber && number < 20:
            const extension = number < 20 ? 'teen' : 'ty';

            return `${numbersToStr[curNumToStr[1]]}${extension}`;
        case !convertedNumber && number < 100:
            const firstNumber = numbersToStr[`${curNumToStr[0]}0`] ?
                numbersToStr[`${curNumToStr[0]}0`]
                :
                `${toReadable(+curNumToStr[0])}ty`;
            const lastNumber = curNumToStr[1] > 0 ? ` ${numbersToStr[curNumToStr[1]]}` : '';

            return `${firstNumber}${lastNumber}`;
        default:
            const hundred = +curNumToStr[0] > 0 ?
                `${toReadable(+curNumToStr[0])} hundred` : '';
            const restToNum = +curNumToStr.slice(1);
            const lastNumbers = restToNum > 0 ? ` ${toReadable(restToNum)}` : '';

            return `${hundred}${lastNumbers}`;
    }
}
