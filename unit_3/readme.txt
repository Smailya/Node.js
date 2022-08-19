Lesson:13
Installing MongoDB 
MongoDB is an open-source database program that organizes data by using documents. MongoDB documents store data in a JSON-like structure, MongoDB stores documents as BSON, MongoDB a NoSQL database system. To install in window do the followings:
      -  Go to https://www.mongodb.com/download-center#community in your browser. 
Download MongoDB for Windows (.msi). 
When the download is complete, open the file, and click through the default installation steps. 
When the installer completes, go to your C:\ drive, and create a new folder called data and a folder within it called DB.
Then add the MongoDB folder path to your environment’s PATH variable, by going to the environment variable then, add your MongoDB executable path to this string. Your MongoDB path might look something like C:\Program Files\MongoDB\Server\3.6.2\bin. To start mongoDB write mongod in a terminal window.
Reading and entering data within the MongoDB shell 

To view all available databases, run show dbs in your mongosh. To create a new database enter <new_dbname> in your shel. You can also simultaneously switch into it by entering use recipe_db. Then run db again to see that you’re within the recipe_db database. To add write
 db.contacts.insert({ name: "Mike Wexler",
 email: "Mike@mikewexler.com", 
note: "Decent guy." })
To view your data enter:  db.contacts.find()
Enter this to find specific ID db.contacts
.find({_id: ObjectId("62ea5f433af3a01b95c1f24c")})
*change the keyword find with delete or update

Connecting MongoDB to a Node.js application
To add MongoDB to your Node.js install the mongodb package by running npm i mongodb@3.6.3 -S. This command saves the mongodb package to your project’s package.json dependencies. You will also have to add mongodb connection to your main.js you can also  Insert data from your Node.js application into terminal 
Lesson:14
Installing and connecting Mongoose to your Node.js application
To install Mongoose, run npm i mongoose -S. With Mongoose, you no longer need to require mongodb at the top of main.js or use any of the MongoDB code from lesson 13.
Creating a schema
A schema is a blueprint for how you want data to be organized for specific objects in your application, refer to code Listing 14.3 &14.4  in book.
Building and instantiating Mongoose data models  
 refer to codeListing 14.5
Loading and saving data with custom methods
refer to codeListing 14.6
Lesson:14
Connecting controllers to models
controllers are the glue between your models (the data) and your views (the web page)You require mongoose so that you have access to the tools needed to save your model to the database. Next, require the Subscriber model from your subscriber module so that you can integrate the model into your code logic; you no longer need any reference to the Subscriber model in main.js Make sure that you still have Express.js installed and working properly refer to 15.1. & 15.3  In book for the code for creating the controller
Saving data through a controller action  
Refer to Listing 15.5 & 15.6 
Implementing database queries with promises
promises facilitate a chain of functions, usually callback functions, in asynchronous queries. A promise is a JavaScript object that contains information about the state of a function call and what the next call in the chain needs to see.
Refer to Listing 15.7 & 15.8 
Handling posted form data
Refer to 15.9
Capstone:
npm i mongoose -S & 

