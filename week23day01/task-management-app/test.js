var tasks = [];

function printTask(){
    console.log(tasks);
}

function addTask(x){
    return tasks.push(x);
}

function deleteTask(id){
    // var res = []
    for (var i = 0; i < tasks.length; i++){
        // console.log(tasks[i].id);
        if (tasks[i].id === id){
           tasks.splice(i,1)
           return false
        }
    }
}

function update(task){
    var objIndex = tasks.findIndex((obj => obj.id === task.id));

    //Log object to Console.
    console.log("Before update: ", tasks[objIndex])

    //Update object's name property.
    tasks[objIndex].name = task.name
}

printTask();
addTask({id:1, name:'Buy Coffee'})
addTask({id:2, name:'Eat'})
addTask({id:3, name:'Sleep'})


printTask();

deleteTask(3);
update({id:2, name:'Updaed Eat'})
printTask();




