const homeRef = document.querySelector('.js-home');
const libraryRef = document.querySelector('.js-library');
const logoRef = document.querySelector('.site-logo');

// три секции main
const homePageRef = document.querySelector('#homePage_show');
const filmLibraryRef = document.querySelector('.js-filmLibrary');
const detailsPageRef = document.querySelector('#js-detailsPage');

// кнопки watched and queue с 5
// btnWatched
// btnQueue

//добавить удалить в очередь !!!!!!!!!!!!!!!!!!
// addQueueButton
// addWatchedButton

// глобальные переменные
let selectFilm;

function activeHomePage() {
  homePageRef.classList.remove('hide');
  filmLibraryRef.classList.add('hide');
  detailsPageRef.classList.add('hide');

  libraryRef.classList.remove('selectPage');
  homeRef.classList.add('selectPage');

  // повесить слушателя на пагинацию
  // забрать с 2 js
  // pagination.addEventListener('click', plaginationNavigation);
  // убрать со 2 файла 19 строка

  // слушатель на прев и некст из пагинации
  //   prevRef.addEventListener('click', call_prev_func);
  //   nextRef.addEventListener('click', call_next_func);

  // удалить ненужных 4 слушателя
  // 1 addRemove from detailPage
  // 2 addRemove from detailPage
  // 3 watched from lib
  // 4 queue from lib
}

function activeLibraryPage() {
  homePageRef.classList.add('hide');
  filmLibraryRef.classList.remove('hide');
  detailsPageRef.classList.add('hide');

  libraryRef.classList.add('selectPage');
  homeRef.classList.remove('selectPage');

  // btnQueue.classList.add('active-btn');
  // drawQueueFilmList();

  // сделал 5 учасник
  // сделать
  // добавляет кнопке списка очереди фильмов
  // эффект выбранной с помощью класса

  // сделать
  // также вешает слушателей на кнопки
  // показа очереди фильмов и просмотренных фильмов
  // перенести в секцию либ
  // btnWatched.addEventListener('click', drawWatchedFilmList);
  // btnQueue.addEventListener('click', drawQueueFilmList);

  // delete 4 listener
  // pagination 1
  // pagination.removeEventListener('click', plaginationNavigation);
  // form 2
  // form.removeEventListener('submit', searchFilms);
  // 3 addRemoveWatched
  // 4 addRemoveQueue
}
// movieId, bool;

function activeDetailsPage(movieId, bool) {
  homePageRef.classList.add('hide');
  filmLibraryRef.classList.add('hide');
  detailsPageRef.classList.remove('hide');

  // selectFilm заполнить обьектом в зависимости либ или вотчед

  selectFilm = renderFilms.find(el => el.id === movieId);
  selectFilm.itsLibraryFilm = bool;
  console.log(selectFilm);

  // сделать
  // слушатель на кнопки добавить/удалить
  // addWatchedButton.addEventListener('click', toggleToWatched());
  // addQueueButton.addEventListener('click', toggleToQueue());
  console.log(selectFilm);
  showDetails(selectFilm);

  addWatchedButton.addEventListener('click', toggleToWatched);
  addQueueButton.addEventListener('click', toggleToQueue);

  // remove 4 listener
  // pagination 1
  // pagination.removeEventListener('click', plaginationNavigation);
  // form 2
  // form.removeEventListener('submit', searchFilms);
  // 3 watched from lib
  // 4 queue from lib
}

logoRef.addEventListener('click', activeHomePage);
homeRef.addEventListener('click', activeHomePage);
libraryRef.addEventListener('click', activeLibraryPage);

activeHomePage();
// activeLibraryPage();
// activeDetailsPage();
// console.log(filmLibraryRef);

const btnUpRef = document.querySelector('.btn_up');
btnUpRef.addEventListener('click', goUp);
function goUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// console.log(innerWidth);
// innerWidth < 768;
