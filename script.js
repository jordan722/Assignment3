
// 1 - Select the section with an id of container without using querySelector.
var y = document.getElementById("container");
console.log(y);

// 2) Select the section with an id of container using querySelector.
var x = document.querySelector("#container");
console.log(x);

// 3) Select all of the list items with a class of "second".
var x = document.querySelectorAll(".second");
console.log(x);

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
var x = document.getElementsByTagName('ol')[0].querySelectorAll('.third')
console.log(x);


// 5) Give the section with an id of container the text "Hello!".
var y = document.getElementById("container");
var hello = document.createTextNode("Hello!")
y.prepend(hello)


// 6) Add the class main to the div with a class of footer.
document.querySelector('.footer').classList.add('main');

// 7) Remove the class main on the div with a class of footer.
document.querySelector('.footer').classList.remove('main');

// 8) Create a new li element.
var li = document.createElement('li');

// 9) Give the li the text "four".
var text = document.createTextNode('four');
li.appendChild(text);

//10) Append the li to the ul element.
var list = document.getElementsByTagName('ul')[0];
list.appendChild(li);
// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
var ol = document.getElementsByTagName('ol')[0];
console.log(ol.children);
for(var i = 0; i < ol.children.length; i++){
  console.log(ol.children[i]);
  ol.children[i].style.backgroundColor = 'green';
  //i.style.backgroundColor = "green";
}


// 13) Remove the div with a class of footer.
var x = document.querySelector('.footer');
x.parentNode.removeChild(x);
