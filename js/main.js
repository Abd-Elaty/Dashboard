// navigation bar
let sideIcon = document.querySelectorAll('aside i')
let main = document.querySelector('main');
let mainCont = main.innerHTML
sideIcon.forEach((el)=> {
  el.addEventListener('click', () => {
    sideIcon.forEach((ele) => {
      ele.classList.remove('active')
    })
    el.classList.add('active')
    if (el.classList.contains('home') === false){
      main.innerHTML = `<h5 class='text-center opacity-75 pt-5 mt-5'> No (${el.dataset.cont}) yet</h5>`
    } else {
      main.innerHTML = mainCont;
    }
  })
})


// search bar
let search = document.querySelector('header > .search');
let searchBar = document.querySelector('header > form');
let selected = document.querySelector('input.focus');
search.addEventListener('click', () => {
  searchBar.classList.add('active')
  selected.focus()
})
main.addEventListener('click', () => {
  searchBar.classList.remove('active')
})


// change user
let arrow = document.querySelector('header .right');
let multiUsers = document.querySelector('header .right .multi-users');
let users = document.querySelectorAll('header .multi-users .user');
arrow.addEventListener('click' , () => {
  multiUsers.classList.toggle('opened')
})
users.forEach((ele)=> {
  ele.addEventListener('click' , () => {
    multiUsers.classList.remove('opened')
  })
})


