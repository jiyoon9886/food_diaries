module.exports = {
  "development": {
    "username": "root",
<<<<<<< HEAD:config/config.json
    "password": "Peterlam1234",
=======
    "password": process.env.DB_PASSWORD,
>>>>>>> master:config/config.js
    "database": "food_diary_db",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
