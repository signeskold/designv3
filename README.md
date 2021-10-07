# jsramverk.se - Backend

This part of the course 'jsramverk' is about creating an API answering with JSON
by using Express and the document oriented database MongoDB.

## Installation

1. Run `npm init`. This will create a package.json file.

2. Run `npm install express cors morgan --save`. This will install three packages:
    - **Express** is a minimal and flexible Node.js web application framework that
    provides a robust set of features for web and mobile applications.
    - **CORS** (cross-origin resource sharing is an HTTP-header based mechanism that
    allows a server to indicate any origins (domain, scheme, or port) other than
    its own from which a browser should permit loading resources.
    - **Morgan** is an HTTP request logger middleware for node.js.

3. Run `npm install -g nodemon`. **nodemon** is a tool that helps develop node.js
based applications by automatically restarting the node application when file
changes in the directory are detected.

4. The database **MongoDB** can be downloaded from the following page:
https://www.mongodb.com/try/download/community.

5. Run `npm install`, followed by `npm install mongodb --save`. This installs the
official MongoDB driver for Node.js.

6. Clone this repository from Github.

7. Create a file config.json in the project root directory, so that you can log
in to the database, with the following contents:

```
{
    "username": "yourusername"
    "password": "yoursecretpassword"
}
```

## Starting the API

1. Run `npm start`. Now the server will listen on port 1337.

2. Open http://localhost:1337/ in `curl` or a web browser to access the routes.

## Routes

We want to perform four different operations, and therefore four routes are
necessary. To show the affinity between these, the routes were given a common
prefix.

- `/docs/create`: create a new document. A unique file name must be supplied.
- `/docs`: read all documents. Used for listing available documents.
- `/docs/:id`: read one document. Retrieves the document and shows its contents in the editor.
- `/docs/update`: update a document. Saves the edited document.
