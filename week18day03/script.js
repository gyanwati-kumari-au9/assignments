var entryPoint = document.querySelector("ul");
var url =
  "https://615e24aa66ca562186805af3c7364ae3.safeframe.googlesyndication.com/safeframe/1-0-37/html/container.html";
var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.responseType = "json";
xhr.send();
entryPoint.innerHTML = "Loading............";

xhr.onload = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      entryPoint.innerHTML = "";
      var li = "";
      data.map((item) => {
        li = li + `<li data-id=${item.id}>${item.title}</li>`;
      });
      entryPoint.innerHTML = li;
    } else {
      console.log("hey we have some error");
    }
  }
};

entryPoint.addEventListener("click", function (e) {
  console.dir(e.target.innerText);
});

// function postModel(){
//     this.id = id;
//     this.userId = userId;
//     this.title = title;
//     this.completed = completed;

// }

// function toPostModel(res){
//     var result =[];
//     //loop
//     for (var j=0; j < res.length; j++){
//         result.append(postModel);
//     }
//     return result;
// }

// $.ajax({
//     url:'https://jsonplaceholder.typicode.com/todos',
//     type: 'get',
//     success: function(res){
//         console.log("Finised data retrieval")
//         var todos = toPostModel(res);
//         for(var i=0; i < todos.length; i++){
//             console.log(todos[i]);
//             var li = '<li>' +todos[i].id+'<br /> '+ todos[i].title+ '</li>'
//             $('body').append(li);
//         }
//     }
// });

