/* Some programming languages (like Python) include a "title" method to return a string with Every Word Capitalized (e.g. 'title case'.title() returns 'Title Case').  

JavaScript has no .title method, but that won't stop us!  Use the string methods you know to print 'Title Case' from 'title case'. */


let language = 'JavaScript';
console.log(language.slice(0,1)+language.slice(4,5));

let initials = (language.slice(0,1)+language.slice(4,5));

console.log(`The abbreviation for ${language} is ${initials}.`);


let notTitle = 'title case';
let titleCase = notTitle.replace('t', 'T').replace('c', 'C');
console.log(titleCase);

