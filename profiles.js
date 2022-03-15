const Discord = require("discord.js");
const sqlite3 = require("sqlite3").verbose();

function read(path, targetChannel) {
  db = new sqlite3.Database(path, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    const sqlRead = "SELECT * FROM players";

    db.all(sqlRead, [], (err, rows) => {
      if (err) return console.error(err.message);

      rows.forEach((row) => {
        console.log(row);
      });

      db.close((err) => {
        if (err) return console.error(err.message);
      });
      console.log("db closed");
    });

    targetChannel.send("Connected to the Item database.");
  });
}

module.exports.read = read;
