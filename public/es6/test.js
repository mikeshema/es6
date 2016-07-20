'use strict';

// es6 feature: block-scoped "let" declaration
const sentences = [
    { subject: 'CSS', verb: 'is', object: 'awesome' },
    { subject: 'Web', verb: 'is', object: 'exciting' }
];

// es6 feature: object destructoring
function say({ subject, verb, object }) {
    // es6 feature: template strings
    console.log(`${subject} ${verb} ${object}`);
}

// es6 feature: for..of
for(let s of sentences) {
    say(s);
}
