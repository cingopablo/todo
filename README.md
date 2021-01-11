# Simple React APP - TODO APP

Basic todo app based on a Create React Template using Redux as the state management solution.

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
