export default (BookList) => {
  const books = document.getElementById('book-list');
  books.innerHTML = ''; // Clear the books div
  BookList.forEach((Book, index) => {
    const div = document.createElement('div');
    div.className = 'book';
    div.innerHTML = `
    <h2 class="title">${Book.Title} &nbsp; by &nbsp; ${Book.Author}</h2>
    <button class="toRemove" data-index="${index}">Remove</button>
    `;
    books.appendChild(div);
  });
};
