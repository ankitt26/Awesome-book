export default (BookList) => {
  const books = document.getElementById('book-list');
  books.addEventListener('click', (event) => {
    if (event.target.classList.contains('toRemove')) {
      const index = parseInt(event.target.dataset.index, 10);
      BookList = BookList.filter((value, i) => index !== i);
      const toString = JSON.stringify(BookList);
      localStorage.setItem('BookList', toString);
    }
  });
};
