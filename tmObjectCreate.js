//storing prtotypes into a constant and creating object on the constant

const bookProtos = {
    getSummary : function(){
        return `${this.title} was written by ${this.author} in the year ${this.year} `; 
    },

    getAge :function(){
        return `${this.title} was written  in the year ${this.year} `; 
    }
}

//Create object
 const book1 = Object.create(bookProtos);
 book1.title= 'Book One';
 book1.author= 'John Doe';
 book1.year= '2013';

// const book1 = Object.create(bookProtos
// ,{
//     title: {value: 'Book One'},
//     author: {value: 'John Doe'},
//     year :{value : '2010'}
// }

// );

 console.log(book1);

