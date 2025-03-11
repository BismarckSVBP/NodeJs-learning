const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database and Collection
const dbName = 'shorturl2';
const collectionName = 'users';

async function connectToDatabase() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log('Connected to database');

    // Select the database
    const db = client.db(dbName);

    // Select the collection
    const collection = db.collection(collectionName);

    return collection;
  } catch (error) {
    console.error(error);
  }
}

async function checkUsernameExists(username) {
  const collection = await connectToDatabase();

  try {
    const user = await collection.findOne({ username: username });
    if (user) {
      console.log('Username already exists');
      return true;
    } else {
      console.log('Username is available');
      return false;
    }
  } catch (error) {
    console.error(error);
  } finally {
    // Close the connection to the database
    await client.close();
  }
}

// // Example usage
// const usernameToCheck = 'exampleUsername';
// checkUsernameExists(usernameToCheck).then(exists => {
//   if (exists) {
//     console.log('Username is taken.');
//   } else {
//     console.log('Username is available.');
//   }
// });
module.exports={
    checkUsernameExists,
}