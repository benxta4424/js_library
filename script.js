const myLibrary = []

function Book(author, title) {
    this.id = crypto.randomUUID()
    this.author = author
    this.title = title
} 

function addBookToLibrary(author, title) {
    new_book = new Book(author, title)
    myLibrary.push(new_book)
    return new_book;
}

function getBook() {
    for(let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].name)
    }
}



// form for adding the book 
const addBookButton = document.getElementById("add_books");
const bookForm = document.getElementById("bookForm")

addBookButton.addEventListener("click", ()=> {
    bookForm.style.display = "block"
})


function appendBookToDom(dynamic_book) {
    // create the box for the title and author and name it box
    const createBox = document.createElement("div")
    createBox.className = "box"

    const title = document.createElement('span')
    title.className = "title_box"
    title.textContent = dynamic_book.title

    const author = document.createElement("span")
    author.className = "author_box"
    author.textContent = dynamic_book.author

    createBox.appendChild(author)
    createBox.appendChild(title)

    // append the books to the container
    const bookContainer = document.getElementById("all_books")    
    bookContainer.appendChild(createBox)    
}

bookForm.addEventListener("submit", (e) => {
    e.preventDefault() 

    const author = document.getElementById("author").value
    const title = document.getElementById("title").value

    const dynamically_added_book = addBookToLibrary(author, title)
    appendBookToDom(dynamically_added_book)
})

