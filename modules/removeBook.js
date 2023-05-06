import displayBook from './displayBook.js';
import fetchLocal from './fetchLocal.js';

export default () => {
  const books = document.getElementById('book-list');
  books.addEventListener('click', (event) => {
    let BookList = fetchLocal();
    if (event.target.classList.contains('toRemove')) {
      const indd = parseInt(event.target.dataset.index, 10);
      BookList = BookList.filter((value, i) => indd !== i);
      const toString = JSON.stringify(BookList);
      localStorage.setItem('BookList', toString);
      displayBook(BookList);
    }
  });
};
