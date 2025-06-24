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

    //creating a span for the book and author
    const title = document.createElement('span')
    title.className = "title_box"
    title.textContent = `${dynamic_book.title}`

    //the span for the author (i arranged them in reverse order but its okay it still works)
    const author = document.createElement("span")
    author.className = "author_box"
    author.textContent = `${dynamic_book.author}`

    createBox.appendChild(author)
    createBox.appendChild(title)
    
    // we also need a button for deleting the book
    deleteButton(createBox, dynamic_book.id)


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

function deleteButton(box_name, buttonId) {
    const deleteButton = document.createElement("button")
    deleteButton.className = "delete_button"
    deleteButton.innerText = "Delete"

    deleteButton.addEventListener("click", () => {
        box_name.remove()
    })

    box_name.appendChild(deleteButton)
}



// seeding the site with some books for styling purposes
bookOne = new Book("Rachael Lippincott","Five Feet Apart")
bookTwo = new Book("Harper Lee", "To Kill a Mockingbird")
bookThree = new Book("George Orwell", "1984")
bookFour = new Book("J.K. Rowling", "Harry Potter and the Sorcerer's Stone")
bookFive = new Book("F. Scott Fitzgerald", "The Great Gatsby")

myLibrary.push(bookOne, bookTwo, bookThree, bookFour, bookFive)

myLibrary.forEach(appendBookToDom)