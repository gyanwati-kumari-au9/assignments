var div = document.createElement('div')
var h1 = document.createElement('h1')
h1.innerText="DOM Manipulation"
div.appendChild(h1)

var ul = document.createElement('ul')
var li1 = document.createElement('li')
li1.innerText="div"
ul.appendChild(li1)

var li2 = document.createElement('li')
li2.innerText="ul"
ul.appendChild(li2)

var li3 = document.createElement('li')
li3.innerText="li"
ul.appendChild(li3)

div.appendChild(ul)
document.body.appendChild(div)


