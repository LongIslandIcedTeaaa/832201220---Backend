const db = require('../config/db');

exports.getAllContacts = async (req, res) => {
  const [results] = await db.query('SELECT * FROM contacts');
  res.json(results);
};

// 其他控制器方法...
