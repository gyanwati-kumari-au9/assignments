// Consider this data object
// {
// "Post-1": {
// "userId": 1,
// "id": 1,
// "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et
// cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem
// eveniet architecto"
// },
// "Post-2": {
// "userId": 1,
// "id": 2,
// "title": "qui est esse",
// "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores
// neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non
// debitis possimus qui neque nisi nulla"
// },
// "Post-3": {
// "userId": 1,
// "id": 3,
// "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
// "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem
// doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
// },
// "Post-4": {
// "userId": 1,
// "id": 4,
// "title": "eum et est occaecati",
// "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda
// provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam
// iure\nquis sunt voluptatem rerum illo velit"
// }
// }
// Make it an iterable using
// 1. Iterators
// 2. Generators
// When that object is passed inside a FOR OF loop, I should get the output of each
// item as the following pattern.
// Post Id: 1 Title: Some title
// Post Id: 2 Title: Some other title
// And so on …

const dic =  {
    "Post-1": {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    "Post-2": {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    "Post-3": {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    "Post-4": {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"

    }
};
   

function* increment(i) {
    yield i + 1;
    yield i + 2;
}
var obj = increment(10);

function* objectEntries(obj) {
    const propKeys = Reflect.ownKeys(obj);

    for (const propKey of propKeys) {
        // `yield` returns a value and then pauses
        // the generator. Later, execution continues
        // where it was previously paused.
        yield [propKey, obj[propKey]];
    }
}

for (const [key,value] of objectEntries(dic)) {
    console.log(`Post Id: ${value.id} Title: ${value.title}`);
}