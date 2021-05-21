//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '978-0465050659',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    isbn: '978-1617933431',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    isbn: '978-0201616224',
    alreadyRead: true,
  },
];

function createBookList(books) {
  // your code goes in here, return the ul element
  const booksList = document.createElement('ul');
  books.forEach(({title, author, alreadyRead}) => {
    const listItem = document.createElement('li');
    const bookParagraph = document.createElement('p');
    const bookImage = document.createElement('img');
    const imgName = title.split(' ').join('_');
    bookParagraph.textContent = `${title} - ${author}`;
    bookImage.src = `assets/${imgName}.jpg`;
    bookImage.alt = title;
    listItem.appendChild(bookParagraph);
    listItem.appendChild(bookImage);
    listItem.style.background = (alreadyRead)? "green" : "red";
    /*Object.assign(listItem.style, {width: "calc(25% - 51px)", margin: "25px", padding: "10px", minWidth: "350px"});*/
    booksList.appendChild(listItem);
  });
  /*booksList.style.cssText = "list-style:none; display: flex; flex-wrap: wrap; padding: 20px; width: calc( 100% - 41px);";*/
  return booksList;
}

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);
