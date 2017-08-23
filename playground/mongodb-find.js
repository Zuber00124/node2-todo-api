
const {MongoClient, ObjectID} = require('mongodb');


 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
       return console.log('unable to connect mongo server');
    }
    console.log('Connected to MongoDB Server');
   
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //    // console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) =>{
    //     console.log('Unable to fetch todos', err);
        
    // });

        db.collection('Users').find({name: 'Zuber'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));

        });

    // db.close();
});