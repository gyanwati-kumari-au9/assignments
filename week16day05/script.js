var header = document.createElement('header')

var h1 = document.createElement('h1')
h1.innerText="Numbers & Squares"
header.appendChild(h1)
document.body.appendChild(header)

var main = document.createElement('main')
var div1 = document.createElement('div')
div1.setAttribute('class','container')
main.appendChild(div1)


var div2 = document.createElement('div')
div2.setAttribute('class','table-responsive-sm')
div1.appendChild(div2)


var table = document.createElement('table')
table.setAttribute('class','table table-striped')
div2.appendChild(table)


var thead = document.createElement('thead')
table.appendChild(thead)


var tr1 = document.createElement('tr')
thead.appendChild(tr1)


var th1 = document.createElement('th')
th1.setAttribute('scope','col')
th1.innerText = "Number"
tr1.appendChild(th1)


var th2 = document.createElement('th')
th2.setAttribute('scope','col')
th2.innerText = "Squares"
tr1.appendChild(th2)


thead.appendChild(tr1)
table.appendChild(thead)


var tbody = document.createElement('tbody')
for (var i=1;i<=10;i++) {
    var tr2 = document.createElement('tr')
    var td1 = document.createElement('td')
    td1.innerText = i
    var td2 = document.createElement('td')
    td2.innerText = i*i
    tr2.appendChild(td1)
    tr2.appendChild(td2)
    tbody.appendChild(tr2)
}

table.appendChild(tbody)
div2.appendChild(table)
div1.appendChild(div2)
main.appendChild(div1)
document.body.appendChild(main)