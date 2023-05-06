import fetchLocal from './fetchLocal.js';

export default () => {
  const BookList = fetchLocal();
  const books = document.getElementById('book-list');
  books.innerHTML = ''; // Clear the books div
  BookList.forEach((Book, index) => {
    const div = document.createElement('div');
    div.className = 'book';
    div.innerHTML = `
    <p class="title">${Book.Title} &nbsp; by &nbsp; ${Book.Author}</p>
    <button class="toRemove" data-index="${index}">Remove</button>
    `;
    books.appendChild(div);
  });
};
