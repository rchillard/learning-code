
// https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
// Cookie storage limit is 4kb (4093 bytes)
document.cookie = 'secret=macaroni;';

// Expire in 2 weeks (60s * 60m * 24h * 14d)
document.cookie = `recipe=ncheese; path=/; max-age=${60 * 60 * 24 * 14};`;

// Expire in 24 hours (60s * 60m * 24h)
// Only transmit over HTTPS
// Prevent browser from sending cookie with cross-site requests (helps prevent cross-site request forgery [CSRF])
document.cookie = `supersecret=peanut; path=/; max-age=${60 * 60 * 24}; secure; samesite=strict;`;

// Retrieve a single String with all of the cookies for a given site
console.log(document.cookie);

/**
 * Get the value of a cookie
 * Source: https://gist.github.com/wpsmith/6cf23551dd140fb72ae7
 * @param  {String} name  The name of the cookie
 * @return {String}       The cookie value
 */
 function getCookie (name) {
	let value = `; ${document.cookie}`;
	let parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
}

// Retrieve individual cookies
let secret = getCookie('secret');
let recipe = getCookie('recipe');

// Delete the cookie
document.cookie = `secret=macaroni; path=/; max-age=0;`;
