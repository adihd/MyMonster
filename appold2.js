// const addForm = document.querySelector('.add');
// const search = document.querySelector('.search input');

const list1 = document.querySelector('.monsterlist1');
const list2 = document.querySelector('.monsterlist2');
const list3 = document.querySelector('.monsterlist3');
// const list4 = document.querySelector('.monsterlist4');
const headline1 = document.querySelector(".classh1");
const headline2 = document.querySelector(".classh2");
const headline3 = document.querySelector(".classh3");

let monster1 = 0;
let monster2 = 0;
let monster3 = 0;
// let monster4 = 0;

function updatePoints(monster, headline) {
    const lives = "🖤";
    const html = `Lives: ${lives.repeat(4 - monster)}`;
    headline.innerHTML = html;
}

// monster 1 = change the colors and switch points!
list1.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        // e.target.parentElement.classList.add("oktoday");
        e.target.parentElement.style.background = "#7372BD";
        monster1 += 1;
        updatePoints(monster1, headline1);
        console.log(monster1);
        // change the inner html to the new mondtser
        e.target.classList.remove("delete");
        // if the points is 4 kill the monster:
        if (monster1 == 4) {
            console.log("the monster id dead!")
            // maybe insted ad classes..........
            document.getElementsByClassName("monimg1")[0].src = "img/50-Halloween-Zombie-Icons-O-08.png";
        }
    }
});


// monster 2
list2.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        // e.target.parentElement.classList.add("oktoday");
        e.target.parentElement.style.background = "#7372BD";
        monster2 += 1;
        updatePoints(monster2, headline2);
        console.log(monster2);
        // change the inner html to the new mondtser
        e.target.classList.remove("delete");
        // if the points is 4 kill the monster:
        if (monster2 == 4) {
            console.log("the monster id dead!")
            // maybe insted ad classes..........
            document.getElementsByClassName("monimg2")[0].src = "img/50-Halloween-Zombie-Icons-O-08.png";
        }
    }
});


// monster 3
list3.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        // e.target.parentElement.classList.add("oktoday");
        e.target.parentElement.style.background = "#7372BD";
        monster3 += 1;
        console.log(monster3);
        updatePoints(monster3, headline3);
        // change the inner html to the new mondtser
        e.target.classList.remove("delete");
        // if the points is 4 kill the monster:
        if (monster3 == 4) {
            console.log("the monster id dead!")
            // maybe insted ad classes..........
            document.getElementsByClassName("monimg3")[0].src = "img/50-Halloween-Zombie-Icons-O-08.png";
        }
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

// check if element saved in local storege and if so update the softwere based on it:
if (localStorage.getItem('monsters')) {
    updatePoints(monster1, headline1);
    updatePoints(monster2, headline2);
    updatePoints(monster3, headline3);

    console.log("there is a monster here!");
    const stored = localStorage.getItem('monsters');
    // updateUI(stored)
    console.log(stored);
    //   .then(data => updateUI(data))
    //   .catch(err => console.log(err));
} else {
    // create an object name monsters that containg the folow:
    var html = `mosterList: '<li class="list-group-item d-flex justify-content-between align-items-center"><span>play mariokart</span><i class="fas fa-bomb delete"></i></li>'mosterList: '<li class="list-group-item d-flex justify-content-between align-items-center"><span>play mariokart</span><i class="fas fa-bomb delete"></i></li>'mosterList: '<li class="list-group-item d-flex justify-content-between align-items-center"><span>play mariokart</span><i class="fas fa-bomb delete"></i></li>'mosterList: '<li class="list-group-item d-flex justify-content-between align-items-center"><span>play mariokart</span><i class="fas fa-bomb delete"></i></li>'`;
    var monsterObject = {
        monsterOne: {
            monsterPoints: 0,
            mosterList: html
        },
        monsterTwo: {
            monsterPoints: 0,
            mosterList: html
        },
        monsterThree: {
            monsterPoints: 0,
            mosterList: html
        }
    };
    localStorage.setItem('monsters', JSON.stringify(monsterObject));

    // console.log(stored);
    // console.log(JSON.parse(stored));
}



// button that delete all my local srorege:
// localStorage.clear();






















// // monster 4 
// list4.addEventListener('click', e => {
//   if (e.target.classList.contains('delete')) {
//     // e.target.parentElement.classList.add("oktoday");
//     e.target.parentElement.style.background = "#fff";
//     monster4 += 1;
//     console.log(monster4);
//     // change the inner html to the new mondtser
//     e.target.classList.remove("delete");
//     // if the points is 4 kill the monster:
//     if (monster4 == 4) {
//       console.log("the monster id dead!")
//       // maybe insted ad classes..........
//       document.getElementsByClassName("monimg4")[0].src = "img/50-Halloween-Zombie-Icons-O-08.png";
//     }
//   }
// });



// function killMonster(monsterclass) {
//   console.log(document.getElementsByClassName(monsterclass).src);
//   document.getElementsByClassName(monsterclass)[0].src = "img/50-Halloween-Zombie-Icons-O-08.png";
//   console.log(document.getElementsByClassName(monsterclass).src);
// };

// const filterTodos = term => {

//   // add filtered class
//   Array.from(list.children)
//     .filter(todo => !todo.textContent.toLowerCase().includes(term))
//     .forEach(todo => todo.classList.add('filtered'));

//   // remove filtered class
//   Array.from(list.children)
//     .filter(todo => todo.textContent.toLowerCase().includes(term))
//     .forEach(todo => todo.classList.remove('filtered'));

// };

// // add todos event
// addForm.addEventListener('submit', e => {

//   e.preventDefault();
//   const todo = addForm.add.value.trim();

//   if (todo.length) {
//     generateTemplate(todo);
//     addForm.reset();
//   }

// });

// // delete todos event 
// list.addEventListener('click', e => {

//   if (e.target.classList.contains('delete')) {
//     e.target.parentElement.remove();
//   }

// });




// // filter todos event
// search.addEventListener('keyup', () => {

//   const term = search.value.trim().toLowerCase();
//   filterTodos(term);

// });