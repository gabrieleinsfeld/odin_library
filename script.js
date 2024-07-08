console.log('test')

function Book(title, author, pages, read=false){
    this.title = title 
    this.author = author
    this.pages = pages
    this.read = read
    this.showInfo = function (){
        return [this.title, this.author, this.pages, this.read]
    }
}

const book1 = new Book("Harry", "Demi", "57", true)


console.log(book1.showInfo())
