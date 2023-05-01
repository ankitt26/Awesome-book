import displayBook from './displayBook.js';

export default (BookList) => {
  const books = document.getElementById('book-list');
  books.addEventListener('click', (event) => {
    if (event.target.classList.contains('toRemove')) {
      const indd = parseInt(event.target.dataset.index, 10);
      BookList = BookList.filter((value, i) => indd !== i);
      const toString = JSON.stringify(BookList);
      localStorage.setItem('BookList', toString);
      displayBook(BookList);
    }
  });
};
