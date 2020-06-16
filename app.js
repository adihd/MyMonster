// const addForm = document.querySelector('.add');
// const search = document.querySelector('.search input');
// adds
// localStorage.getItem('books')
const list1 = document.querySelector('.monsterlist1');
const list2 = document.querySelector('.monsterlist2');
const list3 = document.querySelector('.monsterlist3');
// const list4 = document.querySelector('.monsterlist4');
const headline1 = document.querySelector(".classh1");
const headline2 = document.querySelector(".classh2");
const headline3 = document.querySelector(".classh3");
const myBtn1 = document.querySelector(".myBtn1");

let monster1 = 0;
let monster2 = 0;
let monster3 = 0;
// let monster4 = 0;
let curentbtn = {
  element: "",
  monster: monster1,
  monsimg: "",
  headline: headline1
};

function updatePoints(monster, headline) {
  const lives = "🖤";
  const html = `Lives: ${lives.repeat(4 - monster)}`;
  headline.innerHTML = html;
}


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
  updatePoints(curentbtn.monster, curentbtn.headline);
  console.log(curentbtn.monster);
  // change the inner html to the new mondtser

  // if the points is 4 kill the monster:
  if (curentbtn.monster == 4) {
    console.log("the monster id dead!")
    // maybe insted ad classes..........
    document.getElementsByClassName(curentbtn.monsimg)[0].src = "img/50-Halloween-Zombie-Icons-O-08.png";
  }
});

// monster 1 = change the colors and switch points!
list1.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    // e.target.parentElement.classList.add("oktoday");
    curentbtn.element = e.target.parentElement;
    curentbtn.monsimg = "monimg1";
    curentbtn.monster = monster1;
    curentbtn.headline = headline1;
  }
});
// monster 2
list2.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    // e.target.parentElement.classList.add("oktoday");
    curentbtn.element = e.target.parentElement;
    curentbtn.monsimg = "monimg2";
    curentbtn.monster = monster2;
    curentbtn.headline = headline2;
  }
});
// monster 3
list3.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    // e.target.parentElement.classList.add("oktoday");
    curentbtn.element = e.target.parentElement;
    curentbtn.monsimg = "monimg3";
    curentbtn.monster = monster3;
    curentbtn.headline = headline3;
  }
});

// list.addEventListener('click', function (e) {
//   var t = e.target;
//   if (t.classList.contains('checked')) {
//     t.parentNode.removeChild(t);
//   } else {
//     t.classList.add('checked');
//   }
//   store();
// }, false)

// function store() {
//   window.localStorage.myitems = list.innerHTML;
// }

function updateUI(data) {
  // loop go over all the saved object and if there is a change change the ui acordinly
  updateMonster()
  updateMonster()
  updateMonster()

}

function updateMonster(params) {

}

// // check if element saved in local storege and if so update the softwere based on it:
// if (localStorage.getItem('monsters')) {
//   updatePoints(monster1, headline1);
//   updatePoints(monster2, headline2);
//   updatePoints(monster3, headline3);
//   console.log("there is a monster here!");
//   const stored = localStorage.getItem('monsters');
//   // updateUI(stored)
//   //   .then(data => updateUI(data))
//   //   .catch(err => console.log(err));
// } else {
//   // create an object name monsters that containg the folow:
//   var monsterObject = {
//     monsterOne: {
//       monsterPoints: 0,
//       onee: false,
//       two: false,
//       three: false,
//       four: false
//     },
//     monsterTwo: {
//       monsterPoints: 0,
//       onee: false,
//       two: false,
//       three: false,
//       four: false
//     },
//     monsterThree: {
//       monsterPoints: 0,
//       onee: false,
//       two: false,
//       three: false,
//       four: false
//     }
//   };
//   localStorage.setItem('monsters', JSON.stringify(monsterObject));

//   // console.log(stored);
//   console.log(JSON.parse(stored));
// }

// // button that delete all my local srorege:
// // localStorage.clear();


// const person = {
//   name: "Obaseki Nosa",
//   location: "Lagos",
// }

// window.localStorage.setItem('user', JSON.stringify(person));

// // /////////////////////////////
// window.localStorage.getItem('user');
// // //////////////////////////////// remove
// window.localStorage.clear();
// // ////////////////////////////////////
// var KeyName = window.localStorage.key(index);

// ///////////////////////////////////////////////// local storage


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
  }

  static addBookToList(book) {
    const list = document.querySelector(book.name);
    list.innerHTML = book.monsterHtml;
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
        monsterHtml: `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>part1 try</span>
          <i class="fas fa-bomb delete" data-toggle="modal" data-target="#exampleModal"></i>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>part1 try</span>
          <i class="fas fa-bomb delete" data-toggle="modal" data-target="#exampleModal"></i>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>part1 try</span>
          <i class="fas fa-bomb delete" data-toggle="modal" data-target="#exampleModal"></i>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>part1 try</span>
          <i class="fas fa-bomb delete" data-toggle="modal" data-target="#exampleModal"></i>
        </li>
      `
      }];
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

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// // Event: Add a Book
// document.querySelector('#book-form').addEventListener('submit', (e) => {
//   // Prevent actual submit
//   e.preventDefault();
//   // Get form values
//   const title = document.querySelector('#title').value;
//   const author = document.querySelector('#author').value;
//   const isbn = document.querySelector('#isbn').value;
//   // Validate
//   if (title === '' || author === '' || isbn === '') {
//     UI.showAlert('Please fill in all fields', 'danger');
//   } else {
//     // Instatiate book
//     const book = new Book(title, author, isbn);
//     // Add Book to UI
//     UI.addBookToList(book);
//     // Add book to store
//     Store.addBook(book);
//     // Show success message
//     UI.showAlert('Book Added', 'success');
//     // Clear fields
//     UI.clearFields();
//   }
// });

// // Event: Remove a Book
// document.querySelector('#book-list').addEventListener('click', (e) => {
//   // Remove book from UI
//   UI.deleteBook(e.target);
//   // Remove book from store
//   Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
//   // Show success message
//   UI.showAlert('Book Removed', 'success');
// });