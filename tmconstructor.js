
//javascript constructor

function Book (title,author, year){
    this.title = title;
    this.author = author;
    this.year=year;
}

//prototyping helps us add function to class Book, however it can be writter within the constructor itself(not good practice)
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in the year ${this.year} `;
}

Book.prototype.Revise = function(){
    this.year = new Date().getFullYear();
    this.revise = true;
}


//Object initialization
//Note: We are using const instead of class type as in C# where we would have initialized as Book Book1= ...
const Book1 = new Book('Socerer\'s Stone','J.K Rowling','1995');
console.log(Book1.getSummary());
Book1.Revise();
console.log(Book1);


