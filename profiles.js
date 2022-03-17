const embed = require("./embed.js");
const sqlite3 = require("sqlite3").verbose();

function getProfile(path, targetChannel, Steam64Id) {
  db = new sqlite3.Database(path, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }

    const sqlRead = `SELECT * FROM players WHERE steam64ID = '${Steam64Id}'`;

    db.all(sqlRead, [], (err, rows) => {
      if (err) return console.error(err.message);

      if (rows[0] != undefined) {
        // embed.profileTemplate.setTitle(rows[0])
        targetChannel.send(embed.profileTemplate);
      } else {
        embed.errorMessage.setTitle("⛔ Error: Unknown Player ID");
        targetChannel.send(embed.errorMessage);
      }
    });

    targetChannel.send("Connected to the Item database.");
  });
}

module.exports.getProfile = getProfile;
