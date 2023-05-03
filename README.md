# ToDoList
## Purpose
Everyone has things to do, and lists are a great way to track those things.  I made this application because tracking "todos" is a universal need.  This app allows anyone to track as many tasks as they want, mark them as complete, and delete any unneeded tasks.  

## How to use the app
The app is deployed here: https://todolist-2ito.onrender.com/

When using the application you are presented with a welcome message, an input box, and a submit button, as well as a to do list.  Simply type your task into the input box and hit submit.  Once that is done the task you typed is added to the to do list.

The To Do List will show all tasks the user has entered.  Each todo also has two buttons: done and delete.  The done button will mark the todo as complete, which is represented by a strike through the now green text.  The done button can be pressed again to undo the completion.  The delete button however will remove the task from the list entirely.

## Issues and Warnings
The server deployment will "sleep" after 15 mins of inactivity.  It will "wake up" 30 seconds~ after a request.  So you may just need to wait a bit for the todos to load

## Planned Functionality
As it stands the deployment is universal.  Every user sees and interacts with the same database.  User authentication is turning out to be way more than I expected.  The tutorial I was following has context and custom hooks which I don't have and don't understand.  I can create users through postman just fine, but adding that functionality to the frontend is overwhelming.  

## Technologies
HTML, CSS, JavaScript, React, React-Router-Dom, Express, Mongoose, Dotenv, Bcrypt, Validator, Json Web Tokens

## Citations
Potts, T (2021) mern-todo [source code] https://github.com/TylerPottsDev/mern-todo

The Net Ninja (2022) MERN-auth-tutorial [source code] https://github.com/iamshaunjp/MERN-Auth-Tutorial/tree/main