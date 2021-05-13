// 1. Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';


const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};


const tea4TeamFCC = getTea(40);

// 2.Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';


const prepareBlackTea = () => 'blackTea';


const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};


const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13); 


console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

// 3. tabs is an array of titles of each site open within the window
var Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function (index) {
  
     var tabsAfterIndex = this.tabs.splice(index); 
   var tabsAfterIndex = this.tabs.splice(1); 
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); 
  
    return this;
   };

  var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  

  var finalTabs = socialWindow
    .tabOpen() 
    .join(videoWindow.tabClose(2))
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);

  // 4.The global variable
var fixedValue = 4;

function incrementer () {
 

  return fixedValue + 1;

}


// 5.The global variable
var fixedValue = 4;
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function incrementer(value) {
  return value + 1;
  
  
  }
  // Change code above this line
var differentValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4

// Change code below this line
function remove (bookName) {
  var book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
// 6.The global variable
var ratings = [];
for(var i=0; i < watchList.length; i++){
  ratings.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
}
const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));

// 7.The global variable
var s = [23, 65, 98, 5];

// The global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback, arr = [], i = 0) {
  return i < this.length
    ? this.myMap(callback, arr.concat(callback(this[i])), i + 1)
    : arr;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

// 8
var filteredList = watchList
  .map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  })
  .filter(movie => {
    // return true it will keep the item
    // return false it will reject the item
    return parseFloat(movie.rating) >= 8.0;
  });
// Only change code above this line

console.log(filteredList);

//9. The global variable
let s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
 
  let newArray = [];
  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  });

  return newArray;
};

let new_s = s.myFilter(function(item){
  return item % 2 === 1;
});


  // 10.

  function sliceArray(anim, beginSlice, endSlice) {
   
    return anim.slice(beginSlice, endSlice);
  
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);


    // 11.
    function nonMutatingSplice(cities) {
       
      
        return cities.slice(0, 3);
      
      
      }
      var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
      nonMutatingSplice(inputCities);

    //   12.
    function nonMutatingConcat(original, attach) {
     
      
        return original.concat(attach);
      
       
      }
      var first = [1, 2, 3];
      var second = [4, 5];
      nonMutatingConcat(first, second);

