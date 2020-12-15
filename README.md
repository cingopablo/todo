# Coding Task - TODO APP

This is the coding task assigned for Wednesday

## User stories

- User can see an input field where he can type in a to-do item
- By pressing enter (or a button), the User can submit the to-do item and can see that being added to a list of to-do’s
- User can mark a to-do as completed (you can choose a way to indicate the task is completed.

### Nice to have

- Styling. Would be great if you can add a minimum of styling to your app to make it look nicer.
- Testing. Optional, but would be good if you can show us how would test your app.

## General

The app is React application based on the CRA template (https://github.com/facebook/create-react-app) and for state management redux was used.

I took the liberty to change a little bit the user stories, but no major changes were introduced.

For inspiration, I used the Reminders app for MacOS.

### Code formatting and rules

The formatter used during development was Prettier, and Eslint was the chosen linter to help me follow the airbnb style guides.

## Features

- All the elements in the UI were splitted into components.
- The styling of the whole app was made with styled-components.
  > This way, you should be able to merge this whole app into another and have no css issues whatsoever.
- LocalStorage: don't lose your TODOs and save only the elements with text in the browser storage.
- Control what happens in your app with redux store.
  > This also helps with future proof the app for possible expansions.

### How to run?

First of all, install the needed dependencies using `npm install`
.
After that run the app with `npm start`

## Testing

As discussed, my knowledge of testing is very basic. Nontheless, i've done a few basic tests in some components.
For running use `npm test`
