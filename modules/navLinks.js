// to hide and show
export default () => {
  const main = document.querySelector('.main-section');
  const form = document.querySelector('.form');
  const contact = document.querySelector('.contact');

  const lists = document.getElementById('list-li');
  const addnew = document.getElementById('addnew-li');
  const cPage = document.getElementById('contact-li');

  lists.addEventListener('click', () => {
    form.classList.add('hide');
    contact.classList.add('hide');
    main.classList.remove('hide');

    lists.classList.add('active');
    cPage.classList.remove('active');
    addnew.classList.remove('active');
  });

  addnew.addEventListener('click', () => {
    main.classList.add('hide');
    contact.classList.add('hide');
    form.classList.remove('hide');

    form.classList.remove('hide-onload');

    addnew.classList.add('active');
    lists.classList.remove('active');
    cPage.classList.remove('active');
  });

  cPage.addEventListener('click', () => {
    form.classList.add('hide');
    contact.classList.remove('hide');
    main.classList.add('hide');
    contact.classList.remove('hide-onload');

    cPage.classList.add('active');
    lists.classList.remove('active');
    addnew.classList.remove('active');
  });
};
