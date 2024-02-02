function isSixDigitNumber(str) {
    const regex = /^\s*[+-]?0*[1-9]\d{5}\s*$/;
    return regex.test(str);
}
console.log(isSixDigitNumber('   123456  '));
console.log(isSixDigitNumber(' -0123456  '));
console.log(isSixDigitNumber('     -12345  '));
console.log(isSixDigitNumber('   -023456'));
console.log(isSixDigitNumber(' -000016   '));
console.log(isSixDigitNumber(' -000000123456  '));
console.log(isSixDigitNumber(' - 000000123456  '));
console.log(isSixDigitNumber(' +000123456  '));





