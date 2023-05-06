import displayBook from './displayBook.js';
import fetchLocal from './fetchLocal.js';

export default () => {
  const addbtn = document.getElementById('add-btn');
  const form = document.querySelector('.form');
  const err = document.getElementById('error-msg');

  const addtheItem = () => {
    const BookList = fetchLocal();
    const bookname = form.title.value;
    const bookAuthor = form.author.value;

    if (bookname === '' || bookAuthor === '') {
      err.classList.add('error');
    } else {
      const newBook = { Title: bookname, Author: bookAuthor };
      BookList.push(newBook);
      const toString = JSON.stringify(BookList);
      localStorage.setItem('BookList', toString);

      // to hide error

      err.classList.remove('error');
      form.title.value = '';
      form.author.value = '';
      displayBook(BookList);
    }
  };

  addbtn.addEventListener('click', () => {
    addtheItem();
  });

  form.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addtheItem();
    }
  });
};
