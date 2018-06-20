//javascript constructor

function Book (title,author, year){
    this.title = title;
    this.author = author;
    this.year=year;
}


//prototyping helps us add function , however it can be writter within the constructor itself
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in the year ${this.year} `;
}



//Magazine inheriting Book properties
function Magazine(title,author,year,month){
    Book.call(this, title,author,year);
    this.month=month;
}

//Inherit Book prototype
Magazine.prototype = Object.create(Book.prototype);

//Inheriting Book s protype makes Magazine constructor as Book
//To change magazine constructor to magazine function
Magazine.prototype.constructor = Magazine;


function healthMag(title,author,year,month,popularity){

    Magazine.call(this,title,author,year,month);
    this.popularity = popularity;
    

} 

healthMag.prototype = Object.create(Magazine.prototype);
healthMag.prototype.constructor = healthMag;

//compare the 2 objects / constructors
const Book1 = new Book('Socerer\'s Stone','J.K Rowling','1995');
console.log(Book1);

const mag1 = new Magazine('Men\'s health', 'Daily Bio','1980','August');
console.log(mag1);
console.log(mag1.getSummary());

const hm1 = new healthMag('Men\'s health', 'Daily Bio','1980','August','90');
console.log(hm1);


