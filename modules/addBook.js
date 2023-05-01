export default (BookList) => {
  const addbtn = document.getElementById('add-btn');
  const form = document.querySelector('.form');
  const err = document.getElementById('error-msg');

  addbtn.addEventListener('click', () => {
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
    }
  });
};
