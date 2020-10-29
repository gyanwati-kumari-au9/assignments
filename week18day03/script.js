function postModel(){
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.completed = completed;

}

function toPostModel(res){
    var result =[];
    //loop
    for (var j=0; j < res.length; j++){
        result.append(postModel);
    }
    return result;
}

$.ajax({
    url:'https://jsonplaceholder.typicode.com/todos',
    type: 'get',
    success: function(res){
        console.log("Finised data retrieval")
        var todos = toPostModel(res);
        for(var i=0; i < todos.length; i++){
            console.log(todos[i]);
            var li = '<li>' +todos[i].id+'<br /> '+ todos[i].title+ '</li>'
            $('body').append(li);
        }
    }
});

