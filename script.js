
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID()
  // the constructor...
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}


addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);

console.log(myLibrary);

function displayBooks() {
    const container = document.getElementById('book-container');
    storage = container.innerHTML;
    container.innerHTML = ''; // Clear previous content

    myLibrary.forEach((book) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.setAttribute('data-id', book.id);

        const title = document.createElement('h3');
        title.textContent = book.title;
        bookDiv.appendChild(title);

        const author = document.createElement('p');
        author.textContent = `Author: ${book.author}`;
        bookDiv.appendChild(author);

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.pages}`;
        bookDiv.appendChild(pages);

        const read = document.createElement('p');
        read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
        bookDiv.appendChild(read);

        const toggleButton = document.createElement('button');
        toggleButton.textContent = book.read ? 'Mark as Unread' : 'Mark as Read';
        toggleButton.addEventListener('click', () => {
            book.read = !book.read;
            displayBooks();
        });
        bookDiv.appendChild(toggleButton);

        container.appendChild(bookDiv);
    });
}
displayBooks();

const form = document.getElementById('book-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = form.title.value;
    const author = form.author.value;
    const pages = form.pages.value;
    const read = form.read.checked;

    addBookToLibrary(title, author, pages, read);
    displayBooks();
    form.reset();
});

