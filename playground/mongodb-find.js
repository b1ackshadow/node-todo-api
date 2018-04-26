// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//to simply create a new object id as in the _id by mongodb use below code
// var obj1 = new ObjectID();
// console.log(obj1);
// var obj2 = new ObjectID();
// console.log(obj2);


MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
var db = client.db('TodoApp');
  if(err)
  {
    return console.log('Unable to connect to mongo');
  }
  console.log('Connected to mongo');

  // db.collection('Todos').find({text:'walking'}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   //console.log(JSON.stringify(docs,undefined,2));
  //   console.log(`Id\t text\t completed\n`);
  //   for(var i=0; i<docs.length;i++)
  //   {
  //     console.log(`${docs[i]._id}\t ${docs[i].text}\t ${docs[i].completed}`);
  //     console.log(typeof docs[i]._id);
  //   }
  // },(err)=>{
  //   console.log("unable to fetch");
  // });

  db.collection('Todos').find().count().then((count)=>{
    console.log('Todos');
    //console.log(JSON.stringify(docs,undefined,2));
  console.log(`Todos count :${count}`);

  },(err)=>{
    console.log("unable to fetch");
  });


  setTimeout(()=>{
    client.close();
  },5000)
});
