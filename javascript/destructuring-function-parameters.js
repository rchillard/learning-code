function salutation(title, name, time) {
    return `Hail and well met, ${title} ${name}.  Good ${time} to you!`;
}

let greeting = salutation('Lord', 'Rand', 'morning');

// Destructuring the function parameters makes it so that their order does not matter
function salutation({ title, name, time }) {
    return `Hail and well met, ${title} ${name}.  Good ${time} to you!`;
}

let greeting = salutation({
    name: 'Rand',
    title: 'Lord',
    time: 'morning'
});

// Layering on default function parameters inside of destructuring
function salutation({ title, name, time = 'day' }) {
    return `Hail and well met, ${title} ${name}.  Good ${time} to you!`;
}

let greeting = salutation({ name: 'Rand', title: 'Lord' })