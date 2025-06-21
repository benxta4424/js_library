const myLibrary = []

function Book(author, title) {
    this.id = crypto.randomUUID()
    this.author = author;
    this.title = title;
} 

function addBookToLibrary(author, title) {
    new_book = new Book(author, title);
    myLibrary.push(new_book)
    return new_book;
}


const book1 = addBookToLibrary("ben","tennyeson")

console.log(book1.title)