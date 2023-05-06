export default () => {
  let BookList;
  if (localStorage.getItem('BookList')) {
    const toParse = JSON.parse(localStorage.getItem('BookList'));
    BookList = toParse;
  } else {
    BookList = [];
  }

  return BookList;
};
