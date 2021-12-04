# FTX HEBE BACKEND

The backend is build using NodeJs and Express
- index.js helps to run the server.
- Inside the /src/model folder all the models that are used in the backend are created
- Inside the /src/routes folder all the api routes are declared and defined
- Inside the middleware auth middleware is created to authenticate the user using JWT

## How to run the backend on your system :- 

- Clone this project on your system
- cd into the ftx_backend folder through terminal
- Run `npm install` command in your terminal, this will help to install the dependencies
- After dependecies get successfully install, Run `npm run server` in your terminal, this will run your backend successfully on port 5000

### Currently backend is deployed on Heroku on the given link as our api baseurl : https://ftxhebe.herokuapp.com

## Libraries Used :- 

- BcryptJs: A library to help you hash passwords.
- Cors: CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- Dotenv: Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
- Express: Fast, unopinionated, minimalist web framework for node.
- JsonWebToken (JWT): An implementation of JSON Web Tokens.
- NodeMon: nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected
- Razorpay: Official nodejs library for Razorpay API.
- Mongoose: Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
- ShortId: Amazingly short non-sequential url-friendly unique id generator.

### FTX HEBE FRONTEND REPO :- https://github.com/agentraghav/ftx_frontend
