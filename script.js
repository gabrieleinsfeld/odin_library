
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", "281", true)
const book2 = new Book("1984", "George Orwell", "328", true)
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "180", true)




const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const pagesInput = document.getElementById('pages')
const readInput = document.getElementById('read')
const bookContainer = document.getElementById('books')
let myLibrary = [book1, book2, book3]

function Book(title, author, pages, read=false){
    this.title = title 
    this.author = author
    this.pages = pages
    this.read = read
    this.showInfo = function (){
        return [this.title, this.author, this.pages, this.read]
    }
}


function displayInitial(array){

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const book = document.createElement('div')
        book.setAttribute('class', 'book')
        book.setAttribute('id', `book${index}`)
        bookContainer.appendChild(book)
        displayInfo(element, book)
    }


}

function displayInfo(element, book){
    const h1 = document.createElement('h1')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const btn = document.createElement('button')
    const label = document.createElement('label')
    const read = document.createElement('input')
    read.setAttribute('type', 'checkbox')
    label.textContent = 'Read'
    h1.setAttribute('class', 'title')
    h3.setAttribute('class', 'author')
    p.setAttribute('class', 'spine')
    h1.innerText = `Title: ${element.title}`
    h3.innerText = `Author: ${element.author}`
    p.innerText = `Pages: ${element.pages}`
    btn.innerText = `Delete Book`
    btn.addEventListener('click', ()=>{
        const book = document.getElementById(btn.parentElement.getAttribute('id'))
        book.remove()
        console.log(btn.parentElement.getAttribute('id'))
    })
    label.appendChild(read)
    book.appendChild(h1)
    book.appendChild(h3)
    
    book.appendChild(p)
    
    book.appendChild(label)
    book.appendChild(btn)
}





function addBook(){
    newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value)
    myLibrary.push(newBook)
    const element = myLibrary[myLibrary.length -1];
    const book = document.createElement('div')
    book.setAttribute('class', 'book')
    book.setAttribute('id', `${myLibrary.length}`)
    bookContainer.appendChild(book)
    displayInfo(element, book)
}

displayInitial(myLibrary)


// ******************
// Dialog functioning 
// ******************
const dialog = document.querySelector("dialog");
const showButton = document.getElementById("open");
const closeButton = document.getElementById("close");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});


document.getElementById('bookForm').addEventListener('submit', (e) => {
    e.preventDefault();
    addBook();
    dialog.close();
});