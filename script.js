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


const book1 = addBookToLibrary("ben","tun")
const book2 = addBookToLibrary("dan","sah")
const book3 = addBookToLibrary("darius","hur")
const book4 = addBookToLibrary("daniel","grr")


function getBook() {
    for(let i = 0; i < myLibrary.length; i++) {
        document.getElementById("bookTitle").innerHTML = myLibrary[i].name
    }
}



// form for adding the book 
const addBookButton = document.getElementById("add_books");
const bookForm = document.getElementById("bookForm")

addBookButton.addEventListener("click", ()=> {
    bookForm.style.display = "block";
})