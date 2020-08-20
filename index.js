function formattedPhone(phone) {
    let result = '';
    for(let i = 0; i < phone.length; i++) {
        const char = phone.charAt(i);
        result += getPhoneFormatChar(i);
        result += char;
    }

    return result;
}

function getPhoneFormatChar(index) {
    if (index === 2) {
        return ' (';
    } else if (index === 5) {
        return ') ';
    } else if (index === 8 || index === 10) {
        return '-';
    }
    return '';
}

console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90