
const book1 = new Book("Harry", "Demi", "55", true)
const book2 = new Book("Harry", "Demi", "56", true)
const book3 = new Book("Harry", "Demi", "57", true)
const book4 = new Book("Harry", "Demi", "58", true)
const book5 = new Book("Harry", "Demi", "58", true)
const book6 = new Book("Harry", "Demi", "57", true)
const book7 = new Book("Harry", "Demi", "58", true)
const book8 = new Book("Harry", "Demi", "58", true)
const book9 = new Book("Harry", "Demi", "58", true)
const book10 = new Book("Harry", "Demi", "58", true)

const bookContainer = document.getElementById('books')
let myLibrary = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10]

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
        book.setAttribute('id', `${index}`)
        bookContainer.appendChild(book)
        displayInfo(element, book)
    }


}

function displayInfo(element, book){
    const h1 = document.createElement('h1')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const btn = document.createElement('button')
    h1.innerText = `Title: ${element.title}`
    h3.innerText = `Author: ${element.author}`
    p.innerText = `Author: ${element.pages}`
    btn.innerText = `Author: ${element.read}`
    book.appendChild(h1)
    book.appendChild(h3)
    book.appendChild(p)
    book.appendChild(btn)
}



displayInitial(myLibrary)
console.log(book1.showInfo())
