# My Food Diary

A full-stack restaurant and meal logging application created with HTML, CSS, Node.js, Express, and MySQL.

## Table of Contents

- [Description](#description)
- [Demo](#demo)
- [Installation](#installation)
- [Tests](#tests)
- [Team](#team)
- [License](#license)

## Description

The front-end of the My Food Diary application was created with HTML and CSS, using [Bulma](https://bulma.io/) as the CSS framework. Node.js and Express were used for the back-end. User authentication was done with [Passport](http://www.passportjs.org/).

Once the user is authenticated, the _Home_ page is displayed, listing the user's inputs uploaded on the _Upload New_ page. User's entries are updated to the app's MySQL database.

Future developments will include a 'favorites' status for user entries, with entries displayed on the _Favorites_ page accordingly.

## Demo

The demo of the app can be found [here](https://food-diaries.herokuapp.com/).

## Installation

1. Clone the repository.

   ```
   git clone git@github.com:jiyoon9886/food_diaries.git
   ```

2. Install the application dependencies.

   ```
   cd food_diaries
   ```

   then,

   ```
   npm install
   ```

3. Run the server locally with the following command.

   ```
   node server
   ```

4. The application can now be opened on port 8080 at the URL `http://localhost:8080/`.

## Tests

To run development tests:

```
npm run test
```

## Team

- [Jiyoon Kim](https://github.com/jiyoon9886)
- [Peter Lam](https://github.com/plam1234)
- [Vimal Rampaul](https://github.com/vrampaul)
- [Brandon Sellam](https://github.com/masterkaizer)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
