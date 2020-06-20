// const addForm = document.querySelector('.add');
// const search = document.querySelector('.search input');
// adds
// localStorage.getItem('books')
const restart = document.querySelector("#restart");
const restart1 = document.querySelector("#restart1");
const list1 = document.querySelector('.monsterlist1');
const list2 = document.querySelector('.monsterlist2');
const list3 = document.querySelector('.monsterlist3');
const list4 = document.querySelector('.monsterlist4');

const myBtn1 = document.querySelector(".myBtn1");

var myAudio = new Audio("sound/My_Beloved_Monster_lyrics.mp3");
// Book Class: Represents a Book
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function () {
  isPlaying = true;
};
myAudio.onpause = function () {
  isPlaying = false;
};



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
    // this is working yay :)
    const list = document.querySelector(book.name);
    list.innerHTML = book.monsterHtml;
    // ".classh2"
    updatePoints(book.monsterPoints, book.monsterhead, book.mosterimgclass);
  }
}

// Store Class: Handles Storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {

      books = [{
        name: "#monsterid1",
        monsterPoints: 6,
        mosterimgclass: "monimg1",
        monsterhead: ".classh1",
        monsterHtml: `
      <li class="list-group-item d-flex justify-content-center align-items-center">
        <h5 style="margin-bottom: 0rem;"><i class="fas fa-check-circle delete" data-toggle="modal" data-target="#exampleModal"></i> you can do it</h5>
      </li>
      <li class="list-group-item d-flex justify-content-center align-items-center">
        <h5 style="margin-bottom: 0rem;"><i class="fas fa-check-circle delete" data-toggle="modal" data-target="#exampleModal"></i> you can do it</h5>
      </li>
      <li class="list-group-item d-flex justify-content-center align-items-center">
        <h5 style="margin-bottom: 0rem;"><i class="fas fa-check-circle delete" data-toggle="modal" data-target="#exampleModal"></i> you can do it</h5>
      </li>
      <li class="list-group-item d-flex justify-content-center align-items-center">
        <h5 style="margin-bottom: 0rem;"><i class="fas fa-check-circle delete" data-toggle="modal" data-target="#exampleModal"></i> you can do it</h5>
        <li class="list-group-item d-flex justify-content-center align-items-center">
        <h5 style="margin-bottom: 0rem;"><i class="fas fa-check-circle delete" data-toggle="modal" data-target="#exampleModal"></i> you can do it</h5>
      </li>
      <li class="list-group-item d-flex justify-content-center align-items-center">
        <h5 style="margin-bottom: 0rem;"><i class="fas fa-check-circle delete" data-toggle="modal" data-target="#exampleModal"></i> you can do it</h5>
      </li>
      `
      }, {
        name: "#monsterid2",
        mosterimgclass: "monimg2",
        monsterPoints: 4,
        monsterhead: ".classh2",
        monsterHtml: `
      <li class="list-group-item d-flex justify-content-center align-items-center">
        <h5 style="margin-bottom: 0rem;"><i class="fas fa-check-circle delete" data-toggle="modal" data-target="#exampleModal"></i> you can do it</h5>
      </li>
      <li class="list-group-item d-flex justify-content-center align-items-center">
        <h5 style="margin-bottom: 0rem;"><i class="fas fa-check-circle delete" data-toggle="modal" data-target="#exampleModal"></i> you can do it</h5>
      </li>
      <li class="list-group-item d-flex justify-content-center align-items-center">
        <h5 style="margin-bottom: 0rem;"><i class="fas fa-check-circle delete" data-toggle="modal" data-target="#exampleModal"></i> you can do it</h5>
      </li>
      <li class="list-group-item d-flex justify-content-center align-items-center">
        <h5 style="margin-bottom: 0rem;"><i class="fas fa-check-circle delete" data-toggle="modal" data-target="#exampleModal"></i> you can do it</h5>
      </li>
      `
      }, {
        name: "#monsterid3",
        monsterhead: ".classh3",
        mosterimgclass: "monimg3",
        monsterPoints: 2,
        monsterHtml: `
      <li class="list-group-item d-flex justify-content-center align-items-center">
        <h5 style="margin-bottom: 0rem;"><i class="fas fa-check-circle delete" data-toggle="modal" data-target="#exampleModal"></i> you can do it</h5>
      </li>
      <li class="list-group-item d-flex justify-content-center align-items-center">
        <h5 style="margin-bottom: 0rem;"><i class="fas fa-check-circle delete" data-toggle="modal" data-target="#exampleModal"></i> you can do it</h5>
      </li>
      `
      }, {
        name: "#monsterid4",
        monsterhead: ".classh4",
        mosterimgclass: "monimg4",
        monsterPoints: 1,
        monsterHtml: `
      <li class="list-group-item d-flex justify-content-center align-items-center">
        <h5 style="margin-bottom: 0rem;"><i class="fas fa-check-circle delete" data-toggle="modal" data-target="#exampleModal"></i> you can do it</h5>
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


var locallist = Store.getBooks();

let monster1 = locallist[0].monsterPoints;
let monster2 = locallist[1].monsterPoints;
let monster3 = locallist[2].monsterPoints;
// let monster4 = 0;
let curentbtn = {
  element: "",
  monster: "",
  monsimg: "monimg1",
  headline: "",
  locallistnum: 0
};

// ! there is a function with this function! for some reas

function updatePoints(monsterpoint, headlineclass, monsimg1) {
  var lives = "🖤";
  var htmli = `${lives.repeat(monsterpoint)}`;
  var headline = document.querySelector(headlineclass);
  console.log(htmli);
  console.log(headline);
  headline.innerHTML = htmli;
  if (monsterpoint == 0) {
    console.log("the monster id dead!")
    // maybe insted ad classes..........

    document.getElementsByClassName(monsimg1)[0].src = "img/alive.png";
  }
  // localStorage.setItem('books', JSON.stringify(locallist));
}

restart.addEventListener("click", e => {
  localStorage.clear();
  location.reload();
});


// wthe moment someone pressing a click wait for ans from the model! if you got positive ans do your thing!
myBtn1.addEventListener('click', e => {
  // console.log("hi adi!");
  // console.log();
  var newHtml = `
  <span> Good job! </span>  
  
</li>`;
  curentbtn.element.innerHTML = newHtml;
  curentbtn.element.parentElement.style.background = "#778CEB";
  var temp1 = curentbtn.monster;
  curentbtn.element.classList.remove("delete");
  curentbtn.monster -= 1;
  var temp = curentbtn.monster;
  locallist[curentbtn.locallistnum].monsterPoints -= 1;
  var localhtml = curentbtn.element.parentElement.parentElement.innerHTML;
  console.log("localhtml:");
  console.log(localhtml);
  locallist[curentbtn.locallistnum].monsterHtml = localhtml;
  console.log("curentbtn.locallistnum:");
  console.log(curentbtn.locallistnum);
  console.log("locallist:");
  console.log(locallist);

  updatePoints(curentbtn.monster, curentbtn.headline, curentbtn.monsimg);
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
    curentbtn.monster = locallist[0].monsterPoints;
    curentbtn.headline = ".classh1";
    curentbtn.locallistnum = 0;
  }
});
// monster 2s
list2.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    // e.target.parentElement.classList.add("oktoday");
    curentbtn.element = e.target.parentElement;
    curentbtn.monsimg = "monimg2";
    curentbtn.monster = locallist[1].monsterPoints;
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
    curentbtn.monster = locallist[2].monsterPoints;
    curentbtn.headline = ".classh3";
    curentbtn.locallistnum = 2;
  }
});

list4.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    // e.target.parentElement.classList.add("oktoday");
    curentbtn.element = e.target.parentElement;
    curentbtn.monsimg = "monimg4";
    curentbtn.monster = locallist[3].monsterPoints;
    curentbtn.headline = ".classh4";
    curentbtn.locallistnum = 3;
  }
});


document.addEventListener('DOMContentLoaded', UI.displayBooks);
// // Event: Add a Book