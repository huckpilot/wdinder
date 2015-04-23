var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('wdinder.db');
db.run("INSERT INTO dates (user_name, address, password, phone_number, pic) VALUES (?, ?, ?, ?, ?), (?, ?, ?, ?, ?), (?, ?, ?, ?, ?)",
  'john', "666 Devils Lane", 'password1', '5558675309', 'url1',
  'bridget', '555 Angel Cir', 'password2', '4443429876', 'url2',
  'Camilla', '111 purgatory drive', 'password3', '8652224564', 'url3',
  function(err) {
    if (err) {
      throw err;
    }
  }
);
