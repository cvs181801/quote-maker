//grab elements from the DOM

//create a way to add quotes to the phrase.

// function quoteMaker(phrase) {
//     return `"${phrase}"`
// }


// function quoteMaker(phrase) {
//     return '"' + phrase + '"';
// }

function quoteMaker(phrase) {
    '"'.concat(phrase, '"');
}

 console.log(quoteMaker("That sure is nice."));