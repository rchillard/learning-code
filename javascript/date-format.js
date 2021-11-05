let now = new Date();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
// Get a formatted string returns something like "October 2, 2020 at 7:05 AM"
let formatDate = now.toLocaleString('en-US', {
	dateStyle: 'long',
	timeStyle: 'short',
	hour12: true
});

console.log(formatDate);