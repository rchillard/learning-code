// Maps or a "hash map" or a hash
// Similar to objects, except keys can be ANY value

var firstMap = new Map;
firstMap.set("name", "my first map");
firstMap.set("location", "the moon");
firstMap.set("purpose", "learning astrocartography");

console.log(firstMap);
console.log(firstMap.get("name"));

firstMap.forEach(v => console.log(v));

// Iterators available
firstMap.values();
firstMap.keys();

for(let value of firstMap.values()) {
    console.log(value);
}

for(let key of firstMap.keys()) {
    console.log(key);
}

// Why use maps?
// Finding the size is easy - it has built in size
// The keys can be any data type
// You can accidentally overwrite keys on the Object.prototype in an objhect you make - maps do not have that issue
// Iterating over keys and values in a map is quite easy as well

// When to use maps?
// If you need to look up keys dynamically (they are not hard coded srtings)
// If you need keys that are not strings
// If you are frequently adding and removing key/value pairs
// Are key-value pairs frequently added or removed?
// If you are operating on multiple keys at a time

// WeakMap
// Similar to a map, but all keys MUST be objects
// You cannot iterate over them