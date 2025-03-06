const arrayOfGifts = [7, 4, 5, 11, 15, 9, 2, 18, 20, 12, 25, 16, 14, 25];
const giftWrapLenght = 30;

function wrapGifts(arrayOfGifts, giftWrapLenght) {
    console.log("Function started"); // Debugging log
    arrayOfGifts.sort((a, b) => a - b);

    let totalLength = 0;
    let giftCount = 0;

    for (let i = 0; i < arrayOfGifts.length; i++) {
        console.log(`Checking gift of length ${arrayOfGifts[i]}`); // Debugging log
        if (totalLength + arrayOfGifts[i] <= giftWrapLenght) {
            totalLength += arrayOfGifts[i];
            giftCount++;
            console.log(`Gift added! Total length: ${totalLength}, Gift count: ${giftCount}`); // Debugging log
        } else {
            console.log("Cannot add this gift, breaking out of loop"); // Debugging log
            break;
        }
    }

    return giftCount;
}

console.log(wrapGifts(arrayOfGifts, giftWrapLenght));