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


const mag1 = new Magazine('Men\'s health', 'Daily Bio','1980','August');
console.log(mag1);