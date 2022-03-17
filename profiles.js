const embed = require("./embed.js");
const sqlite3 = require("sqlite3").verbose();

function getProfile(path, targetChannel, steam64ID) {
  db = new sqlite3.Database(path, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(steam64ID);
    const sqlRead = `SELECT * FROM players WHERE steam64ID = '${steam64ID}'`;

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

module.exports.getProfile = getProfile;
