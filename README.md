# ToDoList
## How to use the app
The app is deployed here: https://todolist-2ito.onrender.com/

When loading the app users are presented with an input field.  This is to add todos.  In order to use the input you must be logged in.  You can go to the top of the page and click sign up to create an account.  Accounts require a valid email address and a strong password.  Once signed up users are automatically logged in, with their email displayed in the navbar.  Once logged in, you can add, delete, and mark todos as done.  Do note that the list of todos is universal.  Every user sees the same todos and can interract with them.  

## Issues and Warnings
The server deployment will "sleep" after 15 mins of inactivity.  It will "wake up" 30 seconds~ after a request.  So you may just need to wait a bit for the todos to load

## Planned Functionality
While there is user authentication and authorization, there are no user filtered lists.  This makes the app an unintuitive todo list, but still serves as a display of function.  Filtering may be added later, but for the purposes of grading this is what I have.  

## Technologies
HTML, CSS, JavaScript, React, React-Router-Dom, Express, Mongoose, Dotenv, Bcrypt, Validator, Json Web Tokens

## Citations
Potts, T (2021) mern-todo [source code] https://github.com/TylerPottsDev/mern-todo

The Net Ninja (2022) MERN-auth-tutorial [source code] https://github.com/iamshaunjp/MERN-Auth-Tutorial/tree/main