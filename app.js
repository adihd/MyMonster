// const addForm = document.querySelector('.add');
// const search = document.querySelector('.search input');
// adds
// localStorage.getItem('books')
const restart = document.querySelector("#restart");
const restart1 = document.querySelector("#restart1");
const list1 = document.querySelector('.monsterlist1');
const list2 = document.querySelector('.monsterlist2');
const list3 = document.querySelector('.monsterlist3');
// const list4 = document.querySelector('.monsterlist4');

const myBtn1 = document.querySelector(".myBtn1");
// Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
    // updatet the headline based on the localStorege
    // updatet the img based on the localStorege

  }

  static addBookToList(book) {
    const list = document.querySelector(book.name);
    list.innerHTML = book.monsterHtml;
    // ".classh2"
    updatePoints(book.monsterPoints, book.monsterhead);
  }
}

// Store Class: Handles Storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {

      books = [{
        name: "#monsterid1",
        monsterPoints: 0,
        monsterhead: ".classh1",
        monsterHtml: `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span></span>
          <i class="fas fa-bomb delete" data-toggle="modal" data-target="#exampleModal"></i>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span></span>
          <i class="fas fa-bomb delete" data-toggle="modal" data-target="#exampleModal"></i>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span></span>
          <i class="fas fa-bomb delete" data-toggle="modal" data-target="#exampleModal"></i>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span></span>
          <i class="fas fa-bomb delete" data-toggle="modal" data-target="#exampleModal"></i>
        </li>
      `
      }, {
        name: "#monsterid2",
        monsterPoints: 0,
        monsterhead: ".classh2",
        monsterHtml: `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span></span>
          <i class="fas fa-bomb delete" data-toggle="modal" data-target="#exampleModal"></i>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span></span>
          <i class="fas fa-bomb delete" data-toggle="modal" data-target="#exampleModal"></i>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span></span>
          <i class="fas fa-bomb delete" data-toggle="modal" data-target="#exampleModal"></i>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span></span>
          <i class="fas fa-bomb delete" data-toggle="modal" data-target="#exampleModal"></i>
        </li>
      `
      }, {
        name: "#monsterid3",
        monsterhead: ".classh3",
        monsterPoints: 0,
        monsterHtml: `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span></span>
        <i class="fas fa-bomb delete" data-toggle="modal" data-target="#exampleModal"></i>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span></span>
        <i class="fas fa-bomb delete" data-toggle="modal" data-target="#exampleModal"></i>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span></span>
        <i class="fas fa-bomb delete" data-toggle="modal" data-target="#exampleModal"></i>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span></span>
        <i class="fas fa-bomb delete" data-toggle="modal" data-target="#exampleModal"></i>
      </li>
      `
      }];
      localStorage.setItem('books', JSON.stringify(books));
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

}


const locallist = Store.getBooks();

let monster1 = locallist[0].monsterPoints;
let monster2 = locallist[1].monsterPoints;
let monster3 = locallist[2].monsterPoints;
// let monster4 = 0;
let curentbtn = {
  element: "",
  monster: monster1,
  monsimg: "",
  headline: "",
  locallistnum: 3
};

function updatePoints(monsterpoint, headlineclass) {
  var lives = "🖤";
  var html = `Lives: ${lives.repeat(4 - monsterpoint)}`;
  var headline = document.querySelector(headlineclass);
  headline.innerHTML = html;
  if (monsterpoint == 4) {
    console.log("the monster id dead!")
    // maybe insted ad classes..........
    document.getElementsByClassName(curentbtn.monsimg)[0].src = "img/50-Halloween-Zombie-Icons-O-08.png";
  }
};

restart.addEventListener("click", e => {
  localStorage.clear();
  location.reload();
});

restart1.addEventListener("click", e => {
  // localStorage.clear();
  // location.reload();
  locallist[0].monsterPoints += 1;
  updatePoints(locallist[0].monsterPoints, ".classh1")
  localStorage.setItem('books', JSON.stringify(books));
});


// wthe moment someone pressing a click wait for ans from the model! if you got positive ans do your thing!
myBtn1.addEventListener('click', e => {
  // console.log("hi adi!");
  // console.log();
  var newHtml = `
  <span> Good job! </span>
</li>`;
  curentbtn.element.innerHTML = newHtml;
  curentbtn.element.style.background = "#7372BD";
  curentbtn.element.classList.remove("delete");
  curentbtn.monster += 1;
  locallist[curentbtn.locallistnum].monsterPoints += 1;
  var localhtml = curentbtn.element.parentElement.innerHTML;
  locallist[curentbtn.locallistnum].monsterHtml = localhtml;

  updatePoints(curentbtn.monster, curentbtn.headline);
  // change the inner html to the new mondtser
  // if the points is 4 kill the monster:
  // if (curentbtn.monster == 4) {
  //   console.log("the monster id dead!")
  //   // maybe insted ad classes..........
  //   document.getElementsByClassName(curentbtn.monsimg)[0].src = "img/50-Halloween-Zombie-Icons-O-08.png";
  // }
  localStorage.setItem('books', JSON.stringify(locallist));
});

// monster 1 = change the colors and switch points!
list1.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    // e.target.parentElement.classList.add("oktoday");
    curentbtn.element = e.target.parentElement;
    curentbtn.monsimg = "monimg1";
    curentbtn.monster = monster1;
    curentbtn.headline = ".classh1";
    curentbtn.locallistnum = 0;
  }
});
// monster 2
list2.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    // e.target.parentElement.classList.add("oktoday");
    curentbtn.element = e.target.parentElement;
    curentbtn.monsimg = "monimg2";
    curentbtn.monster = monster2;
    curentbtn.headline = ".classh2";
    curentbtn.locallistnum = 1;
  }
});
// monster 3
list3.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    // e.target.parentElement.classList.add("oktoday");
    curentbtn.element = e.target.parentElement;
    curentbtn.monsimg = "monimg3";
    curentbtn.monster = monster3;
    curentbtn.headline = ".classh3";
    curentbtn.locallistnum = 2;
  }
});


document.addEventListener('DOMContentLoaded', UI.displayBooks);
// // Event: Add a Book