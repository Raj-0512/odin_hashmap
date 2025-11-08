import hashMap from "./hashmap.js";

const newHashMap = new hashMap();

newHashMap.set('apple', 'red')
newHashMap.set('banana', 'yellow')
newHashMap.set('carrot', 'orange')
newHashMap.set('dog', 'brown')
newHashMap.set('elephant', 'gray')
newHashMap.set('frog', 'green')
newHashMap.set('grape', 'purple')
newHashMap.set('hat', 'black')
newHashMap.set('ice cream', 'white')
newHashMap.set('jacket', 'blue')
newHashMap.set('kite', 'pink')
newHashMap.set('lion', 'golden')

newHashMap.set('lion' , 'dark');

console.log(newHashMap.length());
console.log(newHashMap.get('lion'));

newHashMap.set('moon', 'silver');
console.log(newHashMap.length());
console.log(newHashMap.entries());

newHashMap.set('hat' , 'white');
newHashMap.set('dog' , 'green');
console.log(newHashMap.entries());

console.log(newHashMap.has('kite'));
console.log(newHashMap.remove('kite'));
console.log(newHashMap.has('kite'));

console.log(newHashMap.keys());
console.log(newHashMap.values());
console.log(newHashMap.clear());
console.log(newHashMap.entries());
