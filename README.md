# ToDoList
## Purpose
Everyone has things to do, and lists are a great way to track those things.  I made this application because tracking "todos" is a universal need.  This app allows anyone to track as many tasks as they want, mark them as complete, and delete any unneeded tasks.  

## How to use the app
When using the application you are presented with a welcome message, an input box, and a submit button, as well as an empty to do list.  Simply type your task into the input box and hit submit.  Once that is done the task you typed is added to the to do list.

The To Do List will show all tasks the user has entered.  Each todo also has two buttons: done and delete.  The done button will mark the todo as complete, which is represented by a strike through the now green text.  The done button can be pressed again to undo the completion.  The delete button however will remove the task from the list entirely.

That's all there is to it (for now).  Using a To Do list is incredibly simple and incredibly useful!

## Issues and Warnings
As of now, submitting an empty todo crashes the server entirely and it will not comeback unless it is manually redeployed.  So don't do that.  Another server issue is a minor inconvinience: the server will "timeout" after 15 minutes.  It will "wake up" again 30 seconds after any request however. Just a bit annoying really

## Planned Functionality
All that needs to be done is User Authentication and all functionality will be met.

## Technologies
HTML, CSS, JavaScript, React, React-Router-Dom, Express, Mongoose, Dotenv

## Citations
Potts, T (2021) mern-todo [source code] https://github.com/TylerPottsDev/mern-todo