function imgUrlParser(urlString) {
    let id = '';
    let type = '';
    const urlSplit = urlString.split('/');
    if (urlSplit[urlSplit.length - 1].includes('.')) {
        const lastElem = urlSplit[urlSplit.length - 1];
        const lastElemSplit = lastElem.split('.');
        id = lastElemSplit[0];
    } else {
        id = urlSplit[urlSplit.length - 1];
    }
    if (urlSplit[urlSplit.length - 2] === 'a') {
        type = 'album';
    } else if (urlSplit[urlSplit.length - 2] === 'gallery') {
        type = 'gallery';
    } else {
        type = 'image';
    }
    return {
        id: id,
        type: type
    };
}

console.log(imgUrlParser('https://imgur.com/a/cjh4E'));
console.log(imgUrlParser('https://imgur.com/gallery/59npG'));
console.log(imgUrlParser('http://i.imgur.com/altd8Ld.png'));