// const s1 = 'Hello';
// console.log(typeof s1); //op String
// document.write(typeof s1);

// const s2 = new String("Hello");
// console.log(typeof s2); // op Object
// document.write(typeof s2);

//console.log(window); // use this to get all functions and properties to be used on window
// window.alert(1)


//object literal
const book1 ={     
title: 'Book 1',
author: 'John Doe',
year: '2013',
getSummary: function(){
    //return 'The Book '+ this.title + ' was written by ' + this.author + 'in the year '+ this.year +'.'; 
    return `The book ${this.title} was written by ${this.author} in the year ${this.year} .` //template literal  ``
}

}

console.log(book1.getSummary());
// console.log(typeof book1.getSummary()) //string
// console.log(typeof book1.getSummary()) //function


// console.log(Object.values(book1));  //getting the values of a particular object
// console.log(Object.keys(book1));  // getting the keys of a particular object