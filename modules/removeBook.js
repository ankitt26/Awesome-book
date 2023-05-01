const RemoveBook = (BookList) => {
  const books = document.getElementById('book-list');
  books.addEventListener('click', (event) => {
    if (event.target.classList.contains('toRemove')) {
      const { index } = event.target.dataset;
      BookList = BookList.filter((value, i) => index != i);
      const toString = JSON.stringify(BookList);
      localStorage.setItem('BookList', toString);
    }
  });
};
export { RemoveBook };
