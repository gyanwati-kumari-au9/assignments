$.ajax({
    url:'https://api.github.com/users',
    type: 'get',
    success: function(res){
        console.log("Finised data retrieval")
        for(var i=0; i < res.length; i++){
          console.log(res[i]);
          var li = '<li><img src =" '+res[i].avatar_url+'" />' +res[i].login+'<br /> '+ res[i].id+ '<br /> '+res[i].type+'</li>'
            $('#github').append(li);
        }
    }
});