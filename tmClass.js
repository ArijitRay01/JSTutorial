//creating class

class Book {
    constructor(title,author,year){
        this.title = title;
        this.year = year;
        this.author =author;

    }

getSummary() {

    return `${this.title} was written by ${this.author} in the year ${this.year} `;
}


//static method which is class method 
static topBookStore(){

    return 'Dolphin.Co';
}



}


//Magazine subclass (inheritance)
class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year);  //calling parent constructor with args
        this.month = month;
    }
    
}
 
//Instantiate Object

const book1 = new Book('Class Book','Rudyard Kipling','1983');
console.log(book1);

//static method call through class name.
//object instantiation not required
console.log(Book.topBookStore()); 

//magazine object
const mag1 = new Book('Health Men','Rudyard Kipling','1983');
console.log(mag1);
console.log(mag1.getSummary());

